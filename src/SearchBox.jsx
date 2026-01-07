import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
      let[city,setCity] = useState("");
      let[error,setError] = useState(false);

      const API_URL = "http://api.openweathermap.org/data/2.5/weather";
      const API_KEY = "90dc447911781f9eaf060d1c390643f6";

      let getWeatherInfo = async() =>{
          try{
            let reponse =   await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
          let jsonResponse = await reponse.json();
          let result = {
            city : city,
            temp:jsonResponse.main.temp,
            feels_like:jsonResponse.main.feels_like,
            temp_min:jsonResponse.main.temp_min,
            temp_max:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            weather:jsonResponse.weather[0].description
          }
          console.log(result);
          return result;
          } catch (err){
            throw err;
          }
      }

      let handleChange = (event) =>{
            setCity(event.target.value);
      }

      let handleSubmit = async(event) =>{
           try{
             event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo)
            setError(false)
           }catch (err){
            setError(true);
           }
      }
      return(
            <div className="SearchBox">
                  <form onSubmit={handleSubmit}>
                        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                        <br></br><br></br>
                        <Button variant="contained" type = "submit">Submit</Button>
                        {error && <p style={{color : "red"}}>No such place exists!</p>}
                  </form>
            </div>
      )
}
