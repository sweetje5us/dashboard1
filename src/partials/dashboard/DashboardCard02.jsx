import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import EditMenu from '../../components/DropdownEditMenu';







function getWeather1(a) {
  const [userData, setUserData] = useState([]);
  const myHeaders = new Headers();
myHeaders.append("X-Yandex-Weather-Key", "demo_yandex_weather_api_key_ca6d09349ba0");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "_yasc=KPC2UuESWU7Sy+Wm7UE4Uc/aI8rhciRqSnsrScPfM2wzvjcOM8JKh1KhrOg1DOsV5adXEGM=; i=yAUxgpx4vf4e8MNi05vCqXhYoR6+MHlNwqD9UCcmFlmhDRJdMgpG/SiEyFxo6XTJTiXr2NKk1phUMEBqFn2Vu3j5kjM=; is_gdpr=0; is_gdpr_b=CPyESBCcjwI=; receive-cookie-deprecation=1; spravka=dD0xNjkzMDQxMDgzO2k9NDYuMTQ2LjQxLjcxO0Q9MUIwREZCNTg4RDA1QjYyQjRFRkQ2MkNCQUE2MkYwQkNFMEQyRThENjJBMjhGMDRBRkI2OUVERERBNkI1MjNBQjFERDBEODlFMDRGNzE5RjY7dT0xNjkzMDQxMDgzMDI0MTM4NTAyO2g9Yjk5NTZiN2EwZDI4MTk2ZDQ2MDIyNDk2ZTdkNTdlYzI=; yandexuid=9825702801724576919; yashr=6990574221724576919");

const raw = JSON.stringify({
  "query": "{\n  weatherByPoint(request: {lat: 56.271461, lon: 57.999168}) {\n    now {\n      cloudiness\n      humidity\n      precType\n      precStrength\n      pressure\n      temperature\n      fahrenheit: temperature(unit: FAHRENHEIT)\n      windSpeed\n      windDirection\n    }\n  }\n}"
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};
  // fetching api data
  useEffect(() => {
    fetch('https://api.weather.yandex.ru/graphql/query', requestOptions)
    .then(response => {
      if(response.ok){
        response.json()
        .then(result => setUserData(result.data.weatherByPoint.now)) 
      }
       })
   
      .catch((error) => console.error(error));
  },
 
  []
)
if (a=='precType'){
 if (userData.precType == 'NO_TYPE'){ 
  return(
    'https://openweathermap.org/img/wn/01d@2x.png'
  )
}
if (userData.precType == 'RAIN'){ 
  return(
    'https://openweathermap.org/img/wn/10d@2x.png'
  )
}

if (userData.precType == 'SLEET'){ 
  return(
    'https://openweathermap.org/img/wn/50d@2x.png'
  )
}
if (userData.precType == 'HAIL'){ 
  return(
    'https://openweathermap.org/img/wn/09d@2x.png'
  )
}
if (userData.precType == 'SNOW'){ 
  return(
    'https://openweathermap.org/img/wn/13d@2x.png'
  )
}
}


if (a=='type'){
  if (userData.precType == 'NO_TYPE'){ 
    if (userData.precStrength == 'ZERO'){
      return(
        'Ясно'
      )
     }
 }
 if (userData.precType == 'RAIN'){ 
  if (userData.precStrength == 'ZERO'){
   return(
     'Облачно'
   )
  }
   if (userData.precStrength == 'WEAK'){
    return(
      'Слабый дождь'
    )
   }
   if (userData.precStrength == 'AVERAGE'){
    return(
      'Средний дождь'
    )
   }
   if (userData.precStrength == 'STRONG'){
    return(
      'Сильный дождь'
    )
   }
   if (userData.precStrength == 'VERY_STRONG'){
    return(
      'Сильная гроза'
    )
   }
  
 }
 
 if (userData.precType == 'SLEET'){ 
   return(
     'https://openweathermap.org/img/wn/50d@2x.png'
   )
 }
 if (userData.precType == 'HAIL'){ 
   return(
     'https://openweathermap.org/img/wn/09d@2x.png'
   )
 }
 if (userData.precType == 'SNOW'){ 
  if (userData.precStrength == 'ZERO'){
    return(
      'Снегопада нет'
    )
   }
    if (userData.precStrength == 'WEAK'){
     return(
       'Слабый снег'
     )
    }
    if (userData.precStrength == 'AVERAGE'){
     return(
       'Средний снег'
     )
    }
    if (userData.precStrength == 'STRONG'){
     return(
       'Сильный снег'
     )
    }
    if (userData.precStrength == 'VERY_STRONG'){
     return(
       'Очень сильный снег'
     )
    }
 }
 }



return((userData[a]))
}



export const DashboardCard02 = () => { 
  const [time, setTime] = useState(new Date()); 
  

 
  useEffect(() => { 
    const interval = setInterval(() => { 
      setTime(new Date()); 
    }, 360000); 
    
    return () => clearInterval(interval); 
  }, []); 
 
  const daysOfWeek = [ 
    "Воскресенье", 
    "Понедельник", 
    "Вторник", 
    "Среда", 
    "Четверг", 
    "Пятница", 
    "Суббота" 
  ]; 
 
  const months = [ 
    "Январь", 
    "Февраль", 
    "Март", 
    "Апрель", 
    "Май", 
    "Июнь", 
    "Июль", 
    "Август", 
    "Сентябрь", 
    "Октябрь", 
    "Ноябрь", 
    "Декабрь" 
  ]; 
 
  const dayOfWeek = daysOfWeek[time.getDay()]; 
  const month = months[time.getMonth()]; 
  const day = time.getDate(); 
  const year = time.getFullYear(); 
  const hours = time.getHours().toString().length < 2 ? '0' + time.getHours() : time.getHours();
  const minutes = time.getMinutes().toString().length < 2 ? '0' + time.getMinutes() : time.getMinutes();
  const seconds = time.getSeconds(); 
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  


  

  return (  
 <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <div className="px-5 pt-5">
      
      
      <div className="flex flex-row items-start">
      <div className="text-lm text-7xl font-bold text-gray-800 dark:text-gray-100 mr-2"><p>{getWeather1('temperature')}<sup>o</sup></p></div>
        <div className="text-sm text-5xl font-bold text-gray-800 dark:text-gray-100 mr-1"><img style={{ alignSelf: 'center' }} src={getWeather1('precType')}></img></div>
      
      </div>
      <div className="text-lm text-3xl font-bold text-gray-800 dark:text-gray-100 mr-1"><p>{getWeather1('type')}</p></div>
      
      
        <header className="flex justify-between items-start mb-2">
        
          {/* Menu button */}
        </header>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">Пермский край, Пермь</div>
        <div className="flex items-start">
        
          <div className="text-sm font-medium text-white-700 px-1.5 bg-blue-500/20 rounded-full">Влажность {getWeather1('humidity')}%</div>
          <div className="text-sm font-medium text-white-700 px-1.5 bg-yellow-500/20 rounded-full text-align: center">Ветер до {getWeather1('windSpeed')} м\с</div>
          
          
        </div>
        <EditMenu align="right" className="relative inline-flex">
            <li>
              <Link className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3" to="#0">
                Пермь
              </Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3" to="#0">
                Дюртюли
              </Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-red-500 hover:text-red-600 flex py-1 px-3" to="#0">
                Remove
              </Link>
            </li>
          </EditMenu>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">уведомление</div>
      </div>
      
    </div>
  
  ); 
}



export default DashboardCard02;