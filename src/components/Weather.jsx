import axios from "axios";  
import { useState } from "react";


function Weather(){

   const [inputcity, setInputCity] = useState("");
   const [buttonCity,setButtonCity] = useState("");
   const [weatherData,setWeatherData] = useState("");

   const handleChange = (e) => {
       setInputCity(e.target.value);
   }
   
   let name;
   const handleClick = async () => {
        setButtonCity(inputcity);
        name = inputcity;
        try {
              const api = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=8572b723fd0ef1b96625f8644b0d2965`
              const ApiData = await axios.get(api);
              setWeatherData(ApiData.data.weather[0].description);
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setWeatherData("Failed to fetch weather data");
        } 
      
    }


    return (
        <div>
             
            <h1>Helo this is a weather app</h1>
     
            <input type="text" placeholder="Enter City Name" onChange={handleChange}/>
            <button onClick={handleClick}>Submit</button>
             <hr /><br />

             <h1> {buttonCity}</h1>
             <hr /><br />
             <h1>{weatherData}</h1>
        </div>
    )
}
export default Weather;