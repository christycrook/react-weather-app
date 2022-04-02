import React from 'react';
import './App.css';
import { Container } from '@mui/material';
import CitySearch from './components/CitySearch';
import FetchData from './FetchData';
import {API_KEY, API_BASE_URL} from './api';
import WeatherWeek from './components/WeatherWeek';

function App() {

  const { data, error, isLoading, setUrl} = FetchData();
  console.log(data);

  return (
    <Container className="App">
      <CitySearch className="CitySearch" onSearch={(zip) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${zip}, us&cnt=5&appid=${API_KEY}&units=imperial`)}/>

      {data && <WeatherWeek className="WeatherWeek"weathers={data.list} />}
    </Container>
  );
}

export default App;
