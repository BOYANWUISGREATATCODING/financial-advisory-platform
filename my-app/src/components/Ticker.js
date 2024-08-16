import React, { useEffect, useRef } from 'react';
import './Ticker.css';

const Ticker = () => {
  const tickerRef = useRef();

  useEffect(() => {
    const scrollTicker = () => {
      tickerRef.current.scrollLeft += 1;
      if (tickerRef.current.scrollLeft >= tickerRef.current.scrollWidth - tickerRef.current.clientWidth) {
        tickerRef.current.scrollLeft = 0;
      }
    };
    const interval = setInterval(scrollTicker, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ticker" ref={tickerRef}>
      <div className="ticker-item">ASX 200: 7,830.80 +0.22%</div>
      <div className="ticker-item">Nikkei: 35,785.55 +2.17%</div>
      <div className="ticker-item">KOSPI: 2,616.96 -0.05%</div>
      <div className="ticker-item">HSI: 17,096.68 -0.09%</div>
      <div className="ticker-item">Shanghai: 2,856.09 -0.07%</div>
    </div>
  );
};

export default Ticker;



// import React, { useState, useEffect } from 'react';
// import './Ticker.css';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import './Index.css';
// import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

// // Register components and scales
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const Index = () => {
//   const [indices, setIndices] = useState({
//     AShare: [],
//     AsiaPacific: [],
//     Americas: [],
//     ExchangeRates: [],
//     Commodities: [],
//   });
//   const [activeTab, setActiveTab] = useState('AShare');
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   useEffect(() => {
//     // Simulate fetching data from an API
//     setIndices({
//       AShare: [
//         { name: '上证指数', value: '2890.90', change: '+0.14%', data: generateRandomData() },
//         { name: '深证成指', value: '8597.17', change: '+1.45%', data: generateRandomData() },
//         { name: '沪深300', value: '3409.29', change: '+0.29%', data: generateRandomData() },
//         { name: '创业板指', value: '1659.53', change: '+0.92%', data: generateRandomData() },
//       ],
//       AsiaPacific: [
//         { name: '恒生指数', value: '17021.31', change: '+0.10%', data: generateRandomData() },
//         { name: '日经指数', value: '37667.41', change: '-0.53%', data: generateRandomData() },
//       ],
//       Americas: [
//         { name: '道琼斯指数', value: '34678.91', change: '+0.20%', data: generateRandomData() },
//         { name: '纳斯达克指数', value: '13878.34', change: '+0.50%', data: generateRandomData() },
//         { name: '标普500', value: '4480.70', change: '+0.25%', data: generateRandomData() },
//         { name: '美国证交所', value: '4851.19', change: '-2.08%', data: generateRandomData() },
//       ],
//       ExchangeRates: [
//         { name: '伦敦金', value: '1800.10', change: '+0.15%', data: generateRandomData() },
//         { name: '美元指数', value: '104.30', change: '+0.10%', data: generateRandomData() },
//       ],
//       Commodities: [
//         { name: 'WTI原油', value: '77.24', change: '-0.50%', data: generateRandomData() },
//         { name: '布伦特原油', value: '79.30', change: '-0.40%', data: generateRandomData() },
//       ],
//     });
//   }, []);

//   const generateRandomData = () => {
//     const data = [];
//     for (let i = 8; i <= 17; i++) {
//       data.push({ x: `${i}:00`, y: Math.floor(Math.random() * 1000) });
//     }
//     return data;
//   };

//   const handleMouseEnter = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(null);
//   };

//   const renderChangeIcon = (change) => {
//     const isPositive = change.startsWith('+');
//     const Icon = isPositive ? FaArrowUp : FaArrowDown;
//     const color = isPositive ? 'red' : 'green';
//     return <Icon style={{ color, marginLeft: '5px' }} />;
//   };

//   const renderIndexSection = (title, indexData) => (
//     <div className="index-section">
//       <div className="ticker-wrapper">
//         <div className="ticker">
//           {indexData && indexData.map((index, idx) => (
//             <div key={index.name} className="ticker-item">
//               <span>{index.name}: {index.value} {index.change} {renderChangeIcon(index.change)}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="index-grid">
//         <div className="vertical-divider"></div>
//         {indexData && indexData.map((index, idx) => (
//           <div
//             key={index.name}
//             className={`index-item ${hoveredIndex === idx ? 'hovered' : ''}`}
//             onMouseEnter={() => handleMouseEnter(idx)}
//             onMouseLeave={handleMouseLeave}
//             style={{ flex: '1 1 40%' }}
//           >
//             <div className="index-info">
//               <div className="name">{index.name}</div>
//               <div className="value">{index.value}</div>
//               <div className={`change ${index.change.startsWith('+') ? 'positive' : 'negative'}`}>
//                 {index.change}
//               </div>
//             </div>
//             {hoveredIndex === idx && (
//               <div className="index-graph">
//                 <Line
//                   data={{
//                     datasets: [
//                       {
//                         label: index.name,
//                         data: index.data,
//                         fill: false,
//                         backgroundColor: 'rgba(75,192,192,0.4)',
//                         borderColor: 'rgba(75,192,192,1)',
//                       },
//                     ],
//                   }}
//                   options={{
//                     responsive: true,
//                     maintainAspectRatio: false,
//                     scales: {
//                       x: {
//                         type: 'category',
//                         labels: index.data.map((data) => data.x),
//                       },
//                       y: {
//                         display: true,
//                       },
//                     },
//                     plugins: {
//                       tooltip: {
//                         callbacks: {
//                           label: function(context) {
//                             return `时间: ${context.label}, 最新: ${context.raw.y}`;
//                           }
//                         }
//                       }
//                     }
//                   }}
//                   height={100}
//                 />
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="index">
//       <div className="tabs">
//         <button onClick={() => setActiveTab('AShare')}>A股</button>
//         <button onClick={() => setActiveTab('AsiaPacific')}>亚太</button>
//         <button onClick={() => setActiveTab('Americas')}>美洲</button>
//         <button onClick={() => setActiveTab('ExchangeRates')}>汇率</button>
//         <button onClick={() => setActiveTab('Commodities')}>商品期货</button>
//       </div>
//       {activeTab === 'AShare' && renderIndexSection('A股', indices.AShare)}
//       {activeTab === 'AsiaPacific' && renderIndexSection('亚太', indices.AsiaPacific)}
//       {activeTab === 'Americas' && renderIndexSection('美洲', indices.Americas)}
//       {activeTab === 'ExchangeRates' && renderIndexSection('汇率', indices.ExchangeRates)}
//       {activeTab === 'Commodities' && renderIndexSection('商品期货', indices.Commodities)}
//     </div>
//   );
// };

// export default Index;