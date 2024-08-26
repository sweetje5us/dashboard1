import React from 'react';
import { Switch } from '@mui/material';
import { useState, useEffect } from 'react';
const access_token = 'y0_AgAAAAArXzIrAAxOmQAAAAEOrp-NAACvhbk02AtGAb9UG2Z__Vy3vqUUkQ';

function handleChangeSw5(id, value){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append('Accept', 'application/json');
  myHeaders.append("Authorization", "Bearer y0_AgAAAAArXzIrAAxS6gAAAAEO2JXXAACCh69E7NtBGKLnfg4LmBIPmXOMcA");
  myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:5713');
  myHeaders.append('Access-Control-Allow-Credentials', 'true');
  
  const raw = JSON.stringify({
    "devices": [
      {
        "id": id,
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
function handleStatus(id){
  const [userData, setUserData] = useState([]);
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer y0_AgAAAAArXzIrAAxS6gAAAAEO2JXXAACCh69E7NtBGKLnfg4LmBIPmXOMcA");
  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  fetch(`https://cors-anywhere.herokuapp.com/https://api.iot.yandex.net/v1.0/devices/${id}`, requestOptions)
  .then(response => response.json())
    .then(result => setUserData(result.properties[2].state.value))
    .catch((error) => console.error(error));


  
    return(
     JSON.stringify(userData)
    )
}

function DashboardCard07() {

  const [checked, setChecked] = useState(false);

  const switchHandler = (event) => {
    setChecked(event.target.checked);
    handleChangeSw5(event.target.value, event.target.checked)
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
                  <div className="text-center"><Switch  defaultChecked value='2d330ad6-b76c-4bfb-82ba-a507c5750048'  defaultChecked onChange={switchHandler}/></div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">+15</div>
                </td>
                <td className="p-2">
                  <div className="text-center">-</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500"><Switch  defaultChecked value='64f7c874-fada-446c-8cc3-83848e6d54ff'  defaultChecked onChange={switchHandler}/></div>
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    
                    <div className="text-gray-800 dark:text-gray-100">Гардероб</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center"><Switch  defaultChecked value='bd142373-4be7-4a22-ba7f-67c62520e419'  defaultChecked onChange={switchHandler}/></div>
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
                  <div className="text-center"><Switch  defaultChecked value='68695c4b-c4b3-4eef-bd06-0788f0b2b1e3'  defaultChecked onChange={switchHandler}/></div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">+24</div>
                </td>
                <td className="p-2">
                  <div className="text-center">-</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500"><Switch  defaultChecked value='3c7fe2c1-cb3e-439a-a366-ec1c6238bb4b'  defaultChecked onChange={switchHandler}/></div>
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
                  <div className="text-center"><Switch  defaultChecked value='06373972-8464-4920-a866-73448fedea8f'  defaultChecked onChange={switchHandler} /></div>
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
                  <div className="text-center"><Switch value='4c661077-a9fa-47ef-bf60-79bce8d3c673'  defaultChecked onChange={switchHandler} /></div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500" value='8bcfb58a-13b8-4e9b-a7a0-5199f2c28b8f'>+ {handleStatus('8bcfb58a-13b8-4e9b-a7a0-5199f2c28b8f')}</div>
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
                  <div className="text-center"><Switch  defaultChecked value='1da20807-9966-4c1b-ae47-8665c5c989d3'  defaultChecked onChange={switchHandler}/></div>
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
                  <div className="text-center"><Switch  defaultChecked defaultChecked value='900dca1a-e53a-418c-82cc-5ebb8795e266'  defaultChecked onChange={switchHandler}/></div>
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
