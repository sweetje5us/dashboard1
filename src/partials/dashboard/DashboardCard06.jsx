
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Card from '@mui/material/Card';

import { Container, InputGroup, FormControl, 
  Button, ListGroup
} from 'react-bootstrap';
import { CloseRounded } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';



const token_uk="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvY3VzdG9tZXItYXBpLmRvbXlsYW5kLnJ1XC8iLCJzdWIiOiJjdXN0b21lciIsImNpZCI6MTk0MjQ1Mywic2lkIjoyNDIzMDMzLCJleHAiOjIwNDAzNjYwNDl9.fq1bwvhx3XsLaTARHLVSNQsYuN3b6H7Y-zUGl6Vr_Dr5OL90JmC84zUEUkuKLTJAiMRtUWhWSTuzhcyBv6vxOgw-VI26Mpr_CCoogW5m6ES_DMRCY__DmiS-4pfaAaPbcPzP1t746ZWCuP-N862ncSQOihqU__0GzP7qZgi5AU0BYBn-RiHQkOeSyT44oMZd4YdbFNMj1N6Ioje8TbozKsFooP4S0k9sl1_fYsOPYjZXEuZ774kYqrrvTVafZmpwza5o8xjm_0qHgRsCde8MNZ2NrWu_hWgFSVaU5faiOw44IYVyej8uvGqxZTHL74OsLz4lD0-NQWzvENGzdM6ZCw";

const TodoList = () => {
const [todos, setTodos] = useState([]);
const [task, setTask] = useState('');

const handleAddTodo = () => {
 if (task.trim() !== '') {
     setTodos([...todos, task]);
     setTask('')}};

const handleRemoveTodo = (index) => {
 const newTodos = [...todos];
 newTodos.splice(index, 1);
 setTodos(newTodos);};

return (
  <Container>
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
    >
      
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Новая задача"
        inputProps={{ 'aria-label': 'search google maps' }}
        value={task}
        onChange={(e) =>setTask(e.target.value)}
      />
      
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton onClick={handleAddTodo} color="primary" sx={{ p: '10px' }} aria-label="directions">
        <AddIcon />
      </IconButton>
    </Paper>
    <ListGroup>
    
    <Divider sx={{ height: 28, m: 0.5 }} orientation="horizontal" />
    <Typography variant="h6">
  Список дел:
</Typography>
              {todos.map((todo, index) => (
                
            <ListGroup.Item key={index}>
            {todo}
            <CloseRounded style={{ float: "right",
                                  marginLeft: "5px",
                                  fontWeight: "bold",
                                  cursor: "pointer"}}
                         onClick={() => 
                            handleRemoveTodo(index)} />
        </ListGroup.Item>
      
      ))}
</ListGroup>
</Container>
)};

function getInvoice(){
  
  const myHeaders = new Headers();
myHeaders.append("accept", "application/json, text/plain, */*");
myHeaders.append("accept-language", "ru,en;q=0.9,la;q=0.8");
myHeaders.append("appname", "lk-tg.domyland.ru");
myHeaders.append("appversion", "3.0.0");
myHeaders.append("authorization", token_uk);
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
    fetch("http://192.168.0.20:8088/https://customer-api.domyland.ru/sections/invoices", requestOptions)
  .then((response) => response.json())
  .then((result) => setUserData(result.data))
  .catch((error) => console.error(error));
    }, []
    );
if (userData){
  return(
    <div>
      <div>
      Статус Счетов УК - {userData.title}
      </div>

    
    <Link href={userData.paymentButtonLink}>Ссылка на оплату
  </Link>
  </div>
   
  )
}
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
          <Tab  className="font-semibold text-gray-800 dark:text-gray-100" label="Планы" {...a11yProps(0)} />
          <Tab className="font-semibold text-gray-800 dark:text-gray-100" label="Напоминания" {...a11yProps(1)} />
          <Tab className="font-semibold text-gray-800 dark:text-gray-100" label="Счета" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      {TodoList()}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>

      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>

      {getInvoice()}
     
      
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

function DashboardCard06() {

  // getNewsUK(getTokenUK())
  // getNewsUK(token2)

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      
      {BasicTabs()}

    </div>
  );
}

export default DashboardCard06;
