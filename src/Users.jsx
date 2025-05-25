import React, { useState } from "react";



function Users(){

   const [score,setScore] = useState({name : "Aditya", age: 20,  desgnation: "Full Stack Developer" , isEmployeed: true  });
   let a = false;
    return (
       <div>
         <h1>Name: {score.name}</h1>
         <h1>Age : {score.age}</h1>
        <h1>Designation : {score.desgnation}</h1>
        <h1>isEmployeed : {score.isEmployeed.toString()}</h1>
        <button onClick={() => setScore({...score , isEmployeed: score.isEmployeed ? a : true})}>{score.isEmployeed ? "Fire Now" : "Join Now"}</button>
    </div>
    )
}


export default Users;