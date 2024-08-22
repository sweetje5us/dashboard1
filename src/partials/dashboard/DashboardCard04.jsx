import React, { useState, useEffect } from 'react';

function getHoroscope() {
  const [userData, setUserData] = useState([]);
  // fetching api data
  useEffect(() => {
    fetch('https://api.quotable.io/random',
  {

  }
  )
      .then(res => res.json())
      .then(data => setUserData(data))
    
  }, []
);


  return (JSON.stringify(userData))
}

function DashboardCard04() {



  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Транспорт</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
     <div>{getHoroscope()}</div> 
    </div>
  );
}

export default DashboardCard04;
