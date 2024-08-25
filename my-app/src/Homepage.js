
// import React, { useEffect } from "react";
// import Navbar from "./components/NavBar";
// import Ticker from "./components/Ticker";
// import QuickLinks from "./components/QuickLinks";
// import SideNews from "./components/SideNews";
// import Stock from "./components/Stock.js";
// import "./css/Homepage.css";
// import FeaturedCard from "./FeaturedCard";
// import SecondaryCardContainer from "./SecondaryCardContainer";
// import { Row, Col } from 'antd'
// function Homepage () {
//   useEffect(() => {
//     const menuButton = document.querySelector(".nav-menu-button");
//     const closeButton = document.querySelector(".menu-close");
//     const popOutMenu = document.querySelector(".pop-out-menu");

//     // Define event listener functions
//     const openMenu = () => {
//       popOutMenu.classList.add("active");
//     };

//     const closeMenu = () => {
//       popOutMenu.classList.remove("active");
//     };

//     // Open the menu
//     menuButton.addEventListener("click", openMenu);

//     // Close the menu
//     closeButton.addEventListener("click", closeMenu);

//     // Cleanup event listeners
//     return () => {
//       menuButton.removeEventListener("click", openMenu);
//       closeButton.removeEventListener("click", closeMenu);
//     };
//   }, []);
//   return (
//     <div className="homepage">
//       <header className="App-header">
//         <div id="menu-container">
//           {/* Pop-out Menu Button */}
//           <button className="nav-menu-button" aria-label="Open Navigation Menu">
//             <span className="icon-menu"></span>
//           </button>
//           {/* Pop-out Menu */}
//           <div className="pop-out-menu">
//             {/* Close button */}
//             <button className="menu-close" aria-label="Close Navigation Menu">
//               <span className="icon-close"></span>
//             </button>
//             {/* Menu items */}
//             <div className="menu-items">
//               {/* Additional menu items can be added here */}
//             </div>
//           </div>
//         </div>

//         <Navbar />
//         <Ticker />
//         <QuickLinks />
//       </header>
//       <Stock />
//       <div>
//         <Row gutter={16} >
//           <Col className="gutter-row" span={12}>
//             <FeaturedCard />
//           </Col>
//           <Col className="gutter-row" span={6}>
//             <SecondaryCardContainer />
//           </Col>
//           <Col className="gutter-row" span={6}>
//             <SideNews />
//           </Col>
//         </Row>


//       </div>
//     </div>
//   );
// }

// export default Homepage;


import React, { useState, useEffect } from 'react';
import Navbar from "./components/NavBar";
import Ticker from "./components/Ticker";
import SideNews from "./components/SideNews";
import Stock from "./components/Stock";
import "./css/Homepage.css";
import FeaturedCard from "./FeaturedCard";
import SecondaryCardContainer from "./SecondaryCardContainer";
import { Row, Col } from 'antd';
import MarketMovers from "./components/MarketMovers";


function Homepage () {
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);   

  useEffect(() => {
    fetchNews('defaultTag');
  }, []);

  function fetchNews (eleTag) {
    setIsLoading(true);
    setError(null);


    fetch(`http://127.0.0.1:8000/news/ele_tags/${eleTag}/10`, {
      method: 'GET'
    })
  //   .then(res => {
  //     console.log(res)
  //     setNews(res.data.map(item => item.fields))
  //   });
  // }
  .then(res => res.json())
  .then(data => {
    // console.log('Fetched data:', data);
    let jsonData = JSON.parse(data).slice(0, 4);
    console.log('newsData:', jsonData);
    if (Array.isArray(jsonData)) {
      const newsData = jsonData.map(item => item.fields);
      setNews(newsData);
    } else {
      // console.error('Unexpected data format:', data);
      setError('Unexpected data format');
      setNews([]);
    }
  })
  .catch(error => {
    // console.error('Error fetching news:', error);
    setError('Error fetching news');
    setNews([]);
  })
  .finally(() => {
    setIsLoading(false);
  });
}

  return (
    <div className="homepage">
      <header className="App-header">
        <div className="display-flex">
          <Navbar handleOnSelect={fetchNews} />
          {/* <QuickLinks /> */}
        </div>
      </header>
      <Stock />
      <Ticker />
      <div>
        <Row gutter={16}>
          <Col className="gutter-row" span={12}>
            <FeaturedCard />
          </Col>
          <Col className="gutter-row" span={6}>
            <SecondaryCardContainer />
          </Col>
          <Col className="gutter-row" span={6}>
              <SideNews news={news} />
            {/* {news.length > 0 ? (
              <SideNews news={news} />
            ) : (
              <p>No news available.</p>
            )} */}
          </Col>
        </Row>
      </div>
      <MarketMovers />
    </div>
  );
}

export default Homepage;
