import React from "react";
import Navbar from './components/Navbar'
import Routers from './utils/Routers'


function App(){
    return (
        <div className="main w-full h-full">
            <Navbar />
            <Routers />
        </div>
    )
}



export default App;