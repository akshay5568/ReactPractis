import React from "react";
import { useState } from "react";
import '../navbar.css';

function NavBar({data}){
        return (
            <div className="navbar">
                <h1>Orignal</h1>
                <div className="fav">
                    <h1>Favraites</h1>
                    <h2>{data.filter(item => item.fav === true).length}</h2>
                </div>
            </div>
        )
}


export default NavBar;