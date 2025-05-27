import React from "react";
import Card from '../components/Card'
import "../cards.css"

function Cards({data,removeData}){
    return(
        <div className="mainCards" >
        {data.map((item,index) => {
            return <Card key={index} data={item} index={index} removeData={removeData}/>
        })}

    </div>
        
       
    )
}


export default Cards;

