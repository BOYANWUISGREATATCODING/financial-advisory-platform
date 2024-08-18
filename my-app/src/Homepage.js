// import React, { useState, useEffect } from 'react';
// import './Homepage.css';

// const Home = () => {
//   const [news, setNews] = useState([]);
//   const [filter, setFilter] = useState('');
//   const [showFocusWindow, setShowFocusWindow] = useState(false);
//   const [selectedTopics, setSelectedTopics] = useState([]);

//   useEffect(() => {
//     // Simulate fetching news data from an API
//     setNews([
//       { time: '21:16:20', headline: '财政策：实施支持科技创新专项担保计划。', url: '#' },
//       { time: '21:15:27', headline: '贝克休斯油服：目前看来，美国石油在下半年2024年复苏的可能性现在不大。', url: '#' },
//       { time: '21:14:21', headline: '芬兰方面表示俄罗斯船只侵犯了其领土完整。', url: '#' },
//       { time: '21:12:26', headline: '订单流5分钟图显示，21:12纯碱主力合约价格在空头堆积带下方波动，现报1821元/吨，跌幅2.57%。', url: '#' },
//       { time: '21:09:55', headline: '大摩：数据已经趋向于美联储所希望的方向。', url: '#' },
//     ]);
//   }, []);

//   const handleFilterChange = (e) => {
//     setFilter(e.target.value);
//   };

//   const handleFocusWindowToggle = () => {
//     setShowFocusWindow(!showFocusWindow);
//   };

//   const handleTopicSelection = (topic) => {
//     setSelectedTopics((prevTopics) =>
//       prevTopics.includes(topic) ? prevTopics.filter((t) => t !== topic) : [...prevTopics, topic]
//     );
//   };

//   const handleApply = () => {
//     setShowFocusWindow(false);
//     // Apply the selected topics filter logic
//   };

//   return (
//     <div className="home">
//       <h1>Financial Advisory Platform</h1>
//       <div className="header">
//         <div className="date-filter">
//           <span>{new Date().toLocaleDateString()}</span>
//           <select value={filter} onChange={handleFilterChange}>
//             <option value="">All News</option>
//             <option value="policy">Policy</option>
//             <option value="oil">Oil</option>
//             <option value="international">International</option>
//             <option value="market">Market</option>
//           </select>
//         </div>
//       </div>
//       <div className="news-list">
//         {news
//           .filter((item) => !filter || item.headline.includes(filter))
//           .map((item, idx) => (
//             <div key={idx} className="news-item">
//               <div className="news-time">{item.time}</div>
//               <a href={item.url} target="_blank" rel="noopener noreferrer" className="news-headline">
//                 {item.headline}
//               </a>
//             </div>
//           ))}
//       </div>
//       <div className="toolbar">
//         <button onClick={handleFocusWindowToggle}>Clustering</button>
//       </div>
//       {showFocusWindow && (
//         <div className="focus-window">
//           <h2>Select Topics</h2>
//           <div className="topics">
//             <h3>By Financial Product Type</h3>
//             {['Precious Metals', 'Oil', 'Foreign Exchange'].map((topic) => (
//               <div key={topic} className="topic">
//                 <input
//                   type="checkbox"
//                   id={topic}
//                   value={topic}
//                   checked={selectedTopics.includes(topic)}
//                   onChange={() => handleTopicSelection(topic)}
//                 />
//                 <label htmlFor={topic}>{topic}</label>
//               </div>
//             ))}
//             <h3>By Sector</h3>
//             {['Home Appliances', 'Aerospace', 'Technology'].map((topic) => (
//               <div key={topic} className="topic">
//                 <input
//                   type="checkbox"
//                   id={topic}
//                   value={topic}
//                   checked={selectedTopics.includes(topic)}
//                   onChange={() => handleTopicSelection(topic)}
//                 />
//                 <label htmlFor={topic}>{topic}</label>
//               </div>
//             ))}
//             <h3>By Stock</h3>
//             {['Big A', 'U.S. Stocks'].map((topic) => (
//               <div key={topic} className="topic">
//                 <input
//                   type="checkbox"
//                   id={topic}
//                   value={topic}
//                   checked={selectedTopics.includes(topic)}
//                   onChange={() => handleTopicSelection(topic)}
//                 />
//                 <label htmlFor={topic}>{topic}</label>
//               </div>
//             ))}
//             <h3>By Time</h3>
//             {['Latest News', 'Historical Data'].map((topic) => (
//               <div key={topic} className="topic">
//                 <input
//                   type="checkbox"
//                   id={topic}
//                   value={topic}
//                   checked={selectedTopics.includes(topic)}
//                   onChange={() => handleTopicSelection(topic)}
//                 />
//                 <label htmlFor={topic}>{topic}</label>
//               </div>
//             ))}
//           </div>
//           <button onClick={handleApply}>Apply</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from 'react';
// import './Homepage.css';

