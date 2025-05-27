import React from "react";
import "../card.css"


function Card({data, index, removeData}){
    return(
       
    <div className="parentDiv">
          <div className="childDiv">
            <img src={data.img} alt="" />
            <h1>{data.name}</h1>
            <h4>{data.email}</h4>
            <h5>{data.des}</h5>
            <button onClick={()=>removeData(index)}>Remove it</button>
        </div>
     </div> 
    
    )
}


export default Card;