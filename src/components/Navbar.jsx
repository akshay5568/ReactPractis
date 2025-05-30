import {Router, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";



function NavBar() {
    return (
        <nav>
                <NavLink to="/" style={(e)=> e.isActive ? {color:"tomato"} : {color:"black"}}>Home</NavLink>
                <NavLink to="/show" style={(e)=> e.isActive ? {color:"tomato"} : {color:"black"}}>Show</NavLink>
                <NavLink to="/services" style={(e)=> e.isActive ? {color:"tomato"} : {color:"black"}}>Services</NavLink>
                <NavLink to="/calculator" style={(e)=> e.isActive ? {color:"tomato"} : {color:"black"}}>Calculator</NavLink>
                <NavLink to="/todo" style={(e)=> e.isActive ? {color:"tomato"} : {color:"black"}}>TodoApp</NavLink>
        </nav>
    )

}   

export default NavBar;