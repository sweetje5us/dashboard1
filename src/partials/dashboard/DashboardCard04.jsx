import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import Player from "react-websockets-video-player";

const YourComponent = () => {
  const token2='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHRfcHJvZHVjdGlvbiJ9.eyJpc3MiOiJ2Y2Zyb250X3Byb2R1Y3Rpb24iLCJzdWIiOjE5MjgwOTQsImlwIjoiMTAuNzguMzMuMiIsImNoYW5uZWwiOiJjYWFiNGU1MC1mOTYyLTQxZjAtYmM0NC1lN2U2NGM3MzBiYmQiLCJleHAiOjE3MjQzNzg0MDB9.PD0IyVhmYPPuDL-rmkdEb5mFuvK7zvkEot7vxl5U7Mg';
  
  const wsUrl = `wss://live-vdk4.camera.rt.ru/stream/004acf75-a06b-4731-8949-ef801caa3412/live.mp4?mp4-fragment-length=0.5&mp4-use-speed=0&mp4-afiller=1&token=${token2}`;
  
  const userStream = useRef([]);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: false, video: true }).then(stream => {
      userStream.current.srcObject = stream;
      const token2='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHRfcHJvZHVjdGlvbiJ9.eyJpc3MiOiJ2Y2Zyb250X3Byb2R1Y3Rpb24iLCJzdWIiOjE5MjgwOTQsImlwIjoiMTAuNzguMzMuMiIsImNoYW5uZWwiOiJjYWFiNGU1MC1mOTYyLTQxZjAtYmM0NC1lN2U2NGM3MzBiYmQiLCJleHAiOjE3MjQzNzg0MDB9.PD0IyVhmYPPuDL-rmkdEb5mFuvK7zvkEot7vxl5U7Mg';
  
      var socket = new WebSocket(`wss://live-vdk4.camera.rt.ru/stream/004acf75-a06b-4731-8949-ef801caa3412/live.mp4?mp4-fragment-length=0.5&mp4-use-speed=0&mp4-afiller=1&token=${token2}`);
  
      socket.onopen = () => socket.send(userStream.current.srcObject);
      socket.onmessage = function (event) {
        console.log("[message] Data received from server:");
        if (event.data !== undefined && event.data !== null) {
          console.log(event.data);
        }
      };
      socket.onclose = () => {
        console.log("Connection Closed!");
      };
      socket.onerror = () => {
        console.log("WS Error");
      };
  
      return () => {
        socket.close();
      };
    });
  }, []);
  
  return (
    <div>
      <video controls style={{ height: 500, width: 500 }} autoPlay ref={userStream} />
    </div>
  );
};



function ActionLink() {
  const [userData, setUserData] = useState([]);
  const token1='eyJhbGciOiJSUzI1NiIsImtpZCI6InB1YmxpYzpiNGE4NjgwNC04NDhiLTQzYWQtYmY3Ny01MjI0M2MzZTNhNDEiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOltdLCJjbGllbnRfaWQiOiJiV0Z6ZEdWeU9qYzRPVFUyTmpveE9USTRNRGswT2pFMk56QTZOVFV3T1RjNk16b3hOanBRUTNWWFpHRmpTV3h0VDBjcmRpdG1OekEwYzA4MVVtaGtNblpLV21reFRFNTNURkZ1UnprMk56aFpQUT09IiwiZXhwIjoxNzU1ODc3ODk2LCJleHQiOnt9LCJpYXQiOjE3MjQzNDE4OTYsImlzcyI6Imh0dHBzOi8vb2F1dGgyLmtleS5ydC5ydS8iLCJqdGkiOiJlMjMxYmYzYS1mNDMyLTRiYjMtOTM4OC0yNWRhM2Y4YmVjYjMiLCJuYmYiOjE3MjQzNDE4OTYsInNjcCI6W10sInN1YiI6ImJXRnpkR1Z5T2pjNE9UVTJOam94T1RJNE1EazBPakUyTnpBNk5UVXdPVGM2TXpveE5qcFFRM1ZYWkdGalNXeHRUMGNyZGl0bU56QTBjMDgxVW1oa01uWktXbWt4VEU1M1RGRnVSemsyTnpoWlBRPT0ifQ.tzdejeI5E3HZwE8d5i_IqgdbXwv1QI4HmKYRxeUXFZaC55zuo9DvzkXEiIrJRldNT17F9QII2WuRCBoqWk9ZaOnYcSxyWavUx1OqlByKCUdc8eBlIZ1K2jl30_I2iYQrqzfv1R0ZdYsvSK6JHTWPFabC99t6pgdV50szLjrUjeOWGqe_hvExK7OA_pL-0ye6J0JCBSvftH7RPNJ0hiOts7JXx78JuQRBrgrXQRXrzHOOyXYbaw3E7PS2oUXHUswYfKBrGrMVzFLjdYFUJutwYydgRlqVTEyiNwVSeMHdPRgX1aTb5CQ2DktTOuN4-KWecHiYMebfxGXd8BZy7pFg6O1yNbHopawFWE8dHeoejgVWsIlYky2lcf6mnUq9WCXIL3IRe8YZcQqBH2W8hzsZnK9l0FQ55mLlY79GnWQEKFjTo4taCN2q5sDDh3_1nIsEVc67BUeyO1P9o7dLD9_1rKlDfYSCQCye4s3_rdItvZH3gaV_QXyLNUF5BgJVTqoHbqaks1X_0NZq_Ib3Y2CMdtw7Tc3J0jNRhycE9X9gnta4ytwe58mn3-IIw0UpVa0WdtHtbGKgIuejrFvF59nKjkX-HlECu74dWLA3Jk-2n1GhOCpyrm6y3-S2N5sa3-i4r18-JO_t4v_isWIM10gtCsHI4NPs8bbZM3SevJCJL8E';
    
  function handleClick(e) {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Authorization", token1);
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
    <button href="#" onClick={handleClick}>
      Открыть дверь подъезда
    </button>

    );
}

