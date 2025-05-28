import { BrowserRouter, Routes } from "react-router-dom"
import { Router,Route } from "react-router-dom";
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'

function Routers(){
    return (
        <div className="Routes">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user" element={<User />} />
            </Routes>
        </div>
    )

}


export default Routers;