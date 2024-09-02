import React from 'react';
import { Switch, Button } from '@mui/material';
import { useState, useEffect, Component } from 'react';
const access_token = 'y0_AgAAAAArXzIrAAxOmQAAAAEOrp-NAACvhbk02AtGAb9UG2Z__Vy3vqUUkQ';





class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myArray: {}
  }

    // Это привязывание необходимо, чтобы работал объект `this` в колбэке
    this.handleClick = this.handleClick.bind(this);

  } 

   componentDidMount(){
    const { myArray } = this.state;
    const id = this.props.value;
    const uid = this.props.className;
    const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer y0_AgAAAAArXzIrAAxS6gAAAAEO2JXXAACCh69E7NtBGKLnfg4LmBIPmXOMcA");
  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  fetch(`http://192.168.0.20:8088/https://api.iot.yandex.net/v1.0/devices/${id}`, requestOptions)
  .then(response => response.json())
  .then(result => 
    myArray[uid]=(result.capabilities[0].state.value)
    )
    
    .catch((error) => console.error(error));
return (
     
  <Switch onChange={this.handleClick}>
  </Switch>
  
);
   }


  handleClick() {
    const id = this.props.value;
    const { myArray } = this.state;
    // this.setState(state => ({
    //   isToggleOn: !this.state.isToggleOn
    // }));
    
  
    myArray[this.props.className]=!this.state.myArray[this.props.className]
    this.setState({ myArray } )

    handleChangeSw5(this.props.value, this.state.myArray[this.props.className])
    
 
  }

  render() {
    return (
     
      <Switch onChange={this.handleClick} checked={this.state.myArray[this.props.className]} >
      </Switch>
      
    );
  }
}


function statusOn(id){
  const [userData, setUserData] = useState([]);
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer y0_AgAAAAArXzIrAAxS6gAAAAEO2JXXAACCh69E7NtBGKLnfg4LmBIPmXOMcA");
  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  useEffect(() => {
  fetch(`http://192.168.0.20:8088/https://api.iot.yandex.net/v1.0/devices/${id}`, requestOptions)
  .then(response => response.json())
    .then(result => setUserData(result.capabilities[0].state.value))
    .catch((error) => console.error(error));
  }, []);

return(
  JSON.stringify(userData)
)
}

function handleChangeSw5(id, value){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append('Accept', 'application/json');
  myHeaders.append("Authorization", "Bearer y0_AgAAAAArXzIrAAxS6gAAAAEO2JXXAACCh69E7NtBGKLnfg4LmBIPmXOMcA");
  myHeaders.append('Access-Control-Allow-Origin', 'http://192.168.0.20:5713');
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
  
  fetch("http://192.168.0.20:8088/https://api.iot.yandex.net/v1.0/devices/actions", requestOptions)
    .then((response) => response.text())
 
    .catch((error) => console.error(error));
}
function handleStatus(id, src){
  const [userData, setUserData] = useState([]);
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer y0_AgAAAAArXzIrAAxS6gAAAAEO2JXXAACCh69E7NtBGKLnfg4LmBIPmXOMcA");
  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  useEffect(() => {
  fetch(`http://192.168.0.20:8088/https://api.iot.yandex.net/v1.0/devices/${id}`, requestOptions)
  .then(response => response.json())
    .then(result => setUserData(result.properties[src].state.value))
    .catch((error) => console.error(error));
  }, []);

  if (userData >0){
    return(
      '+'+Math.round(userData)
    )
  }
    return(
     (userData)
    )
}

function DashboardCard07() {

  const [checked, setChecked] = useState(false);




 
  
  

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
               
                  <div className="text-center">
                    
                  
                  <Toggle className='0' value='75cb6fc4-3fd9-4c60-a2ef-ba32cf97961f'></Toggle>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">-</div>
                </td>
                <td className="p-2">
                  <div className="text-center">-</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">
                  <Toggle className='7' value='64f7c874-fada-446c-8cc3-83848e6d54ff'></Toggle>
                  
                  </div>
                </td>
                
              </tr>
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    
                    <div className="text-gray-800 dark:text-gray-100">Гардероб</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center"><Toggle className='1' value='bd142373-4be7-4a22-ba7f-67c62520e419'></Toggle></div>
                  
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
                  <div className="text-center"><Toggle className='2' value='68695c4b-c4b3-4eef-bd06-0788f0b2b1e3'></Toggle></div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">-</div>
                </td>
                <td className="p-2">
                  <div className="text-center">-</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500"><Toggle className='7' value='3c7fe2c1-cb3e-439a-a366-ec1c6238bb4b'></Toggle></div>
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
                  <div className="text-center"><Toggle className='3' value='06373972-8464-4920-a866-73448fedea8f'></Toggle></div>
                  
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500" value="8bcfb58a-13b8-4e9b-a7a0-5199f2c28b8f">{handleStatus('8bcfb58a-13b8-4e9b-a7a0-5199f2c28b8f', 2)} </div>
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
                  <div className="text-center"><Toggle className='4' value='4c661077-a9fa-47ef-bf60-79bce8d3c673'></Toggle></div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500" value='8bcfb58a-13b8-4e9b-a7a0-5199f2c28b8f'>{handleStatus('8bcfb58a-13b8-4e9b-a7a0-5199f2c28b8f', 2)}</div>
                </td>
                <td className="p-2">
                  <div className="text-center"><Switch   /></div>
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
                  <div className="text-center"><Toggle className='5' value='1da20807-9966-4c1b-ae47-8665c5c989d3'></Toggle></div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500" value="f5e10267-5972-48fb-a358-c2db74c40df3">{handleStatus('f5e10267-5972-48fb-a358-c2db74c40df3', 2)}</div>
                </td>
                <td className="p-2">
                  <div className="text-center"><Switch   /></div>
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
                  <div className="text-center"><Toggle className='6' value='900dca1a-e53a-418c-82cc-5ebb8795e266'></Toggle></div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500" value="35e3f2df-4372-452b-a61a-c6bf4f5cf4a2">{handleStatus('35e3f2df-4372-452b-a61a-c6bf4f5cf4a2', 1)}</div>
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
