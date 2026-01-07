import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
      let[weatherInfo,setWeatherInfo] = useState({
           city : "Delhi",
            feelslike : 18.15,
            temp : 19.61,
            temp_max : 19.61,
            temp_min : 19.61,
            humidity : 20,
            weather : "clear-sky" 
      })

      let updateInfo = (newInfo) =>{
            setWeatherInfo(newInfo);
      }
      return (
            <div style = {{textAlign : "center"}}>
                  <h2>Weather App</h2>
                  <SearchBox updateInfo={updateInfo}/>
                  <InfoBox info = {weatherInfo}/>
            </div>
      )
}