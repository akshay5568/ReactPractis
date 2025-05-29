import { BrowserRouter, Routes, useParams } from "react-router-dom"
import { Router,Route } from "react-router-dom";
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'
import Hello from "../components/Hello";
function Routers(){ 
    return (

        <div className="Routes">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user" element={<User />} />
                <Route path="/user/:name" element={<Hello/>} />
            </Routes>
        </div>
    )

}


export default Routers;