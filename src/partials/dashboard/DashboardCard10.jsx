import React from 'react';
import { Switch, Button } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';

import map from '../../images/map.png'





function DashboardCard10() {


  return (
   <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
<div style={ sectionStyle }>
  {/* Прихожая */}
  <div>
  <img width="48" height="48" src="https://img.icons8.com/fluency/48/light-on.png" alt="light-on"/>
  <img width="48" height="48" src="https://img.icons8.com/fluency/48/light-off.png" alt="light-off"/>
  <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
        label="MUI switch"
      />
  </div>
   {/* Гардероб */}
   <div>
  <img width="48" height="48" src="https://img.icons8.com/fluency/48/light-on.png" alt="light-on"/>
  <img width="48" height="48" src="https://img.icons8.com/fluency/48/light-off.png" alt="light-off"/>
  </div>
   {/* Ванная */}
   <div>
  <img width="48" height="48" src="https://img.icons8.com/fluency/48/light-on.png" alt="light-on"/>
  <img width="48" height="48" src="https://img.icons8.com/fluency/48/light-off.png" alt="light-off"/>
  </div>
   {/* Кухня */}
   <div>
  <img width="48" height="48" src="https://img.icons8.com/fluency/48/light-on.png" alt="light-on"/>
  <img width="48" height="48" src="https://img.icons8.com/fluency/48/light-off.png" alt="light-off"/>
  </div>
   {/* Гостиная */}
   <div>
  <img width="48" height="48" src="https://img.icons8.com/fluency/48/light-on.png" alt="light-on"/>
  <img width="48" height="48" src="https://img.icons8.com/fluency/48/light-off.png" alt="light-off"/>
  </div>
   {/* Спальня */}
   <div>
  <img width="48" height="48" src="https://img.icons8.com/fluency/48/light-on.png" alt="light-on"/>
  <img width="48" height="48" src="https://img.icons8.com/fluency/48/light-off.png" alt="light-off"/>
  </div>
   {/* Балкон */}
   <div>
  <img width="48" height="48" src="https://img.icons8.com/fluency/48/light-on.png" alt="light-on"/>
  <img width="48" height="48" src="https://img.icons8.com/fluency/48/light-off.png" alt="light-off"/>
  </div>

</div>
   </div>
  );
}

export default DashboardCard10;
