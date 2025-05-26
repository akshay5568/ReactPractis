import React,{useState} from "react";
import '../users.css';



function Users({data , index , handleFav}){
    return (
        <div className="mainDiv">
            <div className="childDiv">
                <img src={data.img} alt="" />
                <div>
                <h5>{data.songName}</h5>
                <h6>{data.artist}</h6>
                </div>
                <button onClick={() => handleFav(index)}>{data.fav ? "Added" : "Add to Favourites"}</button>
            </div>
        </div>
    )
}



export default Users;



