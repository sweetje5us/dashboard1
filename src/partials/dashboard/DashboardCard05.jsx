import React, { useState, useEffect } from 'react';
import Tooltip from '../../components/Tooltip';
import { chartAreaGradient } from '../../charts/ChartjsConfig';
import RealtimeChart from '../../charts/RealtimeChart';
import Iframe from 'react-iframe'

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';


function yaWidget(){
  YaAuthSuggest.init(
{
  client_id: 'fb308504b0844f1eb57c405e1de5ca63',
  response_type: 'token',
  redirect_uri: 'https://dashboard1-tau.vercel.app/#'
},
'https://dashboard1-tau.vercel.app/', 
{
  view: 'button',
  parentId: 'container',
  buttonView: 'main',
  buttonTheme: 'light',
  buttonSize: 's',
  buttonBorderRadius: 0
}
)
.then(({
handler
}) => handler())
.then(data => console.log('Сообщение с токеном', data))
.catch(error => console.log('Обработка ошибки', error));
}


function DashboardCard05() {
  window.YaAuthSuggest.init(
    {
      client_id: "fb308504b0844f1eb57c405e1de5ca63",
      response_type: "token",
      redirect_uri: "https://dashboard1-tau.vercel.app/"
    },
    "https://dashboard1-tau.vercel.app/#",
    { view: "default" }
  )
  .then(({handler}) => handler())
  .then(data => console.log('Сообщение с токеном', data))
  .catch(error => console.log('Обработка ошибки', error))
  return (
    
    
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60 flex items-center">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Real Time Value</h2>
        <Tooltip className="ml-2">
          <div className="text-xs text-center whitespace-nowrap">Built with <a className="underline" href="https://www.chartjs.org/" target="_blank" rel="noreferrer">Chart.js</a></div>
        </Tooltip>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      {yaWidget()}
    
        
    </div>
  );
}

export default DashboardCard05;
