import React from "react";
import { useState } from "react";
import "./index.css"
import Cards from "./components/cards";
import Form from "./components/Form";


function App(){

  const [data, setData] = useState([]);

  const addData = (formData) => {
     console.log(formData);
     setData([...data, formData]);
  }

  const removeData = (index) => {
     setData(data.filter((item,setIndex) => setIndex !== index));
  } 

  return (
    <div className="mainApp">
      <Cards data={data} removeData={removeData}/>
      <Form addData={addData}/>
    </div>
  )
}



export default App;
