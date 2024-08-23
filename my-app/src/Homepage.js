
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


import React from "react";
import Navbar from "./components/NavBar";
import Ticker from "./components/Ticker";
import SideNews from "./components/SideNews";
import Stock from "./components/Stock";
import "./css/Homepage.css";
import FeaturedCard from "./FeaturedCard";
import SecondaryCardContainer from "./SecondaryCardContainer";
import { Row, Col } from 'antd';
import MarketMovers from "./components/MarketMovers";

function Homepage() {
  return (
    <div className="homepage">
      <header className="App-header">
        <div className="display-flex">
        <Navbar />
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
            <SideNews />
          </Col>
        </Row>
      </div>
      <MarketMovers />
    </div>
  );
}

export default Homepage;
