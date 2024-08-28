
import React, { useState, useEffect, useRef } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

function getTokenUK(){
  const myHeaders = new Headers();
myHeaders.append("accept", "application/json, text/plain, */*");
myHeaders.append("accept-language", "ru,en;q=0.9,la;q=0.8");
myHeaders.append("appname", "lk-tg.domyland.ru");
myHeaders.append("appversion", "3.0.0");
myHeaders.append("buildingid", "null");
myHeaders.append("content-type", "application/json;charset=UTF-8");
myHeaders.append("origin", "https://lk-tg.domyland.ru");
myHeaders.append("placeid", "null");
myHeaders.append("priority", "u=1, i");
myHeaders.append("referer", "https://lk-tg.domyland.ru/");
myHeaders.append("sec-ch-ua", "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"YaBrowser\";v=\"24.7\", \"Yowser\";v=\"2.5\"");
myHeaders.append("sec-ch-ua-mobile", "?0");
myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
myHeaders.append("sec-fetch-dest", "empty");
myHeaders.append("sec-fetch-mode", "cors");
myHeaders.append("sec-fetch-site", "same-site");
myHeaders.append("timezone", "Asia/Yekaterinburg");
myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 YaBrowser/24.7.0.0 Safari/537.36");
myHeaders.append("withcredentials", "true");

const raw = "{\"phoneNumber\":\"+7 (963) 870-08-21\",\"password\":\"@5Snowangel\",\"captcha\":\"\"}";

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};
const [userData, setUserData] = useState([]);
useEffect(() => {
fetch("https://customer-api.domyland.ru/auth", requestOptions)
.then(res => res.json())
.then(result => setUserData(result.data.token))
  .catch((error) => console.error(error));
}, []
);
return (userData)
 
   

}

function getNewsUK(e){
  const token = getTokenUK();
  const myHeaders = new Headers();
myHeaders.append("accept", "application/json, text/plain, */*");
myHeaders.append("accept-language", "ru,en;q=0.9,la;q=0.8");
myHeaders.append("appname", "lk-tg.domyland.ru");
myHeaders.append("appversion", "3.0.0");
myHeaders.append("authorization", `${token}`);
myHeaders.append("buildingid", "18289");
myHeaders.append("origin", "https://lk-tg.domyland.ru");
myHeaders.append("placeid", "2545483");
myHeaders.append("priority", "u=1, i");
myHeaders.append("referer", "https://lk-tg.domyland.ru/");
myHeaders.append("sec-ch-ua", "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"YaBrowser\";v=\"24.7\", \"Yowser\";v=\"2.5\"");
myHeaders.append("sec-ch-ua-mobile", "?0");
myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
myHeaders.append("sec-fetch-dest", "empty");
myHeaders.append("sec-fetch-mode", "cors");
myHeaders.append("sec-fetch-site", "same-site");
myHeaders.append("timezone", "Asia/Yekaterinburg");
myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 YaBrowser/24.7.0.0 Safari/537.36");
myHeaders.append("withcredentials", "true");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

const [userData, setUserData] = useState([]);
useEffect(() => {
fetch("https://customer-api.domyland.ru/newsfeed?fromRow=0", requestOptions)
.then(res => res.json())
.then(result => setUserData(result.data.items)
)

  .catch((error) => console.error(error));
}, []

);
console.log(userData)
return(
<Card variant="outlined" sx={{ maxWidth: 360, bgcolor:'primart.dark' }}>
  
  
  <Typography gutterBottom variant="h7" component="div">
  {(userData[0].title)}
  </Typography>
 




<Typography  gutterBottom variant="body2">
<Link href={userData[0].shared.link}>Ссылка
</Link>
</Typography>
</Card>
)

}

function DashboardCard06() {

  // getNewsUK(getTokenUK())
  // getNewsUK(token2)
  
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Новости УК</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      {getNewsUK()}
     <div>
 

      
    </div>
    
    

    </div>
  );
}

export default DashboardCard06;
