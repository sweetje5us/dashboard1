import React from 'react';
import { Switch } from '@mui/material';
const access_token = 'y0_AgAAAAArXzIrAAxOmQAAAAEOrp-NAACvhbk02AtGAb9UG2Z__Vy3vqUUkQ';
function DashboardCard07() {
  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Умный дом</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-gray-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Комната</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Свет</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Температура</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Радиатор</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Теплый пол</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    
                    <div className="text-gray-800 dark:text-gray-100">Прихожая</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center"><Switch  defaultChecked /></div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">+15</div>
                </td>
                <td className="p-2">
                  <div className="text-center">-</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500"><Switch  defaultChecked /></div>
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    
                    <div className="text-gray-800 dark:text-gray-100">Гардероб</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center"><Switch  defaultChecked /></div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">-</div>
                </td>
                <td className="p-2">
                  <div className="text-center">-</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">-</div>
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    
                    <div className="text-gray-800 dark:text-gray-100">Ванная</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center"><Switch  defaultChecked /></div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">+24</div>
                </td>
                <td className="p-2">
                  <div className="text-center">-</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500"><Switch  defaultChecked /></div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    
                    <div className="text-gray-800 dark:text-gray-100">Кухня</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center"><Switch  defaultChecked /></div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">+24</div>
                </td>
                <td className="p-2">
                  <div className="text-center">-</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">-</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    
                    <div className="text-gray-800 dark:text-gray-100">Гостиная</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center"><Switch  defaultChecked /></div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">+24</div>
                </td>
                <td className="p-2">
                  <div className="text-center"><Switch  defaultChecked /></div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">-</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                   
                    <div className="text-gray-800 dark:text-gray-100">Спальня</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center"><Switch  defaultChecked /></div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">+25</div>
                </td>
                <td className="p-2">
                  <div className="text-center"><Switch  defaultChecked /></div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">-</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    
                    <div className="text-gray-800 dark:text-gray-100">Балкон</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center"><Switch  defaultChecked /></div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">+10</div>
                </td>
                <td className="p-2">
                  <div className="text-center">-</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">-</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
