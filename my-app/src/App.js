// import React from 'react';
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Homepage from './components/Homepage';
// import HotList from './components/HotList';
// import Index from './components/Index';
// import Clustering from './components/Clustering';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <main>
//           <Routes>
//             <Route path="/" element={<Homepage />} />
//             <Route path="/hotlist" element={<HotList />} />
//             <Route path="/index" element={<Index />} />
//             <Route path="/clustering" element={<Clustering />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import './App.css';
// import Homepage from './components/Homepage';
// import HotList from './components/HotList';
// import Index from './components/Index';
// import Clustering from './components/Clustering';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <img src="/logo.svg" className="App-logo" alt="logo" />
//           <nav>
//             <ul>
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/hotlist">Hot List</Link></li>
//               <li><Link to="/index">Index</Link></li>
//               <li><Link to="/clustering">Clustering</Link></li>
//             </ul>
//           </nav>
//         </header>
//         <main>
//           <Routes>
//             <Route path="/" element={<Homepage />} />
//             <Route path="/hotlist" element={<HotList />} />
//             <Route path="/index" element={<Index />} />
//             <Route path="/clustering" element={<Clustering />} />
//           </Routes>
//         </main>
//         <footer className="App-footer">
//           <p>&copy; 2024 Financial News Platform. All rights reserved.</p>
//         </footer>
//       </div>
//     </Router>
//   );
// }

// export default App;



// import React from 'react';
// import Homepage from './Homepage';
// import './App.css';

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <h1 className="text-3xl font-bold">Financial Advisory Platform</h1>
//             </header>
//             <Homepage />
//         </div>
//     );
// }

// export default App;


import React from 'react';
import Homepage from './Homepage';
import './App.css';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

// Function to get menu items
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

// Define the menu items
const items = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Item 1', null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];

// Menu click handler
const onClick = (e) => {
  console.log('click', e);
};

// The App component
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={`${process.env.PUBLIC_URL}/team_logo.png`} alt="Team Logo" className="App-logo" />
        <h1 className="text-3xl font-bold">金汇通达</h1>
      </header>
      {/* Render the homepage content */}
      <Homepage />
      <footer className="App-footer">
        <p>2024 Financial News Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;






