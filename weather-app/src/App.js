import React from 'react';
import './App.css';
import CitySearch from './components/CitySearch';
import WeatherCard from './components/WeatherCard';

function App() {
  return (
    <div className="App">
      <CitySearch />
      <br></br>
      <br></br>
      <WeatherCard 
        dt={1648609200}
        temp_min="72.9"
        temp_max="74.16"
        main="Clouds"
        icon="04n"
      />
    </div>
  );
}

export default App;
