import './index.css'

const baseUrl = 'https://api.weatherapi.com/v1'; 

export const fetchWeather = async (location) => {
    try {
        const response = await fetch(`${baseUrl}/current.json?key=c3d35e0332514049998142911242706&q=nairobi&aqi=no`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};




// import { WeatherGet } from './hooks/weatherGet';

// import './index.css'

// const WeatherApp = ()=>{
//     return(
//         <div className='design'>
//             <div className='photo'> 
//             {/* <img></img> */}
//             </div>
//         </div>
//     )
// };
// export default WeatherApp