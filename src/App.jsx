import React from "react";
import Navbar from './components/Navbar'
import Routers from './utils/Routers'


function App(){
    return (
        <div className="main">
            <Navbar />
            <Routers />
        </div>
    )
}



export default App;