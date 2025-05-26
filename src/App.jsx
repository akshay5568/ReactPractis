import React, { useState } from "react";
import Users from "./Users";

function App(){
  
  const row = [{img: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",name:"John",age:25,city:"New York", friend:false}
              ,{img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",name:"Jane",age:30,city:"Los Angeles", friend:true}
              ,{img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBvcnRyYWl0fGVufDB8fDB8fHww",name:"Tom",age:28,city:"Chicago", friend:false}
              ,{img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",name:"Lisa",age:27,city:"San Francisco", friend:false}
              ];

    let [val,setVal] = useState(row);          
     const handelButton = (ranks) => {
           setVal((prev)=> {
           return prev.map((item,index) => {
              if(index === ranks){
                return{...item, friend: !item.friend}
              }
              return item;
            })
          })
     }



  return (
    <div className="app">
       {val.map((item, index) => <Users data={item} index={index} func={handelButton}/>)}
    </div>
  )
}


export default App;