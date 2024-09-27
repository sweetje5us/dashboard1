import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';




// Import pages
import Dashboard from './pages/Dashboard';
import DashboardHome from './pages/Dashboard home'
import DashboardDomofon from "./pages/Dashboard domofon"
import DashboardFeed from "./pages/Dashboard feed"


function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>

        <Route  path="*" element={<Dashboard />} />
        <Route  path="home" element={<DashboardHome />} />
        <Route  path="domofon" element={<DashboardDomofon />} />
        <Route  path="feed" element={<DashboardFeed/>} />

      </Routes>
    </>
  );
}

export default App;
