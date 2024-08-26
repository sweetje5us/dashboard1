
import React, { useState, useEffect, useRef } from 'react';

function getHomeInfo(){
  const [userData, setUserData] = useState([]);
  const bearer_token = 'y0_AgAAAAArXzIrAAxS6gAAAAEO2JXXAACCh69E7NtBGKLnfg4LmBIPmXOMcA'
  const bearer = 'Bearer' + bearer_token;
  // fetching api data
  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/https://api.iot.yandex.net/v1.0/user/info', {
      headers:{
        'Authorization': bearer
      }
    })
      .then(res => res.text())
      .then(data => setUserData(data))
    
  }, []
);


  return (console.log(userData)) 
}

function DashboardCard06() {



  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Список дел</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
     <div>
      {getHomeInfo()}

      
    </div>
    
    

    </div>
  );
}

export default DashboardCard06;
