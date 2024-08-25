import React from 'react';

function getHomeInfo(){
  const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer y0_AgAAAAArXzIrAAxS6gAAAAEO2JXXAACCh69E7NtBGKLnfg4LmBIPmXOMcA");

const raw = "";

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://api.iot.yandex.net/v1.0/user/info", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
  return(
   <div></div>
  )
}

function DashboardCard06() {



  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Список дел</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <div class="player">
      {getHomeInfo()}
    <div class="controls">
        <button class="controls_play">Play</button>
    </div>
    
    <div class="overlay"></div>
</div>
    </div>
  );
}

export default DashboardCard06;
