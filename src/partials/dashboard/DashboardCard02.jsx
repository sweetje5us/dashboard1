import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import EditMenu from '../../components/DropdownEditMenu';



function getWeather2() {
  const [userData, setUserData] = useState([]);
  // fetching api data
  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=56.271461&longitude=57.999168&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m')
      .then(res => res.json())
      .then(data => setUserData(data.hourly.relative_humidity_2m[0]))
    
  }, []
);


  return (userData)
}

function getWeather1(a) {
  const [userData, setUserData] = useState([]);
  // fetching api data
  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=56.271461&longitude=57.999168&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m')
      .then(res => res.json())
      .then(data => setUserData(data.current[a]))
    
  },
  
  []
)


if (Math.round(userData)>0){
  return ('+'+Math.round(userData))
}
else if(Math.round(userData)==0){
  return(Math.round(userData))
}
return('-'+Math.round(userData))
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
      <div className="text-lm text-7xl font-bold text-gray-800 dark:text-gray-100 mr-2"><p>{getWeather1('temperature_2m')}<sup>o</sup></p></div>
      
        <header className="flex justify-between items-start mb-2">
          
          {/* Menu button */}
        </header>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">Пермский край, Пермь</div>
        <div className="flex items-start">
        
          <div className="text-sm font-medium text-white-700 px-1.5 bg-blue-500/20 rounded-full">Влажность {getWeather2()}%</div>
          <div className="text-sm font-medium text-white-700 px-1.5 bg-yellow-500/20 rounded-full text-align: center">Ветер до {getWeather1('wind_speed_10m')} м\с</div>
          
          
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