import React from 'react';
import { Switch, Button } from '@mui/material';
import { useState, useEffect, Component } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Popper from "@mui/material/Popper";
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider';

import SendIcon from '@mui/icons-material/Send';
import ytoken from '../../utils/token.json'
import { Close, CloseRounded } from '@mui/icons-material';
const access_token = ytoken.token_yandex;

const marks = [
  {
    value: 0,
    label: '0°',
  },
  {
    value: 10,
    label: '10°',
  },
  {
    value: 20,
    label: '20°',
  },
  {
    value: 30,
    label: '30°',
  },
  {
    value: 35,
    label: '35°',
  },
];
function valuetext(value) {
  return `${value}°C`;
}








class Toggle extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      myArray: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ]
  };
  this.value = {
    myArray: [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ]
};

  

    // Это привязывание необходимо, чтобы работал объект `this` в колбэке
    this.handleClick = this.handleClick.bind(this);

  } 
  

   componentDidMount(){
    
    this.getCenter();
    if (this.props.className >10){
      this.getCenter2();
      this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
    // set Interval
    this.interval = setInterval(this.getCenter2, 10000);
    }
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
    // set Interval
    this.interval = setInterval(this.getCenter, 10000);
   
    if (parseInt(this.props.className, 10) < 11){
      return (
       
        <Switch onChange={this.handleClick} checked={this.state.myArray[this.props.className]} >
        </Switch>
        
      );
    }
    if (10 < parseInt(this.props.className, 10) < 15){

      return (
       
        <PopupState variant="popper" popupId="demo-popup-popper">
        {(popupState) => (
          < >
             {handleStatus(this.props.value, 0)}
            <Switch onChange={this.handleClick} checked={this.state.myArray[this.props.className]} {...bindToggle(popupState)} >
        </Switch>
            <Popper {...bindPopper(popupState)} transition>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <Typography component={'span'} variant={'body2'} sx={{ p: 2 }}>
                    <Box sx={{ width: 200 }}>
                    <CloseRounded {...bindToggle(popupState)}></CloseRounded>
        <Slider
        sx={{ width: 200 }}
          aria-label="Custom marks"
          defaultValue={this.value.myArray[this.props.className]}
          getAriaValueText={valuetext}
          step={0}
          valueLabelDisplay="auto"
          marks={marks}
          min={0}
          max={35}
        />
       
      </Box>
      <Button onClick={this.handleClickT} variant="contained" endIcon={<SendIcon />} {...bindPopper(popupState)}>
        Установить
      </Button>        
                      </Typography>
                    
                  </Paper>
                </Fade>
              )}
            </Popper>
          </>
        )}
      </PopupState>
     
    
        
      );
    }
  
   }

   

   getCenter=()=>{
     const { myArray } = this.state;
    const id = this.props.value;
    const uid = this.props.className;
    const myHeaders = new Headers();
    
  myHeaders.append("Authorization", `Bearer ${access_token}`);
  
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

   }
   getCenter2=()=>{
    const { myArray } = this.value;
   const id = this.props.value;
   const uid = this.props.className;
   const myHeaders = new Headers();
   
 myHeaders.append("Authorization", `Bearer ${access_token}`);
 
 const requestOptions = {
   method: "GET",
   headers: myHeaders,
   redirect: "follow"
 };

   fetch(`http://192.168.0.20:8088/https://api.iot.yandex.net/v1.0/devices/${id}`, requestOptions)
   .then(response => response.json())
   .then(result => 
     myArray[uid]=(result.capabilities[1].state.value)
     )
     
     .catch((error) => console.error(error));

  }
  handleClick() {
    const id = this.props.value;
    const { myArray } = this.state;
    

  
 

    myArray[this.props.className]=!this.state.myArray[this.props.className]
    this.setState({ myArray } )

    handleChangeSw5(this.props.value, this.state.myArray[this.props.className])
    
  

  }
  handleSlider(value){
    const { myArray } = this.value;
   myArray[this.props.className]=value;
   this.setValue = ({ myArray } )
  
  }
  handleClickT() {
  
    if(this.value.myArray[this.props.className] == 0){ 
      handleChangeSw5(this.props.value, false)
    }
    if (this.value.myArray[this.props.className] > 0){
      handleChangeSw5(this.props.value, true)
      handleChangeTemp(this.props.value, this.value.myArray[this.props.className])
    }

    
  

  }

  render() {
 

    if (parseInt(this.props.className, 10) < 11){
    return (
     
      <Switch onChange={this.handleClick} checked={this.state.myArray[this.props.className]} >
      </Switch>
      
    );
  }
  if (10 < parseInt(this.props.className, 10) < 15){

    return (
     
      <PopupState variant="popper" popupId="demo-popup-popper">
      {(popupState) => (
        <div>
          {handleStatus(this.props.value, 0)}
          <Switch onChange={this.handleClick} checked={this.state.myArray[this.props.className]} {...bindToggle(popupState)} >
      </Switch>
          <Popper {...bindPopper(popupState)} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper>
                  <Box sx={{ p: 2 }}>
                    <form>
                    
                  <Box sx={{ width: 200 }}>
                  Температура<CloseRounded {...bindToggle(popupState)} ></CloseRounded>
                 

                  
      <Slider
      sx={{ width: 200 }}
        aria-label="Custom marks"
        defaultValue={this.value.myArray[this.props.className]}
        getAriaValueText={valuetext}
        step={0}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={(event)=>{this.handleSlider(event.target.value)}}
        min={0}
        max={35}
      />
     
    </Box>
    <Button onClick={(event) => this.handleClickT(event.target.value)} variant="contained" endIcon={<SendIcon />} {...bindPopper(popupState)} >
        Установить
      </Button>       
      </form>
                    </Box>
                  
                </Paper>
              </Fade>
            )}
           
          </Popper>
        </div>
      )}
    </PopupState>
   
  
      
    );
  }
}
}





