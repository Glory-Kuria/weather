import React, { useState, useEffect } from 'react';
import { fetchWeather } from '../weather/index';

export const Weather = ({ location }) => {
    const [weatherData, setWeatherData] = useState(null);
    const[errors, setErrors] = useState('')
    const[loading, setLoading] = useState(false)
    useEffect(() => {
        const getWeather = async () => {
            try {
                setLoading(true);
                const data = await fetchWeather(location);
                setWeatherData(data);
                setLoading(false);

            } catch (error) {
                setLoading(false)
                setErrors(`Error:${error.message}`)
                console.error('Error fetching weather:', error);
            }
        };

        getWeather();
    }, [location]);

    return (
        
        <div>
            <h2>Weather Forecast for {location}</h2>
            {weatherData ? (
                <div>
                    <p>Current Temperature: {weatherData.current.temp_c}°C</p>
                    <p>Condition: {weatherData.current.condition.text}</p>
                    <img src={weatherData.current.condition.icon} alt="weather icon" />
                    <p> location :{weatherData.location.name.region}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Weather;