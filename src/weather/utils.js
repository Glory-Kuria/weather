import {UseGettWeather} from "./hooks/UseGetWeather"
import './index.css'

import { weather} from "./WeatherCard/weather";
import Card from "../Atoms/forecast";
import './index.css'



const Forecast = ()=>{
    const {weather,loading,errors} = weather();
    console.log ({weather})
    return(
        <div className="forecast">
{loading && <h2>Loading  ...</h2>}
{errors.length>0 && <h2>{errors}</h2>}
{weather.length > 0 ? weather.map((forecast)=>(
    <Card
    // key ={user.id}
    condition={weather.text}
    current ={weather.temp_c}
    age ={user.age}
    // address ={user.address}
    location={`${weather.name} ${weather.region} ${weather.country}`}
    />
))
: ! loading && <h2>city not found </h2>
}
        </div>
    )
};
export default Forecast;