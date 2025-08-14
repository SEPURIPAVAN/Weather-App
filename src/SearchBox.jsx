import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let[error,setError]=useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="6176d260fdbf05a4d83fbe22ca9dbf75";

    let getWeatherInfo=async ()=>{
        try {
            let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonRes = await res.json();
            console.log(jsonRes);
            if (!res.ok || !jsonRes.main || !jsonRes.weather) {
                setError(true);
                return null;
            }
            let result = {
                city: city,
                temp: jsonRes.main.temp,
                tempMin: jsonRes.main.temp_min,
                tempMax: jsonRes.main.temp_max,
                humidity: jsonRes.main.humidity,
                feelsLike: jsonRes.main.feels_like,
                weather: jsonRes.weather[0].description
            };
            setError(false);
            console.log(result);
            return result;
        } catch (err) {
            setError(true);
            return null;
        }
    }



    let handleChange=(evt)=>{
        setCity(evt.target.value)
    }

    let handleSubmit=async (evt)=>{
        evt.preventDefault();
        console.log(city);
        let newInfo = await getWeatherInfo();
        if (newInfo) {
            setCity("");
            updateInfo(newInfo);
        }
    }
    return(
        <div className='SearchBox'>

            <form action="" onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" 
                required value={city} onChange={handleChange}/>
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
                {error&& <p style={{color:"red"}}>NO such place exists</p> }
            </form>
        </div>
    )
}