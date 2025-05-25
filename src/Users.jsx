import React, { useState } from "react";



function Users(){

   const [score,setScore] = useState([1,2,3,4,5,6,7]);
    return (
       <div>
          {score.map(item => <h1>{item}</h1>)}
    </div>
    )
}


export default Users;