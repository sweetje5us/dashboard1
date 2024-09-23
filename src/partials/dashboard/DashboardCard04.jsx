import React, { useState, useEffect, useRef } from 'react';

import { Button, Popover  } from '@mui/material';
import {Media, Video } from '@vidstack/player-react';
import ReactPlayer from 'react-player';
import { Player, ControlBar } from 'video-react';
import token from '../../utils/token.json'



const token_rt='Bearer '+ token.token_rostelecom
 
var token_stream;



function Clip({ url }) {
  
  const videoRef = useRef();
  
  useEffect(() => {    
    videoRef.current?.load();
  }, [url]);

  return (
    // <video ref={videoRef}  muted autoPlay playsInline controls>
    //   <source src={url} />
    // </video>
    <Media>
  <Video loading="visible" controls preload="true">
    <video
     id="video"
     ref={videoRef} 
     loading="visible" 
     autoPlay
     loop
     controls
     playsInline
     src={url} 
     type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </Video>
</Media>

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
    
    fetch("http://192.168.0.20:8088/https://vc.key.rt.ru/api/v1/cameras?limit=100&offset=0", requestOptions)
      .then((response) => response.json())
      .then((result) => this.setState({token : 'https://live-vdk4.camera.rt.ru/stream/004acf75-a06b-4731-8949-ef801caa3412/live.mp4?mp4-fragment-length=0.5&mp4-use-speed=0&mp4-afiller=1&token='+result.data.items[1].streamer_token}))

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
    myHeaders.append("Accept", "application/json, text/plain, */*");
    myHeaders.append("Accept-Language", "ru");
    myHeaders.append("Authorization", token_rt);
    myHeaders.append("Connection", "keep-alive");
    myHeaders.append("Content-Length", "0");
    myHeaders.append("Cookie", "SSO_DEVICE_ID=ea9f2a00-d41f-487f-9611-f58b5943e85b; SSO_DEVICE_ID_LEGACY=ea9f2a00-d41f-487f-9611-f58b5943e85b; rxVisitor=1724341863465RI99QV6K258GBK9J62JN09CUAS8TJJJF; _ym_uid=1724341839163756588; _ym_d=1724503112; lego_token=FETLJKXE4OYXDIFPN5ZVW2AFRNNSOZ63LQK7XE5O4PXBRMGO663Q====; ELK_CSRF_TOKEN=132984671789758:743F2A0B862701359561B5FFCAEED9B7CF02D936; key_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InB1YmxpYzpiNGE4NjgwNC04NDhiLTQzYWQtYmY3Ny01MjI0M2MzZTNhNDEiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOltdLCJjbGllbnRfaWQiOiJiV0Z6ZEdWeU9qYzRPVFUyTmpveE9USTRNRGswT2pFMk56QTZOVFV3T1RjNk16b3hOanBRUTNWWFpHRmpTV3h0VDBjcmRpdG1OekEwYzA4MVVtaGtNblpLV21reFRFNTNURkZ1UnprMk56aFpQUT09IiwiZXhwIjoxNzU2MDQ1OTU4LCJleHQiOnt9LCJpYXQiOjE3MjQ1MDk5NTgsImlzcyI6Imh0dHBzOi8vb2F1dGgyLmtleS5ydC5ydS8iLCJqdGkiOiJhNjY4YjkyMi01Y2YzLTQwNWQtOGViOS04NmE1OWU1M2ZhODkiLCJuYmYiOjE3MjQ1MDk5NTgsInNjcCI6W10sInN1YiI6ImJXRnpkR1Z5T2pjNE9UVTJOam94T1RJNE1EazBPakUyTnpBNk5UVXdPVGM2TXpveE5qcFFRM1ZYWkdGalNXeHRUMGNyZGl0bU56QTBjMDgxVW1oa01uWktXbWt4VEU1M1RGRnVSemsyTnpoWlBRPT0ifQ.nOj2EZ3ZBYdd4TPuoXPx3WZOqwYgmWBCu6go_vaB1rahvh5seseI-RlvzaiLDG8YTsCVJuUTsnNjm8xCTv6_JZyR77yE4Fk0w9l3GUP6LfsH6DYqmArP9Dk7dpkiqQAMAIv3aryee6GxsB_0vZKTJ9ud0qel46f8VsE4vl34okdUvBMpSvvIpwEwKJMoDp0oa6wVZN5k118vUURjsuIxvLd3d9fvD2izpDUkKwRKNE3tPSEAxD_huAYQLWk5zcqJh_yC8D_DSPNCzRM_9wtWebxyUVmFIILq_3KYIU7c6vVf7alea0yJlf6onK_zD-FOKytUCIa1YcYmxBQJ3RM0RHgI5KzbAOZmqzg49O4VzVNrh1sBrjPiKajmhmBZ8wIyoftBlnDeytwdTJOUDv80Tykw03FqaFAO5XaYfDPSatAP7Qti8x3M3fiJ92IFVj-e8xFdHpExCB3B8OItsh2gOkg2XWpG0n0prvfo2T-5NpKu8oRIoGOSIzvAJ-tB5PasTI1vGT1G_-mGJBHFElqBg6cIDNCIuAggBpE7xUB2nQQ1Bdm_SAzkgjTyj-dJl6s8aSfkKCoXhvmGIQWY1dF7KeL_hAkwr_vJK5e76dUfanFnqn8MO3E4YkvaIVAH-aF8nwRER-c20weP7kCTSNFg3kYFuY9qZxPLIs0OorH1Krg; vcsessid=mI7HByL69gMHMWgMUc3RbTgJbaoSWEQrnkxf6Wl83OX8GmFm63F_29wCQ4OYtm9WS4bfiZloivnCHaFQrtCMZzMOi3TEQBA6mL1UsT9rkTJJERok2AzgLUL_b3x9qN7HTdMm75LWomWPovJKqdnWMQhq5LdF0pbRK9_2xTVYFbM; gsscw-rt-lk=Xav8kPfuRzOpKmge37rtMQcg5OiU2R7tH+N4rXgD/hAn7ybjECeAo5WwRgng48Ysf9qV/UmF6RMHqdCqXoI8IcYgpLPZEEwVXpd21bn7lLACdks140ziJKXjdRfy1Llr9wDfXz9D/eIG79L83Mgm5ckTAv9JwEXByLDkVHPxxAkvjXI38AVrCM1sUcXhiS58nDyvoIhq3UzyoFZSZ/2r7c6lHMrft3iOnRpyqEo+cFiG0Ct9N+HB1fJQ635G4w==; fgsscw-rt-lk=JnHec0381e39526e9b0eb2e321beae857a9fe29e; cfidsw-rt-lk=/cRJuQ5SKy9R0yJjJg829JhAte/Znd2lo714TgOTC8PmvC4rVvgj1bBDBfBglH5x5Iqs+RCbVM54i1G16mYZYcCz8DIaT0aZxez5Ai3EnoUjNj003Md1wH8QB51dg/iN39ISR4VHlsSRaSIoS0gOY99rj0V7P5gW+2ZVaMc=; __zzatw-rt-lk=MDA0dC0mWycUJTsKFA4/FyNcaTlUE0xATUd3JjdscGEPJ3wjYnwgGWsvXVNEKB9BS0QgcjN3dDA9aSJfUF8mRVdOCSELWDg3W2JGSh52dl99bX0yUls5JWgLEj8LF1lNMCxhGzxTJy8WaWVieS1iK2cSYg4kCWsvZHtFJF8cPHVlc3IxPl43V10cESRYDiE/C2lbVjRnFRtASBgvS256Kz9qHWhNYCFFVlZ1F2BKQys2FkZGHHIzdz9rCCIZURMqX3hHV2tlVUI4MWcMT09NEj1fO1p+MVJ7DhhYCUdXTBdfQjs4WEERQRR5DCpvG3siXyoIJGM1XxlDak4NaTdcFDx1ZT5Ib3cuO24jZklbIExRP0heXUkSMmISQEBNRw03QF43V2EwDxYRTUcVPVZST0MoaxtxWFcvCSY+bXANTioSKFM1XyBra0pNRCgVWT08Hwh2aWVpcC9gIBIlEU0hF0ZaFXtDLGAMcRVcRENxeClEayRhSVsfP0ccOmlRJD4yXhA8dWUJCzowJS0xZid8Syk1HREyXldVNDtnQVR/TXkILDRnLW9oURUSWxASPwsXFBhndClSbxNiPT5teyY9Zg9bOSFUDSAORGkLG0M1aAx7dSd2fiplMzxsH2NMWShJXU56LRsNaTpcGz8eInx8LjAbRTFfLHxVEQ8mFTYXI3s/L1QQRU8YDQ1fSCUtHEx7ZnA4YQxxFk09ewk+FR04RyhyM3dlZXYcH2VIXiZLW1VrIQtRNDVmEEpPTUcNN0BeN1dhIAwWEU1WVHspHhF6biZPCwxkOTM8NG1zeFwmChpUNV8ZQ2pODWk3bBc8dWUvCTEsYnkxUi8TS2wYrNJ4ow==; TS01c37a3d=0194c94451852252ae3287c3716858f8a9dcbc0a467ce8a35871c880d521c975fb191bc8f96cdc01148a9cf07ad8eaea46c9b0ed57; _ym_isad=2; _ym_visorc=w; dtCookie=v_4_srv_96_sn_6F71A1A2ED2858CE8E22A3336230D61E_perc_100000_ol_0_mul_1_app-3Af3f80edc351ea086_1_rcs-3Acss_0; userRegionName=%D0%9F%D0%B5%D1%80%D0%BC%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D1%80%D0%B0%D0%B9; userRegionEng=permskij; userLocalityName=%D0%9F%D0%B5%D1%80%D0%BC%D1%8C; regionKladrId=59; userMrf=URAL; userIp=46.146.41.71; userRegionORPON=5200016; userLocalityORPON=5201998; subdomain=perm; userLocalityType=%D0%B3.; rxvt=1725440207143|1725438406466; utm_data={%22utm_source%22:%22key%22%2C%22utm_medium%22:%22button%22%2C%22utm_campaign%22:%22smart_1%22%2C%22utm_term%22:%22android%22}; dtSa=false%7C_load_%7C1%7C_load_%7C-%7C1725438405575%7C438406464_905%7Chttps%3A%2F%2Fperm.rt.ru%2Fsmarthome%3Futm_5Fsource%3Dkey%26utm_5Fmedium%3Dbutton%26utm_5Fcampaign%3Dsmart_5F1%26utm_5Fterm%3Dandroid%7C%7C%7C%7C; dtPC=96$438406464_905h-vGAVTSKCKABHIHGCUEOHRJFCKWKCPKTJH-0e0; TS0173638d=0194c94451d914a540455a7c0f2ee4ed7d0e87e34a9ade84be102e8d7cc7f3e73848a56799f2b49cd272a28c2d8ab7b202bc9fce35; TS0173638d=0194c94451d47956cb08a4b59b1a5cb0a055d7cc8967b136f14d66e0dbf1b4b2aabfa869d8bc5a1b5ffc34f56949d53556374cb448; key_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InB1YmxpYzpiNGE4NjgwNC04NDhiLTQzYWQtYmY3Ny01MjI0M2MzZTNhNDEiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOltdLCJjbGllbnRfaWQiOiJiV0Z6ZEdWeU9qYzRPVFUyTmpveE9USTRNRGswT2pFMk56QTZOVFV3T1RjNk16b3hOanBRUTNWWFpHRmpTV3h0VDBjcmRpdG1OekEwYzA4MVVtaGtNblpLV21reFRFNTNURkZ1UnprMk56aFpQUT09IiwiZXhwIjoxNzU2MDQ1OTU4LCJleHQiOnt9LCJpYXQiOjE3MjQ1MDk5NTgsImlzcyI6Imh0dHBzOi8vb2F1dGgyLmtleS5ydC5ydS8iLCJqdGkiOiJhNjY4YjkyMi01Y2YzLTQwNWQtOGViOS04NmE1OWU1M2ZhODkiLCJuYmYiOjE3MjQ1MDk5NTgsInNjcCI6W10sInN1YiI6ImJXRnpkR1Z5T2pjNE9UVTJOam94T1RJNE1EazBPakUyTnpBNk5UVXdPVGM2TXpveE5qcFFRM1ZYWkdGalNXeHRUMGNyZGl0bU56QTBjMDgxVW1oa01uWktXbWt4VEU1M1RGRnVSemsyTnpoWlBRPT0ifQ.nOj2EZ3ZBYdd4TPuoXPx3WZOqwYgmWBCu6go_vaB1rahvh5seseI-RlvzaiLDG8YTsCVJuUTsnNjm8xCTv6_JZyR77yE4Fk0w9l3GUP6LfsH6DYqmArP9Dk7dpkiqQAMAIv3aryee6GxsB_0vZKTJ9ud0qel46f8VsE4vl34okdUvBMpSvvIpwEwKJMoDp0oa6wVZN5k118vUURjsuIxvLd3d9fvD2izpDUkKwRKNE3tPSEAxD_huAYQLWk5zcqJh_yC8D_DSPNCzRM_9wtWebxyUVmFIILq_3KYIU7c6vVf7alea0yJlf6onK_zD-FOKytUCIa1YcYmxBQJ3RM0RHgI5KzbAOZmqzg49O4VzVNrh1sBrjPiKajmhmBZ8wIyoftBlnDeytwdTJOUDv80Tykw03FqaFAO5XaYfDPSatAP7Qti8x3M3fiJ92IFVj-e8xFdHpExCB3B8OItsh2gOkg2XWpG0n0prvfo2T-5NpKu8oRIoGOSIzvAJ-tB5PasTI1vGT1G_-mGJBHFElqBg6cIDNCIuAggBpE7xUB2nQQ1Bdm_SAzkgjTyj-dJl6s8aSfkKCoXhvmGIQWY1dF7KeL_hAkwr_vJK5e76dUfanFnqn8MO3E4YkvaIVAH-aF8nwRER-c20weP7kCTSNFg3kYFuY9qZxPLIs0OorH1Krg; vcsessid=mI7HByL69gMHMWgMUc3RbTgJbaoSWEQrnkxf6Wl83OX8GmFm63F_29wCQ4OYtm9WS4bfiZloivnCHaFQrtCMZzMOi3TEQBA6mL1UsT9rkTJJERok2AzgLUL_b3x9qN7HTdMm75LWomWPovJKqdnWMQhq5LdF0pbRK9_2xTVYFbM");
    myHeaders.append("Origin", "https://key.rt.ru");
    myHeaders.append("Referer", "https://key.rt.ru/");
    myHeaders.append("Sec-Fetch-Dest", "empty");
    myHeaders.append("Sec-Fetch-Mode", "cors");
    myHeaders.append("Sec-Fetch-Site", "same-site");
    myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 YaBrowser/24.7.0.0 Safari/537.36");
    myHeaders.append("X-Request-Id", "4dd57c49-a24e-42ee-8d24-e7f9db415779");
    myHeaders.append("sec-ch-ua", "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"YaBrowser\";v=\"24.7\", \"Yowser\";v=\"2.5\"");
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow"
    };
    
    fetch("https://household.key.rt.ru/api/v2/app/devices/25575/open", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log('дверь открыта'))
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
    
    fetch("http://192.168.0.20:8088/https://vc.key.rt.ru/api/v1/cameras?limit=100&offset=0", requestOptions)
      .then((response) => response.json())
      .then((result) => token_stream=(result.data.items[1].streamer_token))
      .catch((error) => console.error(error));

      console.log(token_stream)
    return(
     (token_stream)
    )
    }
  

  return (
    <div className="flex flex-col col-span-full sm:row-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
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
