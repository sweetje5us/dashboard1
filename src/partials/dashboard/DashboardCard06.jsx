
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
import token from '../../utils/token.json'

const token_uk=token.token_uk;

function getDomRu(){
  const myHeaders = new Headers();
myHeaders.append("accept", "application/json, text/plain, */*");
myHeaders.append("accept-language", "ru,en;q=0.9,la;q=0.8");
myHeaders.append("agreementnumber", "590028191360");
myHeaders.append("authorization", "Bearer eyAiYWxnIjogIlNIMSIsICJ0eXAiOiAiSldUIiwgImsiOiAiMzAiIH0.4Fpcc4HHmfQ9Lgh8Rew_XN_QNWdyuGA7_AkxxLtHcASEEEmBnw5g7nisL40g9HXUEof0HO881tzLfvhAZ2CP1Bw_Ekr4HrkoCA_567uW28RzP5Inxkmf1yaGEljE3NTt0Ko13vE76z5vQ5jT5okaBNNUQZy9vp8MI1Z2JWvG-xykMJ9M2ORAO3IvvY534ovnfMr4T6kIAMBXlCowLV0RHN3OllreLKzeQnuvi5EdYTRJWiYFkzYjRGrEcqxWww4cRPiiUPk306XmBTRFbu4szJxmBwY7fkVh9r_nNl9a4JameSQsKa1pEMWmPMLJemZM.REJENzZGOEFCMjk1RDVFQkI2QzMyMjFCOUM2MTk5Mjk2NkJDMjRBNA");
myHeaders.append("origin", "https://perm.dom.ru");
myHeaders.append("priority", "u=1, i");
myHeaders.append("providerid", "47");
myHeaders.append("referer", "https://perm.dom.ru/");
myHeaders.append("sec-ch-ua", "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"YaBrowser\";v=\"24.7\", \"Yowser\";v=\"2.5\"");
myHeaders.append("sec-ch-ua-mobile", "?0");
myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
myHeaders.append("sec-fetch-dest", "empty");
myHeaders.append("sec-fetch-mode", "cors");
myHeaders.append("sec-fetch-site", "same-site");
myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 YaBrowser/24.7.0.0 Safari/537.36");
myHeaders.append("x-requested-with", "XMLHttpRequest");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};
const [userData, setUserData] = useState([]);
  useEffect(() => {
fetch("http://192.168.0.20:8088/https://api-profile.web-api.dom.ru/v2/payments/period-structure?dateFrom=21.09.2024&newApi=1", requestOptions)
.then((response) => response.json())
.then((result) => setUserData(result))
.catch((error) => console.error(error));
  }, []
  );

if (userData.headerInfo){
return(
  <div>
    <div>
    
    Домашний интернет - оплачено до {userData.dateTo}
    </div>
    <div>
    
    {userData.headerInfo.tariffName} - {userData.periodPayments.paymentsSum} руб.
    </div>
    <Link href='https://perm.dom.ru/lk'>Ссылка на оплату
  </Link>

  
  
</div>
 
)
}

}

function sendTask(task){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const raw = JSON.stringify({
    "name": task,
    "age": "test"
  });
  
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  
  fetch("http://192.168.0.20:8088/api/tasks/", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error)); 
 
}

function deleteTask(index){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  

  
  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow"
  };
  
  fetch(`http://192.168.0.20:8088/api/tasks/${index}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error)); 
}




const TodoList = () => {
const [todos, setTodos] = useState([]);
const [task, setTask] = useState('');
const [data, setData] = useState([]);
function getTask(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  

  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,

    redirect: "follow"
  };

  
  fetch("http://192.168.0.20:8088/api/tasks/", requestOptions)
    .then((response) => response.json())
    .then((result) => loadTodo(result))
    
    .catch((error) => console.error(error)); 
    // setTodos([...todos, result[0].name])
    
 
}

function loadTodo(count){
  

for (let i=1; i<(count.length); i++){
  
  todos[i-1] = count[i].name
  
}
  
      
  

       
}

function handleAddTodo (index) {
  
 if (task.trim() !== '') {
  sendTask(task);
     setTodos([...todos, task]);
    
     setTask('')}};

function handleRemoveTodo(index) {
 const newTodos = [...todos];
 deleteTask(index+1);
 newTodos.splice(index, 1) ;
 setTodos(newTodos);
};
 

return (
  
    <Container>
      {getTask()}
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
      {/* <IconButton onClick={getTask} color="primary" sx={{ p: '10px' }} aria-label="directions">
        <AddIcon />
      </IconButton> */}
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
                
            <ListGroup.Item key={index+1}>
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
      Статус Счетов УК - 
      </div>
      <div>
      {userData.title} {userData.debtTitle}
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
     {getDomRu()}
      
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
