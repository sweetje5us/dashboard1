import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';



function getNewsUK(e){
  const myHeaders = new Headers();
  var result = {};
const callback = (result) => {
  console.log(result);
  // Output: {avenger1: 'Captain America' ...}
}
myHeaders.append("accept", "application/json, text/plain, */*");
myHeaders.append("accept-language", "ru,en;q=0.9,la;q=0.8");
myHeaders.append("appname", "lk-tg.domyland.ru");
myHeaders.append("appversion", "3.0.0");
myHeaders.append("authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvY3VzdG9tZXItYXBpLmRvbXlsYW5kLnJ1XC8iLCJzdWIiOiJjdXN0b21lciIsImNpZCI6MTk0MjQ1Mywic2lkIjoyNDIzMDMzLCJleHAiOjIwNDAzNjYwNDl9.fq1bwvhx3XsLaTARHLVSNQsYuN3b6H7Y-zUGl6Vr_Dr5OL90JmC84zUEUkuKLTJAiMRtUWhWSTuzhcyBv6vxOgw-VI26Mpr_CCoogW5m6ES_DMRCY__DmiS-4pfaAaPbcPzP1t746ZWCuP-N862ncSQOihqU__0GzP7qZgi5AU0BYBn-RiHQkOeSyT44oMZd4YdbFNMj1N6Ioje8TbozKsFooP4S0k9sl1_fYsOPYjZXEuZ774kYqrrvTVafZmpwza5o8xjm_0qHgRsCde8MNZ2NrWu_hWgFSVaU5faiOw44IYVyej8uvGqxZTHL74OsLz4lD0-NQWzvENGzdM6ZCw");
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
fetch("https://cors-anywhere.herokuapp.com/https://customer-api.domyland.ru/newsfeed?fromRow=0", requestOptions)
.then(res => res.json())

.then(result => setUserData(result.data.items))
  .catch((error) => console.error(error));
}, []
);
if (userData[e]){
return(
  
  <Card variant="outlined" sx={{ maxWidth: 360, bgcolor:'primart.dark' }}>
  
  
          <Typography gutterBottom variant="h6" component="div">
          {userData[e].title}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
          {userData[e].preview}
          </Typography>
         
          
        <Typography  gutterBottom variant="body1">
        <Link href={userData[e].shared.link}>Ссылка
  </Link>
        </Typography>
    </Card>
   
 )
}
return(
  <div></div>
)
}

function getNews(e){
  const newsApi = 'b403b54758cf1544439923059a2e1603';
  const [userData, setUserData] = useState([]);
  
  // fetching api data
  useEffect(() => {
    fetch(`https://gnews.io/api/v4/top-headlines?country=ru&category=general&apikey=${newsApi}`)
      .then(res => res.json())
      .then(data => setUserData(data.articles[e]))
    
  }, []
);


  return (

<Card variant="outlined" sx={{ maxWidth: 360, bgcolor:'primart.dark' }}>
  
  
          <Typography gutterBottom variant="h7" component="div">
          {userData.title}
          </Typography>
          
        <Typography  gutterBottom variant="body2">
        <Link href={userData.url}>Ссылка
  </Link>
        </Typography>
    </Card>

    

) 
}

function getHoro(e){
  const newsApi = 'b403b54758cf1544439923059a2e1603';
  const [userData, setUserData] = useState([]);
  // fetching api data
  useEffect(() => {
    fetch(`https://cors-anywhere.herokuapp.com/https://horoscopes.rambler.ru/api/front/v3/horoscope/general/${e}/today/`)
      .then(res => res.json())
      .then(data => setUserData(data.content.text[0].content))
    
  }, []
);


  return (

<Card variant="outlined" sx={{ maxWidth: 360, bgcolor:'primart.dark' }}>
  
  
          <Typography gutterBottom variant="h7" component="div">
          {userData}
          </Typography>
         
     


 
        <Typography  gutterBottom variant="body2">
        <Link href={`https://horoscopes.rambler.ru/${e}/`}>Ссылка
  </Link>
        </Typography>
    </Card>

) 
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

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ height: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Новости" {...a11yProps(0)} />
          <Tab label="Гороскоп" {...a11yProps(1)} />
          <Tab label="новости ук" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      {getNews('0')}
      {getNews('1')}
      {getNews('2')}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      {getHoro('aquarius')}
      {getHoro('virgo')}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      {getNewsUK(0)}
      {getNewsUK(1)}
      {getNewsUK(2)}
      {getNewsUK(3)}
      {getNewsUK(4)}
      {getNewsUK(5)}

     
      
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




function DashboardCard05() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
 <div>
       
          {BasicTabs()}
      </div>
    </div>
     
 
      
  );
}

export default DashboardCard05;
