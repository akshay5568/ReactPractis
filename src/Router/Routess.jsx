import NavBar from "../components/Navbar";
import { Router,Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Show from "../components/Show";
import Services from "../components/Services";

function Routess(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/show" element={<Show/>} />
                <Route path="/services" element={<Services/>} />
            </Routes>  
        </div>
    )

}

export default Routess;