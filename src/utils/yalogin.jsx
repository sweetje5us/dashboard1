import React from "react";

function yaWidget(){
    YaAuthSuggest.init(
  {
    client_id: 'b91f0d61be1f498f9c607cfa5c0c9164',
    response_type: 'token',
    redirect_uri: 'https://dashboard1-hmnl.vercel.app/'
  },
  'https://dashboard1-hmnl.vercel.app/', 
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
export function YaPrint(){
    return(
        <div>
            {yaWidget()}
        </div>
    )
}


export default YaPrint();