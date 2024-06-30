import { useState } from "react";
import { fetchWeather } from "../index";

export const UseGeWeather = ()=>{
    const[weather, setWeather] = useState('')
    const[erors, setErrors] = useState('')
    const [loading, setLoading] = useState(false)


}