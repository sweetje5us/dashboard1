
import React, { useState, useEffect, useRef } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';



function DashboardCard06() {

  // getNewsUK(getTokenUK())
  // getNewsUK(token2)
  function handleClick(e) {
    e.preventDefault();
    const myHeaders = new Headers();
    const requestOptions = {
      method: "GET",
      headers: myHeaders
    };
    
    fetch("http://192.168.0.20:8088/https://horoscopes.rambler.ru/api/front/v3/horoscope/general/aquarius/today", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
      
  }
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Новости УК</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}

     <div>
 <button onClick={handleClick}>нажми</button>

      
    </div>
    
    

    </div>
  );
}

export default DashboardCard06;
