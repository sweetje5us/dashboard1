
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';

import ytoken from '../../utils/token.json'
const access_token = ytoken.token_yandex;




function getDCOrder(e){
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${access_token}`);
  myHeaders.append("accept", "application/json, text/plain, */*");
  myHeaders.append("accept-language", "ru");
  myHeaders.append("cookie", "yashr=7940018911724503092; yandexuid=7484612501724495527; gdpr=0; _ym_uid=1696618465367639972; _ym_d=1724503323; yabs-vdrf=A0; amcuid=3202312331724526826; font_loaded=YSv1; skid=6755205711724601669; yuidss=7484612501724495527; ymex=2040466710.yrts.1725106710; csrftoken=zEvHZJSGbMf0EfXDrAolfanKMMD859J72g0hXue1v1OxDPXEAS0njQwkq5sydEyP; my=YwA=; Eats-Session=0a8335cc08924a569c0843ae519b6d3d; isa=b9NspZ++pbGZa2Cj96Z5yWVdv5mJgBR/gBd6tuORHHvnt1AU49vco8QoX1Kw0lBxtB2VPpEaivBHMzPeDa5nMYPp8FU=; sae=0:0D95F868-6BE6-4945-BDDD-6F09C8E30C57:p:24.7.3.1231:w:d:RU:20231006; device_id=a51d4088812f60b7de7fe27f91cfad2dff9e184cf; i=PXatvFcAomUNRsQkt2ZKqfKJx1zo5WefIquxsUrVVNvC93MjYqHwCw650djP0Bada9njGG6bv7YrZmHj0k86s+CDdqk=; active-browser-timestamp=1727022960776; _ym_isad=2; is_gdpr=0; is_gdpr_b=CK3JYRDclAIoAg==; yabs-udb=PcLqOsWWRt9fPsbk865iR6zt86DlRdHoRsmWOMDZPNDp; gpb=gpauto.57_999141%3A56_271446%3A140%3A1%3A1727113998; cycada=d9TaU2470T8e2TLVvgia0GxydcsRvTQvq6BavERIDl4=; eda_web_adult_confirmed=false; _ym_visorc=b; Session_id=3:1727114256.5.0.1727114256093:RymSLg:bb2a.1.2:1|727659051.0.2.3:1727114256|3:10295713.111734.xZgW8SxHGAEX62X4dOEwWSxRf-A; sessar=1.1194.CiDBfmM3Q-pP_rpqKy-goZjxztqTgVo4tYwplpLDufuoxg._b-RuXWEbJMgzx7Lse8PbX45yXKQjcKlWjC_nDbd8rE; sessionid2=3:1727114256.5.0.1727114256093:RymSLg:bb2a.1.2:1|727659051.0.2.3:1727114256|3:10295713.111734.fakesign0000000000000000000; L=eUlWSA53bXUNC1lyaFcNcmACc3xCTld2AQYvJR9UNyE=.1727114256.15897.398306.a9ef7aa78d62d9c42827390ef861efca; yandex_login=bryleffe; ys=udn.cDpicnlsZWZmZQ%3D%3D#c_chck.955180213; yp=1727163455.uc.ru#1727163455.duc.ru#1756642697.brd.0702004923#1756642697.cld.2270452#1728288880.hdrc.1#2016803947.multib.1#2042473974.pcs.1#1742547735.stltp.serp_bk-map_1_1711011735#1742158902.szm.1_100000023841858:1080x1920:923x1611#1734447546.vhstfltr_onb.3:1726671545629#1758649974.swntab.1991704677#1727121456.gpauto.57_999142:56_271446:140:1:1727114256#2042474256.udn.cDpicnlsZWZmZQ%3D%3D; bh=Ek8iTm90L0EpQnJhbmQiO3Y9IjgiLCAiQ2hyb21pdW0iO3Y9IjEyNiIsICJZYUJyb3dzZXIiO3Y9IjI0LjciLCAiWW93c2VyIjt2PSIyLjUiGgUieDg2IiINIjI0LjcuMy4xMjMxIioCPzAyAiIiOgkiV2luZG93cyJCCCIxNS4wLjAiSgQiNjQiUmciTm90L0EpQnJhbmQiO3Y9IjguMC4wLjAiLCAiQ2hyb21pdW0iO3Y9IjEyNi4wLjY0NzguMjM0IiwgIllhQnJvd3NlciI7dj0iMjQuNy4zLjEyMzEiLCAiWW93c2VyIjt2PSIyLjUiWgI/MGDe2ca3Bg==; _yasc=30jmJw1LnLHwWvbL+h4X/m68Ny21uWHr0yRMd6IWF7fGklo1kSWX6mmzfzh/qAXSsMEQjZBcCCT2mai9kJ7sDYjCFa0JGKCX; eda_web={%22app%22:{%22analyticsSession%22:{%22id%22:%22m1f59kbp-mvjc9n8z2c-1nv3cx51d9mj-in75jnr59w%22%2C%22start%22:1727104229%2C%22update%22:1727114434}%2C%22deliveryTime%22:null%2C%22themeVariantKey%22:%22light%22%2C%22xDeviceId%22:%22m1brd8jc-8kbz7y5hfcs-e6nu36gyy8-1piedm6tjhsh%22%2C%22lastObtainedGps%22:{%22lat%22:57.99914169311523%2C%22lon%22:56.27144622802734%2C%22timestamp%22:1727114438620}%2C%22lat%22:57.99887%2C%22lon%22:56.27047}}");
  myHeaders.append("priority", "u=1, i");
  myHeaders.append("referer", "https://market-delivery.yandex.ru/orders");
  myHeaders.append("sec-ch-ua", "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"YaBrowser\";v=\"24.7\", \"Yowser\";v=\"2.5\"");
  myHeaders.append("sec-ch-ua-arch", "\"x86\"");
  myHeaders.append("sec-ch-ua-bitness", "\"64\"");
  myHeaders.append("sec-ch-ua-full-version-list", "\"Not/A)Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"126.0.6478.234\", \"YaBrowser\";v=\"24.7.3.1231\", \"Yowser\";v=\"2.5\"");
  myHeaders.append("sec-ch-ua-mobile", "?0");
  myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
  myHeaders.append("sec-ch-ua-platform-version", "\"15.0.0\"");
  myHeaders.append("sec-ch-ua-wow64", "?0");
  myHeaders.append("sec-fetch-dest", "empty");
  myHeaders.append("sec-fetch-mode", "cors");
  myHeaders.append("sec-fetch-site", "same-origin");
  myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 YaBrowser/24.7.0.0 Safari/537.36");
  myHeaders.append("x-app-version", "17.10.3");
  myHeaders.append("x-client-session", "m1f59kbp-mvjc9n8z2c-1nv3cx51d9mj-in75jnr59w");
  myHeaders.append("x-device-id", "m1brd8jc-8kbz7y5hfcs-e6nu36gyy8-1piedm6tjhsh");
  myHeaders.append("x-platform", "dc_desktop_web");
  myHeaders.append("x-taxi", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 YaBrowser/24.7.0.0 Safari/537.36 platform=dc_desktop_web");
  myHeaders.append("x-ya-coordinates", "latitude=57.99887,longitude=56.27047");
  myHeaders.append("x-ya-user-location", "latitude=57.99914169311523,longitude=56.27144622802734");
  myHeaders.append("y-browser-experiments", "MTExNTMwNCwwLDIz");
  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  
  fetch("http://192.168.0.20:8088/https://market-delivery.yandex.ru/api/v2/orders/tracking", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}




function getOzon(){
  const myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("accept-language", "ru,en;q=0.9,la;q=0.8");
  myHeaders.append("content-type", "application/json");
  myHeaders.append("cookie", "__Secure-ETC=47084456766c0bf6285327447a3d0039; __Secure-ab-group=25; __Secure-ext_xcid=caba05e591e3d5ffadc2829bcb0817a5; __Secure-user-id=43257616; is_cookies_accepted=1; ob_theme=SYSTEM; abt_data=7.8cIACSN-aRoN00K1dBZNHtJ8JpsRmXPhvoOhbYggLRm7tUL3NuUTSiEFRCCzFPVG4_xTvUKu6HzV79gJpVbWX1q3tVfWerTNrbmarU2XR6cfcU9l4e3q5CyZ3z9qwh-tYG9frDFwhSnGP7ZmEdt0PzwuvtJZBUt4YpSWg08cRqmvulF1u4Oq_v4T9CzWMNpm_KZKkzeSVpP5ZA793RexyLXUaVlTr1rAmN6LOZ5kRStIoTRLJG4ntJRFJJb16ycAHJcleTfVa6NJgUEC1Zg1bydsdruGyyy-lUle6xW9gi3kMGFtgGt75LglcE5nbD1tAOTLu0PptAbgzfSNbVKCP8-JSbVXeo29WLcAOB2Dx_tCEC6CHP-Dc4FiHOtAzFVcIHS4lrYjHTUbp2vO9qXa3KzgKsFv7JW3rscYy3PQhyxnLF1iniQOh8Q00C8Mssio2s49-1d3zwR-HkJm; xcid=cd4288d2a13e2b48d8f53012fe1a372e; rfuid=NjkyNDcyNDUyLDEyNC4wNDM0NzUyNzUxNjA3NCwxMDI4MjM3MjIzLC0xLC05ODc0NjQ3MjQsVzNzaWJtRnRaU0k2SWxCRVJpQldhV1YzWlhJaUxDSmtaWE5qY21sd2RHbHZiaUk2SWxCdmNuUmhZbXhsSUVSdlkzVnRaVzUwSUVadmNtMWhkQ0lzSW0xcGJXVlVlWEJsY3lJNlczc2lkSGx3WlNJNkltRndjR3hwWTJGMGFXOXVMM0JrWmlJc0luTjFabVpwZUdWeklqb2ljR1JtSW4wc2V5SjBlWEJsSWpvaWRHVjRkQzl3WkdZaUxDSnpkV1ptYVhobGN5STZJbkJrWmlKOVhYMHNleUp1WVcxbElqb2lRMmh5YjIxbElGQkVSaUJXYVdWM1pYSWlMQ0prWlhOamNtbHdkR2x2YmlJNklsQnZjblJoWW14bElFUnZZM1Z0Wlc1MElFWnZjbTFoZENJc0ltMXBiV1ZVZVhCbGN5STZXM3NpZEhsd1pTSTZJbUZ3Y0d4cFkyRjBhVzl1TDNCa1ppSXNJbk4xWm1acGVHVnpJam9pY0dSbUluMHNleUowZVhCbElqb2lkR1Y0ZEM5d1pHWWlMQ0p6ZFdabWFYaGxjeUk2SW5Ca1ppSjlYWDBzZXlKdVlXMWxJam9pUTJoeWIyMXBkVzBnVUVSR0lGWnBaWGRsY2lJc0ltUmxjMk55YVhCMGFXOXVJam9pVUc5eWRHRmliR1VnUkc5amRXMWxiblFnUm05eWJXRjBJaXdpYldsdFpWUjVjR1Z6SWpwYmV5SjBlWEJsSWpvaVlYQndiR2xqWVhScGIyNHZjR1JtSWl3aWMzVm1abWw0WlhNaU9pSndaR1lpZlN4N0luUjVjR1VpT2lKMFpYaDBMM0JrWmlJc0luTjFabVpwZUdWeklqb2ljR1JtSW4xZGZTeDdJbTVoYldVaU9pSk5hV055YjNOdlpuUWdSV1JuWlNCUVJFWWdWbWxsZDJWeUlpd2laR1Z6WTNKcGNIUnBiMjRpT2lKUWIzSjBZV0pzWlNCRWIyTjFiV1Z1ZENCR2IzSnRZWFFpTENKdGFXMWxWSGx3WlhNaU9sdDdJblI1Y0dVaU9pSmhjSEJzYVdOaGRHbHZiaTl3WkdZaUxDSnpkV1ptYVhobGN5STZJbkJrWmlKOUxIc2lkSGx3WlNJNkluUmxlSFF2Y0dSbUlpd2ljM1ZtWm1sNFpYTWlPaUp3WkdZaWZWMTlMSHNpYm1GdFpTSTZJbGRsWWt0cGRDQmlkV2xzZEMxcGJpQlFSRVlpTENKa1pYTmpjbWx3ZEdsdmJpSTZJbEJ2Y25SaFlteGxJRVJ2WTNWdFpXNTBJRVp2Y20xaGRDSXNJbTFwYldWVWVYQmxjeUk2VzNzaWRIbHdaU0k2SW1Gd2NHeHBZMkYwYVc5dUwzQmtaaUlzSW5OMVptWnBlR1Z6SWpvaWNHUm1JbjBzZXlKMGVYQmxJam9pZEdWNGRDOXdaR1lpTENKemRXWm1hWGhsY3lJNkluQmtaaUo5WFgxZCxXeUp5ZFNKZCwwLDEsMCwyNCwyMzc0MTU5MzAsOCwyMjcxMjY1MjAsMCwxLDAsLTQ5MTI3NTUyMyxSMjl2WjJ4bElFbHVZeTRnVG1WMGMyTmhjR1VnUjJWamEyOGdWMmx1TXpJZ05TNHdJQ2hYYVc1a2IzZHpJRTVVSURFd0xqQTdJRmRwYmpZME95QjROalFwSUVGd2NHeGxWMlZpUzJsMEx6VXpOeTR6TmlBb1MwaFVUVXdzSUd4cGEyVWdSMlZqYTI4cElFTm9jbTl0WlM4eE1qWXVNQzR3TGpBZ1dXRkNjbTkzYzJWeUx6STBMamN1TUM0d0lGTmhabUZ5YVM4MU16Y3VNellnTWpBd016QXhNRGNnVFc5NmFXeHNZUT09LGV5SmphSEp2YldVaU9uc2lZWEJ3SWpwN0ltbHpTVzV6ZEdGc2JHVmtJanBtWVd4elpTd2lTVzV6ZEdGc2JGTjBZWFJsSWpwN0lrUkpVMEZDVEVWRUlqb2laR2x6WVdKc1pXUWlMQ0pKVGxOVVFVeE1SVVFpT2lKcGJuTjBZV3hzWldRaUxDSk9UMVJmU1U1VFZFRk1URVZFSWpvaWJtOTBYMmx1YzNSaGJHeGxaQ0o5TENKU2RXNXVhVzVuVTNSaGRHVWlPbnNpUTBGT1RrOVVYMUpWVGlJNkltTmhibTV2ZEY5eWRXNGlMQ0pTUlVGRVdWOVVUMTlTVlU0aU9pSnlaV0ZrZVY5MGIxOXlkVzRpTENKU1ZVNU9TVTVISWpvaWNuVnVibWx1WnlKOWZTd2lhVEU0YmlJNmUzMTlMQ0o1WVc1a1pYZ2lPbnNpYldWa2FXRWlPbnQ5TENKeVpXRmtZV0pwYkdsMGVTSTZlMzBzSW01bGRYSnZRWE56YVhOMFlXNTBJanA3SW05dVVHRm5aVU5vWVc1blpXUWlPbnQ5TENKdmJrNWxkWEp2UVhOemFYTjBZVzUwVDNCbGJtVmtTVzVUY0d4cGRGWnBaWGROWVhsaVpVTm9ZVzVuWldRaU9udDlmU3dpY0hWaWJHbGpSbVZoZEhWeVpTSTZleUpVZFhKaWIwRndjRk4wWVhSbElqcDdJa2hCVTE5Q1JWUlVSVkpmVmtWU1UwbFBUaUk2SW1oaGMwSmxkSFJsY2xabGNuTnBiMjRpTENKSlRsOVFVazlIVWtWVFV5STZJbWx1VUhKdlozSmxjM01pTENKSlRsTlVRVXhNUVZSSlQwNWZSVkpTVDFJaU9pSnBibk4wWVd4c1lYUnBiMjVGY25KdmNpSXNJazVCVmtsSFFWUkpUMDVmVkU5ZlZVNUxUazlYVGw5QlVGQk1TVU5CVkVsUFRpSTZJbTVoZG1sbllYUnBiMjVVYjFWdWEyNXZkMjVCY0hCc2FXTmhkR2x2YmlJc0lrNVBWRjlKVGxOVVFVeE1SVVFpT2lKdWIzUkpibk4wWVd4c1pXUWlMQ0pTUlVGRVdWOUdUMUpmVlZORklqb2ljbVZoWkhsR2IzSlZjMlVpZlgxOWZRPT0sNjUsNTIxMDUxOTExLDEsMSwtMSwxNjk5OTU0ODg3LDE2OTk5NTQ4ODcsLTUwNTg5MjYxMSwyNA==; __Secure-refresh-token=6.43257616.H8pJNJyVT565s79Qo_yrxg.25.AfvKsl-d3_t5p-y4BeWKil7ZYV98xMWX3HdxsHYTIy_OaSvDX1qWR3BqlEKpGbunvpTtMGw3LgQpaHRG2s9Nuco.20200203113401.20240923215156.Pk6ExHHBAnwcCcOwj4L4AF9QSZWCW1bapbw_e-m0w70.175e2a53368e29bde; __Secure-access-token=6.43257616.H8pJNJyVT565s79Qo_yrxg.25.AfvKsl-d3_t5p-y4BeWKil7ZYV98xMWX3HdxsHYTIy_OaSvDX1qWR3BqlEKpGbunvpTtMGw3LgQpaHRG2s9Nuco.20200203113401.20240923215156.dx0xDRBubqji1hXtL5mfNT58LNTshgRJw3Oooe9bv5M.190b7ced077b8f8ad");
  myHeaders.append("origin", "https://www.ozon.ru");
  myHeaders.append("priority", "u=1, i");
  myHeaders.append("referer", "https://www.ozon.ru/my/orderdetails/?order=43257616-0437");
  myHeaders.append("sec-ch-ua", "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"YaBrowser\";v=\"24.7\", \"Yowser\";v=\"2.5\"");
  myHeaders.append("sec-ch-ua-mobile", "?0");
  myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
  myHeaders.append("sec-fetch-dest", "empty");
  myHeaders.append("sec-fetch-mode", "cors");
  myHeaders.append("sec-fetch-site", "same-origin");
  myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 YaBrowser/24.7.0.0 Safari/537.36");
  myHeaders.append("x-o3-app-name", "dweb_client");
  myHeaders.append("x-o3-app-version", "release_19-8-2024_b0dc0f26");
  myHeaders.append("x-o3-manifest-version", "b0dc0f26594de191daebdbaa33e214ec9e74c267");
  myHeaders.append("x-o3-parent-requestid", "aaff2b46db4dfd52a07cb5910fb40276");
  
  const raw = JSON.stringify({
    "asyncData": "eyJ1cmwiOiIvbXkvb3JkZXJkZXRhaWxzLz9vcmRlcj00MzI1NzYxNi0wNDM3IiwiY2kiOnsidmVydGljYWwiOiJjc21hIiwibmFtZSI6Im9yZGVyVHJhY2tpbmciLCJwYXJhbXMiOlt7Im5hbWUiOiJQcmVzZXQiLCJ0ZXh0IjoiMSJ9XSwidmVyc2lvbiI6NCwibGF5b3V0SUQiOjcxOTgsImlkIjozMjU3ODIxfX0=",
    "extraBody": true
  });
  
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  
  fetch("http://192.168.0.20:8088/https://www.ozon.ru/api/composer-api.bx/widget/json/v2?widgetStateId=orderTracking-3257821-default-1", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
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
          <Tab  className="font-semibold text-gray-800 dark:text-gray-100" label="DeliveryClub" {...a11yProps(0)} />
          <Tab className="font-semibold text-gray-800 dark:text-gray-100" label="OZON" {...a11yProps(1)} />
          
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>

      {/* {getDCOrder()} */}
    

      </CustomTabPanel>
    
      <CustomTabPanel value={value} index={1}>

   {/* {getOzon()} */}
     
      
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
