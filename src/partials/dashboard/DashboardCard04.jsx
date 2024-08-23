import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import Player from "react-websockets-video-player";
const token_rt='eyJhbGciOiJSUzI1NiIsImtpZCI6InB1YmxpYzpiNGE4NjgwNC04NDhiLTQzYWQtYmY3Ny01MjI0M2MzZTNhNDEiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOltdLCJjbGllbnRfaWQiOiJiV0Z6ZEdWeU9qYzRPVFUyTmpveE9USTRNRGswT2pFMk56QTZOVFV3T1RjNk16b3hOanBRUTNWWFpHRmpTV3h0VDBjcmRpdG1OekEwYzA4MVVtaGtNblpLV21reFRFNTNURkZ1UnprMk56aFpQUT09IiwiZXhwIjoxNzU1OTM0OTQ0LCJleHQiOnt9LCJpYXQiOjE3MjQzOTg5NDQsImlzcyI6Imh0dHBzOi8vb2F1dGgyLmtleS5ydC5ydS8iLCJqdGkiOiI3ZDQ0MmViMy1lOTQ2LTRhOGUtYTNjYS05MzVlYmY4NmYxNTgiLCJuYmYiOjE3MjQzOTg5NDQsInNjcCI6W10sInN1YiI6ImJXRnpkR1Z5T2pjNE9UVTJOam94T1RJNE1EazBPakUyTnpBNk5UVXdPVGM2TXpveE5qcFFRM1ZYWkdGalNXeHRUMGNyZGl0bU56QTBjMDgxVW1oa01uWktXbWt4VEU1M1RGRnVSemsyTnpoWlBRPT0ifQ.KWAh6JQtxrUFXhNz7XGWZLMB0Bn8ZVBP_d-igIOq4RcZcrbtX8dGuRTGIzVcZGdXI8OJOs-nsUjz3h8BWRFPIfyQzOWm_YrS9VIKm2yT6ckrXoLID9-mjHcneDSeMx8pfjOMUifudk8GIE8Xy18BbT94GyapaeoYsVuyJni0EXp_R5iWRs0N1AhI5cEfM3SBpIrqZEGDJ70Yt1EGW87EmT0LhQovkrQe2VT4MlmLtNvhhj4TJJ9B05eCVIt_wAt0Cm9mN6nYGoxK8jbeon8hGlS945pRrgnQSVArOZoywHiSu9wtGJxsr8fhqpn1g8nIvaNxALoJFZiNqTUiO02n32lqu4JHDpfYeqVb0O6D8K2xAIjtqqOOvwYiQI3lla2v-KjTRYJfTukcd8k4Bcuhn7IqF7uiS4gs_gI3jGN6vfA3h2dh9jg_wcqSjAOEYTAqPBw3QyElXWzmgXm-TWgzhqP3euHS555JBu22sI16wiyfTI8CWyWNgRXPWvJSibL6OOq8y_GAqg1SkbSU95tymdIbEA0fWfxG7IM2A2kWMdYNdfx2D2IiGw6py4tjFkH8y2e3cV5DsDqmKuGL8VD_wJuMLXMb1sfx5LlAvziR3W5vjxj5vgL_fYmexHfrwHbVq6_E8B-yh59n6BmnZ5UiHEmqVQij7qXOiHGvWFJIyz4';
 const token_stream='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHRfcHJvZHVjdGlvbiJ9.eyJpc3MiOiJ2Y2Zyb250X3Byb2R1Y3Rpb24iLCJzdWIiOjE5MjgwOTQsImlwIjoiNDYuMTQ2LjQxLjcxIiwiY2hhbm5lbCI6IjAwNGFjZjc1LWEwNmItNDczMS04OTQ5LWVmODAxY2FhMzQxMiIsImV4cCI6MTcyNDQ2NDgwMH0.PQ-W4NK32MrimaXlIlMuC2KTGNcv5EgKqGGXYCWkjk8';

 const YourComponent = () => {
const url = `//live-vdk4.camera.rt.ru/stream/004acf75-a06b-4731-8949-ef801caa3412/live.mp4?mp4-fragment-length=0.5&mp4-use-speed=0&mp4-afiller=1&token=${token_stream}`
  return (
    
      <video width="750" height="45" controls >
      <source src={url}
      />
    </video>



  );
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
    <button href="#" onClick={handleClick}>
      Открыть дверь подъезда
    </button>

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
