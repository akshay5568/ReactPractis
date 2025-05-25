import React, { useState } from "react";
import Users from "./Users";

function App(){
  
    let data = [
      {img:'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D', title:"Iphone 14" , description:"lorem ipsum dolor", instock: false},
      {img:'https://images.unsplash.com/photo-1582807129843-8a00296ccb37?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D', title:"Mobile 2" , description:"lorem ipsum dolor",instock: true},
      {img:'https://images.unsplash.com/photo-1607270788732-55d2cdb8f52a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D', title:"Mobile 3" , description:"lorem ipsum dolor",instock: false},
      {img:'https://images.unsplash.com/photo-1486081505710-1b891dea8ca3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D', title:"Travel" , description:"Travling is fun!", instock: true},
      
    ]


  return (
    <Users/>
  )
}


export default App;