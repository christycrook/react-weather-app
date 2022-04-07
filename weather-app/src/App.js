import React from 'react';
import './App.css';
import { Container } from '@mui/material';
import CitySearch from './components/CitySearch';
import FetchData from './FetchData';
import {REACT_APP_API_KEY, API_BASE_URL} from './api';
import WeatherWeek from './components/WeatherWeek';
import { Button } from '@mui/material';

function App() {

  const { data, error, isLoading, setUrl} = FetchData();
  console.log(data);

  function ErrorHandler({error}) {
    return (
      <div role="alert">
        <p>An error occurred:</p>
        <pre>{error.message}</pre>
      </div>
    )
  }

  return (
    <Container className="App">
      <CitySearch className="CitySearch" onSearch={(zip) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${zip}, us&cnt=7&appid=${REACT_APP_API_KEY}&units=imperial`)}/>
      
      {data && <WeatherWeek className="WeatherWeek" weathers={data.list} />}<Button>See More</Button>
    </Container>
  );
}

export default App;
