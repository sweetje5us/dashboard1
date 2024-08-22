import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import EditMenu from '../../components/DropdownEditMenu';
import { YMaps, Map, TrafficControl, FullscreenControl, Placemark } from '@pbe/react-yandex-maps';

// Import utilities



function DashboardCard03() {


  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Пермский край, Пермь</h2>
          {/* Menu button */}
          <EditMenu align="right" className="relative inline-flex">
            <li>
              <Link className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3" to="#0">
                опция 1
              </Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3" to="#0">
                опция 2
              </Link>
            </li>
            
          </EditMenu>
        </header>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">ул. Чернышевского 20</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">
          
<YMaps>
    <Map defaultState={{
    center: [57.999168, 56.271461],
    zoom: 13,
    controls: []
  }}>
      <TrafficControl options={{
      float: 'right'
    }} />
    <FullscreenControl />
    <Placemark defaultGeometry={[57.999168, 56.271461]} />
    </Map>
  </YMaps>
</div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
        {/* Change the height attribute to adjust the chart height */}
       
      </div>
    </div>
  );
}

export default DashboardCard03;
