import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike: 37.87,
        humidity: 73,
        temp: 30.87,
        tempMax: 30.87,
        tempMin: 30.87,
        weather: "overcast clouds"
    })

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App </h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo}/>
        </div>
    )       
}