import { getWeather } from "../utils";
import { useState,useEffect } from "react";

export const WeatherGet = ()=>{
    const [weather, setWeather] = weatherState('');
    const [errors, setErrors] = weatherState('')
    const [loading, setLoading] = weatherState(false)

    useEffect(()=>{
        const fetchWeather =async ()=>{
            try{
                setLoading(true)
                const response = await getWeather();
                setWeather(response.weather);
                setLoading(false)
            }
            catch(error){
                setLoading(false)
                setErrors(`Error:${Error.message}`)

            }
        }
        fetchWeather();
    },[])
    return {weather,loading,errors}
}