function clickMe(e) {
  const token='eyJhbGciOiJSUzI1NiIsImtpZCI6InB1YmxpYzpiNGE4NjgwNC04NDhiLTQzYWQtYmY3Ny01MjI0M2MzZTNhNDEiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOltdLCJjbGllbnRfaWQiOiJiV0Z6ZEdWeU9qYzRPVFUyTmpveE9USTRNRGswT2pFMk56QTZOVFV3T1RjNk16b3hOanBRUTNWWFpHRmpTV3h0VDBjcmRpdG1OekEwYzA4MVVtaGtNblpLV21reFRFNTNURkZ1UnprMk56aFpQUT09IiwiZXhwIjoxNzU1ODc3ODk2LCJleHQiOnt9LCJpYXQiOjE3MjQzNDE4OTYsImlzcyI6Imh0dHBzOi8vb2F1dGgyLmtleS5ydC5ydS8iLCJqdGkiOiJlMjMxYmYzYS1mNDMyLTRiYjMtOTM4OC0yNWRhM2Y4YmVjYjMiLCJuYmYiOjE3MjQzNDE4OTYsInNjcCI6W10sInN1YiI6ImJXRnpkR1Z5T2pjNE9UVTJOam94T1RJNE1EazBPakUyTnpBNk5UVXdPVGM2TXpveE5qcFFRM1ZYWkdGalNXeHRUMGNyZGl0bU56QTBjMDgxVW1oa01uWktXbWt4VEU1M1RGRnVSemsyTnpoWlBRPT0ifQ.tzdejeI5E3HZwE8d5i_IqgdbXwv1QI4HmKYRxeUXFZaC55zuo9DvzkXEiIrJRldNT17F9QII2WuRCBoqWk9ZaOnYcSxyWavUx1OqlByKCUdc8eBlIZ1K2jl30_I2iYQrqzfv1R0ZdYsvSK6JHTWPFabC99t6pgdV50szLjrUjeOWGqe_hvExK7OA_pL-0ye6J0JCBSvftH7RPNJ0hiOts7JXx78JuQRBrgrXQRXrzHOOyXYbaw3E7PS2oUXHUswYfKBrGrMVzFLjdYFUJutwYydgRlqVTEyiNwVSeMHdPRgX1aTb5CQ2DktTOuN4-KWecHiYMebfxGXd8BZy7pFg6O1yNbHopawFWE8dHeoejgVWsIlYky2lcf6mnUq9WCXIL3IRe8YZcQqBH2W8hzsZnK9l0FQ55mLlY79GnWQEKFjTo4taCN2q5sDDh3_1nIsEVc67BUeyO1P9o7dLD9_1rKlDfYSCQCye4s3_rdItvZH3gaV_QXyLNUF5BgJVTqoHbqaks1X_0NZq_Ib3Y2CMdtw7Tc3J0jNRhycE9X9gnta4ytwe58mn3-IIw0UpVa0WdtHtbGKgIuejrFvF59nKjkX-HlECu74dWLA3Jk-2n1GhOCpyrm6y3-S2N5sa3-i4r18-JO_t4v_isWIM10gtCsHI4NPs8bbZM3SevJCJL8E'
  const [userData, setUserData] = useState([]);
  let name;
  // fetching api data
  e.preventDefault();
  useEffect(() => {
    fetch('https://household.key.rt.ru/api/v1/app/devices/25575/events',
  {
    Method: "GET",
    Authorization: `Bearer ${token}`
  })
      .then(res => res.json())
      .then(data => setUserData(data))
    
  }, []
)
if (userData){
  alert(JSON.stringify(userData))
}

} 
function clickMe2() {
  const [post, setPost] = React.useState(null);
  const baseURL = "https://household.key.rt.ru/api/v1/app/devices/25575/events";
  React.useEffect(() => {
    axios.get(baseURL)
    .then((response) => {
      setPost(response.data[a]);
    });
  }, []);
  if (!post) return null;

  return (
    <div>
      <h1>{post}</h1>
    </div>
  );
} 

function DashboardCard04() {



  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
      {ActionLink()}
      
      </header>
      <div><YourComponent /></div>
      
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
     
    </div>
  );
}

export default DashboardCard04;
