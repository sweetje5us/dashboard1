
function yaWidget2(){
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



export default function yaWidget() {
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
        <div>
        {yaWidget2()}
        </div>         
    );
  }