// const Home = () => {
//   const [news, setNews] = useState([]);
//   const [filter, setFilter] = useState('');
//   const [showFocusWindow, setShowFocusWindow] = useState(false);
//   const [selectedTopics, setSelectedTopics] = useState([]);

//   useEffect(() => {
//     // Simulate fetching news data from an API
//     setNews([
//       { time: '21:16:20', headline: '财政策：实施支持科技创新专项担保计划。', url: '#' },
//       { time: '21:15:27', headline: '贝克休斯油服：目前看来，美国石油在下半年2024年复苏的可能性现在不大。', url: '#' },
//       { time: '21:14:21', headline: '芬兰方面表示俄罗斯船只侵犯了其领土完整。', url: '#' },
//       { time: '21:12:26', headline: '订单流5分钟图显示，21:12纯碱主力合约价格在空头堆积带下方波动，现报1821元/吨，跌幅2.57%。', url: '#' },
//       { time: '21:09:55', headline: '大摩：数据已经趋向于美联储所希望的方向。', url: '#' },
//     ]);
//   }, []);

//   const handleFilterChange = (e) => {
//     setFilter(e.target.value);
//   };

//   const handleFocusWindowToggle = () => {
//     setShowFocusWindow(!showFocusWindow);
//   };

//   const handleTopicSelection = (topic) => {
//     setSelectedTopics((prevTopics) =>
//       prevTopics.includes(topic) ? prevTopics.filter((t) => t !== topic) : [...prevTopics, topic]
//     );
//   };

//   const handleApply = () => {
//     setShowFocusWindow(false);
//     // Apply the selected topics filter logic
//   };

//   return (
//     <div className="homepage">
//       <nav className="navbar">
//         <h1>Financial Advisory Platform</h1>
//         <ul>
//           <li><a href="#homepage">Home</a></li>
//           <li><a href="#news">News</a></li>
//           <li><a href="#index">Index</a></li>
//           <li><a href="#clustering">Clustering</a></li>
//         </ul>
//       </nav>

//       <div className="main-banner">
//         <div className="banner-item">Banner 1</div>
//         <div className="banner-item">Banner 2</div>
//         <div className="banner-item">Banner 3</div>
//       </div>

//       <div className="content">
//         <div className="main-content">
//           <h2>Featured Article</h2>
//           <p>This section can highlight the most important article or news of the day...</p>
//         </div>
//         <div className="sidebar">
//           <h3>Recent News</h3>
//           <div className="news-list">
//             {news
//               .filter((item) => !filter || item.headline.includes(filter))
//               .map((item, idx) => (
//                 <div key={idx} className="news-item">
//                   <div className="news-time">{item.time}</div>
//                   <a href={item.url} target="_blank" rel="noopener noreferrer" className="news-headline">
//                     {item.headline}
//                   </a>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>

//       <div className="categories">
//         <h3>News Categories</h3>
//         <div className="category-grid">
//           <div className="category-item">Category 1</div>
//           <div className="category-item">Category 2</div>
//           <div className="category-item">Category 3</div>
//           <div className="category-item">Category 4</div>
//         </div>
//       </div>

//       <footer className="footer">
//         <p>© 2024 Financial Advisory Platform. All rights reserved.</p>
//       </footer>

//       <div className="toolbar">
//         <button onClick={handleFocusWindowToggle}>Clustering</button>
//       </div>
//       {showFocusWindow && (
//         <div className="focus-window">
//           <h2>Select Topics</h2>
//           <div className="topics">
//             <h3>By Financial Product Type</h3>
//             {['Precious Metals', 'Oil', 'Foreign Exchange'].map((topic) => (
//               <div key={topic} className="topic">
//                 <input
//                   type="checkbox"
//                   id={topic}
//                   value={topic}
//                   checked={selectedTopics.includes(topic)}
//                   onChange={() => handleTopicSelection(topic)}
//                 />
//                 <label htmlFor={topic}>{topic}</label>
//               </div>
//             ))}
//             <h3>By Sector</h3>
//             {['Home Appliances', 'Aerospace', 'Technology'].map((topic) => (
//               <div key={topic} className="topic">
//                 <input
//                   type="checkbox"
//                   id={topic}
//                   value={topic}
//                   checked={selectedTopics.includes(topic)}
//                   onChange={() => handleTopicSelection(topic)}
//                 />
//                 <label htmlFor={topic}>{topic}</label>
//               </div>
//             ))}
//             <h3>By Stock</h3>
//             {['Big A', 'U.S. Stocks'].map((topic) => (
//               <div key={topic} className="topic">
//                 <input
//                   type="checkbox"
//                   id={topic}
//                   value={topic}
//                   checked={selectedTopics.includes(topic)}
//                   onChange={() => handleTopicSelection(topic)}
//                 />
//                 <label htmlFor={topic}>{topic}</label>
//               </div>
//             ))}
//             <h3>By Time</h3>
//             {['Latest News', 'Historical Data'].map((topic) => (
//               <div key={topic} className="topic">
//                 <input
//                   type="checkbox"
//                   id={topic}
//                   value={topic}
//                   checked={selectedTopics.includes(topic)}
//                   onChange={() => handleTopicSelection(topic)}
//                 />
//                 <label htmlFor={topic}>{topic}</label>
//               </div>
//             ))}
//           </div>
//           <button onClick={handleApply}>Apply</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;

