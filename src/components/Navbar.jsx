import { NavLink } from "react-router-dom";



function Navbar(){
      return (
        <nav>
            <NavLink to='/' 
              style={(e)=> e.isActive ? {color: "tomato"} : {color :"black"}}
            >Home</NavLink>
            <NavLink  to='/about' 
              style={(e)=> e.isActive ? {color: "tomato"} : {color :"black"}}
            >About</NavLink>
            <NavLink  to='/user' 
              style={(e)=> e.isActive ? {color: "tomato"} : {color :"black"}}
            >User</NavLink>
        </nav>
      )
}


export default Navbar;