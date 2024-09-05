import React, { useState, useEffect } from 'react';


function getRise(a) {
  const name1 = a;
  const [userData, setUserData] = useState([]);
  let name;
  // fetching api data
  useEffect(() => {
    fetch('https://api.sunrisesunset.io/json?lat=56.271461&lng=57.999168&date=today')
      .then(res => res.json())
      .then(data => setUserData(data.results))
    
  }, []
)
name=userData[a];
if (name){
  return (name)
}
  return (name)
}



export const DashboardCard01 = () => { 
  const [time, setTime] = useState(new Date()); 
  

 
  useEffect(() => { 
    const interval = setInterval(() => { 
      setTime(new Date()); 
    }, 1000); 
    if (minutes<10){

    }
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
 <div className="flex  col-span-full sm:col-span-6 x1:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <div className="px-5 pt-5 ">
        <header >
        <div className="text-lm text-7xl font-bold text-gray-800 dark:text-gray-100 mr-2">{hours}:{minutes}</div>
        
  
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-5">{dayOfWeek} {day} {month}</div>
          
          {/* Menu button */}
          
        </header>

     
        <div className="flex items-start items-start mb-2 ">
        
        <div className="text-sm font-medium text-white-700 px-1.5 bg-orange-500/20 rounded-full">Рассвет в {getRise('sunrise')}</div>
          <div className="text-sm font-medium text-white-700 px-1.5 bg-gray-500/20 rounded-full text-align: center">Закат в {getRise('sunset')}</div>
         
       
        
          
        </div>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">уведомление</div>
      </div>
      
    </div>
  
  ); 
}



export default DashboardCard01;