import React, { useState } from "react";
import './users.css'


function Users({data,index,func}){
 const {img, name,age,city, friend} = data;


    return (
       <div className="main">
             <div className="child">
                  <img className="img" src={img} alt="" />
               <div className="profileData">
                  <div className="data">
                     <h1>{name}</h1>
                     <h3>{age}</h3>
                     <h4>{city}</h4>
                  </div>   
                  <button onClick={()=>func(index)}>{friend ? "Added" : "Add Friend"}</button>
               </div>   
               
             </div>
      </div>
    )
}


export default Users;