// import React from 'react';
// import Navbar from './components/NavBar';
// import Ticker from './components/Ticker';
// import QuickLinks from './components/QuickLinks';
// import MainNews from './components/MainNews';
// import SideNews from './components/SideNews';
// import './css/Homepage.css';

// const Homepage = () => {
//   return (
//     <div className="homepage">
//       <Navbar />
//       <Ticker />
//       <QuickLinks />
//       <div className="content">
//         <MainNews />
//         <SideNews />
//       </div>
//     </div>
//   );
// };

// export default Homepage;

// import React from 'react';
// import Navbar from './components/NavBar';
// import Ticker from './components/Ticker';
// import QuickLinks from './components/QuickLinks';
// import MainNews from './components/MainNews';
// import SideNews from './components/SideNews';
// import './css/Homepage.css';
// import FeaturedCard from './FeaturedCard';
// import SecondaryCardContainer from './SecondaryCardContainer';

// const Homepage = () => {
//     return (
//         <div className="homepage">
//             <nav className="navbar">
//                 {/* Add navbar content here */}
//                 <a href="#">Markets</a>
//                 <a href="#">Business</a>
//                 <a href="#">Investing</a>
//                 <a href="#">Tech</a>
//                 <a href="#">Politics</a>
//             </nav>

//             <div className="content-grid">
//                 <FeaturedCard />
//                 <SecondaryCardContainer />
//                 <MainNews />
//                 <SideNews />
//             </div>

//             <div className="ticker-container">
//                 <Ticker />
//             </div>
//         </div>
//     );
// };

// export default Homepage;

import React, { useEffect } from "react";
import Navbar from "./components/NavBar";
import Ticker from "./components/Ticker";
import QuickLinks from "./components/QuickLinks";
import MainNews from "./components/MainNews";
import SideNews from "./components/SideNews";
import Stock from "./components/Stock.js";
import "./css/Homepage.css";
import FeaturedCard from "./FeaturedCard";
import SecondaryCardContainer from "./SecondaryCardContainer";
import { Row, Col } from 'antd'
function Homepage () {
  useEffect(() => {
    const menuButton = document.querySelector(".nav-menu-button");
    const closeButton = document.querySelector(".menu-close");
    const popOutMenu = document.querySelector(".pop-out-menu");

    // Define event listener functions
    const openMenu = () => {
      popOutMenu.classList.add("active");
    };

    const closeMenu = () => {
      popOutMenu.classList.remove("active");
    };

    // Open the menu
    menuButton.addEventListener("click", openMenu);

    // Close the menu
    closeButton.addEventListener("click", closeMenu);

    // Cleanup event listeners
    return () => {
      menuButton.removeEventListener("click", openMenu);
      closeButton.removeEventListener("click", closeMenu);
    };
  }, []);
  return (
    <div className="homepage">
      <header className="App-header">
        <div id="menu-container">
          {/* Pop-out Menu Button */}
          <button className="nav-menu-button" aria-label="Open Navigation Menu">
            <span className="icon-menu"></span>
          </button>
          {/* Pop-out Menu */}
          <div className="pop-out-menu">
            {/* Close button */}
            <button className="menu-close" aria-label="Close Navigation Menu">
              <span className="icon-close"></span>
            </button>
            {/* Menu items */}
            <div className="menu-items">
              {/* Additional menu items can be added here */}
            </div>
          </div>
        </div>

        <Navbar />
        <Ticker />
        <QuickLinks />
      </header>
      <Stock />
      <div>
        <Row gutter={16} >
          <Col className="gutter-row" span={12}>
            <FeaturedCard />
          </Col>
          <Col className="gutter-row" span={6}>
            <SecondaryCardContainer />
          </Col>
          <Col className="gutter-row" span={6}>
            <SideNews />
          </Col>
        </Row>


        {/* <MainNews /> */}

      </div>
    </div>
  );
}

export default Homepage;
