import React from 'react';
import './App.css';
import Weather from './WeatherCard/weather';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Weather Forecast App</h1>
            </header>
            <main>
                <Weather/> {                                 }
            </main>
        </div>
    );
}

export default App;



// import WeatherApp from "./weather";




// function App() {
//   return (
//     <div className="weatherForecast">
//       <h1>Weather Forecast</h1>
//      <WeatherApp/>
//     </div>
//   )
// };

// export default App;