function handleChangeSw5(id, value){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append('Accept', 'application/json');
  myHeaders.append("Authorization", `Bearer ${access_token}`);
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


function handleChangeTemp(id, value){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append('Accept', 'application/json');
  myHeaders.append("Authorization", `Bearer ${access_token}`);
  myHeaders.append('Access-Control-Allow-Origin', 'http://192.168.0.20:5713');
  myHeaders.append('Access-Control-Allow-Credentials', 'true');
  

  
  const raw = JSON.stringify({
    "devices": [
      {
        "id": id,
        "actions": [
          {
            "type": "devices.capabilities.range",
            "state": {
              "instance": "temperature",
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
 .then((result)=> console.log(result))
    .catch((error) => console.error(error));

}
function handleStatus(id, src){
  const [userData, setUserData] = useState([]);
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${access_token}`);
  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  if(src == 0){
    useEffect(() => {
      fetch(`http://192.168.0.20:8088/https://api.iot.yandex.net/v1.0/devices/${id}`, requestOptions)
      .then(response => response.json())
        .then(result => setUserData(result.capabilities[1].state.value))
        .catch((error) => console.error(error));
      }, []);
  }else{
    useEffect(() => {
      fetch(`http://192.168.0.20:8088/https://api.iot.yandex.net/v1.0/devices/${id}`, requestOptions)
      .then(response => response.json())
        .then(result => setUserData(result.properties[src].state.value))
        .catch((error) => console.error(error));
      }, []);
  }
 

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


 function handleClick() {
  handleChangeSw5('75cb6fc4-3fd9-4c60-a2ef-ba32cf97961f', false);
  handleChangeSw5('bd142373-4be7-4a22-ba7f-67c62520e419', false);
  handleChangeSw5('68695c4b-c4b3-4eef-bd06-0788f0b2b1e3', false);
  handleChangeSw5('06373972-8464-4920-a866-73448fedea8f', false);
  handleChangeSw5('4c661077-a9fa-47ef-bf60-79bce8d3c673', false);
  handleChangeSw5('1da20807-9966-4c1b-ae47-8665c5c989d3', false);
  handleChangeSw5('900dca1a-e53a-418c-82cc-5ebb8795e266', false);
  handleChangeSw5('3c7fe2c1-cb3e-439a-a366-ec1c6238bb4b', false);


  }

 
  
  

  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header 
      className="flex items-between px-5 py-4 border-b border-gray-100 dark:border-gray-700/60" 
     
      
      >
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Панель Умного дома</h2>
        <div>
        <Button onClick={handleClick} variant="contained">выключить все</Button>
        </div>
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
                  <Toggle className='13' value='64f7c874-fada-446c-8cc3-83848e6d54ff'></Toggle>
                  
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
                  <div className="text-center text-sky-500"><Toggle className='14' value='3c7fe2c1-cb3e-439a-a366-ec1c6238bb4b'></Toggle></div>
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
                
                  <div className="text-center"><Toggle className='11' value='a8bb3e9e-7393-4683-8b30-761f1dcd2e89'  /></div>
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
                  <div className="text-center"><Toggle className='12' value='a8bb3e9e-7393-4683-8b30-761f1dcd2e89'  /></div>
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
