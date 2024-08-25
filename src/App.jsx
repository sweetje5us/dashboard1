import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';



// Import pages
import Dashboard from './pages/Dashboard';
import DashboardCard13 from './partials/dashboard/DashboardCard13';

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
       
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/1" element={<DashboardCard13 />} />
      </Routes>
    </>
  );
}

export default App;
