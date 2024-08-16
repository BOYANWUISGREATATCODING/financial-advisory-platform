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



import React from 'react';
import Homepage from './Homepage';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Financial Advisory Platform</h1>
            </header>
            <Homepage />
        </div>
    );
}

export default App;







