// import React, { useState, useEffect } from 'react';
// import './HotList.css';

// const HotList = () => {
//   const [hotItems, setHotItems] = useState([]);

//   useEffect(() => {
//     // Fetch or update hot list content here
//     setHotItems([
//       { rank: 1, text: '量化私募高频交易费率或将提升9倍！', change: '+9.98%' },
//       { rank: 2, text: '六一中路：拉升金龙汽车出货大众交通', change: '+7.80%' },
//       { rank: 3, text: '特别国债3000亿加力支持', change: '' },
//       { rank: 4, text: '妖股出世，腾达科技五连板！', change: '+10.01%' },
//       { rank: 5, text: '东方甄选股价回到原点', change: '-22%' },
//     ]);
//   }, []);

//   return (
//     <div className="hot-list">
//       {hotItems.map(item => (
//         <div key={item.rank} className="hot-item">
//           <span className="rank">{item.rank}</span>
//           <span className="text">{item.text}</span>
//           <span className={`change ${item.change.startsWith('+') ? 'positive' : 'negative'}`}>
//             {item.change}
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HotList;


// import React, { useState, useEffect } from 'react';
// import './HotList.css';

// const HotList = () => {
//   const [hotItems, setHotItems] = useState([]);

//   useEffect(() => {
//     // Simulate fetching data from an API
//     setHotItems([
//       { id: 1, headline: '量化私募高频交易费率或将提升9倍！', detail: '高频交易费率提升' },
//       { id: 2, headline: '六一中路：拉升金龙汽车出货大众交通', detail: '金龙汽车出货' },
//       { id: 3, headline: '特别国债3000亿加力支持', detail: '国债支持' },
//       { id: 4, headline: '妖股出世，腾达科技五连板！', detail: '腾达科技连板' },
//       { id: 5, headline: '东方甄选股价回到原点', detail: '股价回落' },
//     ]);
//   }, []);

//   return (
//     <div className="hot-list">
//       {hotItems.map(item => (
//         <div key={item.id} className="hot-item">
//           <h3 className="headline">{item.headline}</h3>
//           <p className="detail">{item.detail}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HotList;
