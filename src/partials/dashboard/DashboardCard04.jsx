import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import Player from "react-websockets-video-player";
import { Button, Popover  } from '@mui/material';


const token_rt='Bearer '+'eyJhbGciOiJSUzI1NiIsImtpZCI6InB1YmxpYzpiNGE4NjgwNC04NDhiLTQzYWQtYmY3Ny01MjI0M2MzZTNhNDEiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOltdLCJjbGllbnRfaWQiOiJiV0Z6ZEdWeU9qYzRPVFUyTmpveE9USTRNRGswT2pFMk56QTZOVFV3T1RjNk16b3hOanBRUTNWWFpHRmpTV3h0VDBjcmRpdG1OekEwYzA4MVVtaGtNblpLV21reFRFNTNURkZ1UnprMk56aFpQUT09IiwiZXhwIjoxNzU2MDQ1OTU4LCJleHQiOnt9LCJpYXQiOjE3MjQ1MDk5NTgsImlzcyI6Imh0dHBzOi8vb2F1dGgyLmtleS5ydC5ydS8iLCJqdGkiOiJhNjY4YjkyMi01Y2YzLTQwNWQtOGViOS04NmE1OWU1M2ZhODkiLCJuYmYiOjE3MjQ1MDk5NTgsInNjcCI6W10sInN1YiI6ImJXRnpkR1Z5T2pjNE9UVTJOam94T1RJNE1EazBPakUyTnpBNk5UVXdPVGM2TXpveE5qcFFRM1ZYWkdGalNXeHRUMGNyZGl0bU56QTBjMDgxVW1oa01uWktXbWt4VEU1M1RGRnVSemsyTnpoWlBRPT0ifQ.nOj2EZ3ZBYdd4TPuoXPx3WZOqwYgmWBCu6go_vaB1rahvh5seseI-RlvzaiLDG8YTsCVJuUTsnNjm8xCTv6_JZyR77yE4Fk0w9l3GUP6LfsH6DYqmArP9Dk7dpkiqQAMAIv3aryee6GxsB_0vZKTJ9ud0qel46f8VsE4vl34okdUvBMpSvvIpwEwKJMoDp0oa6wVZN5k118vUURjsuIxvLd3d9fvD2izpDUkKwRKNE3tPSEAxD_huAYQLWk5zcqJh_yC8D_DSPNCzRM_9wtWebxyUVmFIILq_3KYIU7c6vVf7alea0yJlf6onK_zD-FOKytUCIa1YcYmxBQJ3RM0RHgI5KzbAOZmqzg49O4VzVNrh1sBrjPiKajmhmBZ8wIyoftBlnDeytwdTJOUDv80Tykw03FqaFAO5XaYfDPSatAP7Qti8x3M3fiJ92IFVj-e8xFdHpExCB3B8OItsh2gOkg2XWpG0n0prvfo2T-5NpKu8oRIoGOSIzvAJ-tB5PasTI1vGT1G_-mGJBHFElqBg6cIDNCIuAggBpE7xUB2nQQ1Bdm_SAzkgjTyj-dJl6s8aSfkKCoXhvmGIQWY1dF7KeL_hAkwr_vJK5e76dUfanFnqn8MO3E4YkvaIVAH-aF8nwRER-c20weP7kCTSNFg3kYFuY9qZxPLIs0OorH1Krg'

 
var token_stream;



function Clip({ url }) {
  
  const videoRef = useRef();
  
  useEffect(() => {    
    videoRef.current?.load();
  }, [url]);

  return (
    <video ref={videoRef}  muted controls>
      <source src={url} />
    </video>
   
  );
}

class VideoRender extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      token: null,
  };
}
    // Это привязывание необходимо, чтобы работал объект `this` в колбэке

    componentDidMount(){
      const myHeaders = new Headers();
    myHeaders.append("Authorization", token_rt);
    myHeaders.append("Cookie", "TS01418b58=0194c94451f6d4dcdb1aaee7050bc54214a245b60e29f36c6e44ce726793a4f1a6ae715bb28ef514bb5a8980d84309f9ad49cf5afd");
    
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    
    fetch("https://cors-anywhere.herokuapp.com/https://vc.key.rt.ru/api/v1/cameras?limit=100&offset=0", requestOptions)
      .then((response) => response.json())
      .then((result) => this.setState({token : 'https://live-vdk4.camera.rt.ru/stream/004acf75-a06b-4731-8949-ef801caa3412/live.mp4?mp4-fragment-length=0.5&mp4-use-speed=0&mp4-afiller=1&token='+result.data.items[1].streamer_token}))
      .then((result) => console.log(this.state.token))
      .catch((error) => console.error(error));

      
  return (
       
    <Clip key={this.state.token} url={this.state.token}></Clip>
    
  );
     }

    render() {
      return (
       
        <Clip url={this.state.token}></Clip>
        
      );
    }   
  
   



 
};





function ActionLink() {
  const [userData, setUserData] = useState([]);


  function handleClick(e) {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Authorization", token_rt);
    myHeaders.append("Cookie", "TS0173638d=0194c94451e3f51d25753e7b919b67b6509786d3e8f2441e8f1fe187b1d145a4d98b12ea64605529d6abca5beb802e3f16f97c926e");
    
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    
    fetch("https://household.key.rt.ru/api/v1/app/devices/25575/events", requestOptions)
      .then((response) => response.json())
      .then((result) => alert(result.events[0].event_name))
      .catch((error) => console.error(error));
      
  }

  
  return (

      <Button onClick={handleClick} variant="contained">Открыть дверь подъезда</Button>
      


    );
}



function DashboardCard04() {

  
  function updateToken(){
    
    const myHeaders = new Headers();
    myHeaders.append("Authorization", token_rt);
    myHeaders.append("Cookie", "TS01418b58=0194c94451f6d4dcdb1aaee7050bc54214a245b60e29f36c6e44ce726793a4f1a6ae715bb28ef514bb5a8980d84309f9ad49cf5afd");
    
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    
    fetch("https://cors-anywhere.herokuapp.com/https://vc.key.rt.ru/api/v1/cameras?limit=100&offset=0", requestOptions)
      .then((response) => response.json())
      .then((result) => token_stream=(result.data.items[1].streamer_token))
      .catch((error) => console.error(error));

      console.log(token_stream)
    return(
     (token_stream)
    )
    }
  

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
      
      
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Управление домофоном</h2>
      
      </header>
  
      <VideoRender>video here</VideoRender>
      
      {ActionLink()}
      
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
     
    </div>
  );
}

export default DashboardCard04;
