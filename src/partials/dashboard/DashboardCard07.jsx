import React from 'react';
import { Switch } from '@mui/material';
import { useState } from 'react';
const access_token = 'y0_AgAAAAArXzIrAAxOmQAAAAEOrp-NAACvhbk02AtGAb9UG2Z__Vy3vqUUkQ';

function handleChangeSw5(value){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append('Accept', 'application/json');
  myHeaders.append("Authorization", "Bearer y0_AgAAAAArXzIrAAxS6gAAAAEO2JXXAACCh69E7NtBGKLnfg4LmBIPmXOMcA");
  myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:5713');
  myHeaders.append('Access-Control-Allow-Credentials', 'true');
  
  const raw = JSON.stringify({
    "devices": [
      {
        "id": "4c661077-a9fa-47ef-bf60-79bce8d3c673",
        "actions": [
          {
            "type": "devices.capabilities.on_off",
            "state": {
              "instance": "on",
              "value": value
            }
          }
        ]
      }
    ]
  });
  
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
    body: raw,
    redirect: "follow",
  };
  
  fetch("https://cors-anywhere.herokuapp.com/https://api.iot.yandex.net/v1.0/devices/actions", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}

function DashboardCard07() {

  const [checked, setChecked] = useState(false);

  const switchHandler = (event) => {
    setChecked(event.target.checked);
    handleChangeSw5(event.target.checked)
  };
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
                  <div className="text-center"><Switch  defaultChecked onChange={switchHandler} /></div>
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
