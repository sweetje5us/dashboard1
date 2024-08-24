import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';


function getNews(){
  const newsApi = 'b403b54758cf1544439923059a2e1603';
  const [userData, setUserData] = useState([]);
  // fetching api data
  useEffect(() => {
    fetch(`https://gnews.io/api/v4/top-headlines?country=ru&category=general&apikey=${newsApi}`)
      .then(res => res.json())
      .then(data => setUserData(data.articles[0]))
    
  }, []
);


  return (<Link href={JSON.stringify(userData.url)}>
{JSON.stringify(userData.title)}
  </Link>  
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
      {getNews()}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
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

function yaWidget(){
  YaAuthSuggest.init(
{
  client_id: 'fb308504b0844f1eb57c405e1de5ca63',
  response_type: 'token',
  redirect_uri: 'https://dashboard1-tau.vercel.app/#'
},
'https://dashboard1-tau.vercel.app/', 
{
  view: 'button',
  parentId: 'container',
  buttonView: 'main',
  buttonTheme: 'light',
  buttonSize: 's',
  buttonBorderRadius: 0
}
)
.then(({
handler
}) => handler())
.then(data => console.log('Сообщение с токеном', data))
.catch(error => console.log('Обработка ошибки', error));
}


function DashboardCard05() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  window.YaAuthSuggest.init(
    {
      client_id: "fb308504b0844f1eb57c405e1de5ca63",
      response_type: "token",
      redirect_uri: "https://dashboard1-tau.vercel.app/"
    },
    "https://dashboard1-tau.vercel.app/#",
    { view: "default" }
  )
  .then(({handler}) => handler())
  .then(data => console.log('Сообщение с токеном', data))
  .catch(error => console.log('Обработка ошибки', error))
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
 <div>
        {yaWidget()}
          {BasicTabs()}
      </div>
    </div>
     
 
      
  );
}

export default DashboardCard05;
