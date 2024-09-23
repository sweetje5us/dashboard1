
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';






function getBus(e){
  const [userData, setUserData] = useState([]);
  const myHeaders = new Headers();
  myHeaders.append("accept", "*/*");
  myHeaders.append("accept-language", "ru,en;q=0.9,la;q=0.8");
  myHeaders.append("cookie", "_ym_uid=1724576780105800213; _ym_d=1724576780; __utmz=196573104.1724578690.2.2.utmcsr=properm.ru|utmccn=(referral)|utmcmd=referral|utmcct=/; _ym_isad=1; _ym_visorc=w; __utma=196573104.889386185.1724576780.1724578690.1727110871.3; __utmc=196573104; __utmt=1; __utmb=196573104.1.10.1727110871");
  myHeaders.append("priority", "u=1, i");
  myHeaders.append("referer", "https://www.map.gortransperm.ru/");
  myHeaders.append("sec-ch-ua", "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"YaBrowser\";v=\"24.7\", \"Yowser\";v=\"2.5\"");
  myHeaders.append("sec-ch-ua-mobile", "?0");
  myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
  myHeaders.append("sec-fetch-dest", "empty");
  myHeaders.append("sec-fetch-mode", "cors");
  myHeaders.append("sec-fetch-site", "same-origin");
  myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 YaBrowser/24.7.0.0 Safari/537.36");
  myHeaders.append("x-requested-with", "XMLHttpRequest");
  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  useEffect(() => {
  fetch("http://192.168.0.20:8088/https://www.map.gortransperm.ru/json/arrival-times-vehicles/106400?_=1727110871031", requestOptions)
    .then((response) => response.json())
    .then((result) => setUserData(result.routeTypes[0].routes[0].vehicles[e]))
    .catch((error) => console.error(error));
  }, []);
  if (userData.arrivalTime != undefined){
    
  return(
    <div>
    <div>
      {userData.arrivalTime}
      
  </div>
  <div>
  прибудет через {userData.arrivalMinutes} минут
  
</div>
</div>
   
  )
  }
  else{
    return(
      <div>
     Автобусов нет до завтра
  </div>
     
    ) 
  }
}




function getTaxi(){

  return(
    <div>
      
  </div>
   
  )

}

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ height: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" role="navigation">
          <Tab  className="font-semibold text-gray-800 dark:text-gray-100" label="Автобусы" {...a11yProps(0)} />
          <Tab className="font-semibold text-gray-800 dark:text-gray-100" label="Такси" {...a11yProps(1)} />
          
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        14 Автобус:
      {getBus(0)}
      {getBus(1)}
      {getBus(2)}

      </CustomTabPanel>
    
      <CustomTabPanel value={value} index={1}>

      {getTaxi()}
     
      
      </CustomTabPanel>
    </Box>
  );
}


CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function DashboardCard03() {

  // getNewsUK(getTokenUK())
  // getNewsUK(token2)

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      
      {BasicTabs()}

    </div>
  );
}

export default DashboardCard03;
