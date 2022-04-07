import React, { useState } from 'react';
import './App.css';
import { Container } from '@mui/material';
import CitySearch from './components/CitySearch';
import FetchData from './FetchData';
import {REACT_APP_API_KEY, API_BASE_URL} from './api';
import WeatherWeek from './components/WeatherWeek';
import { Button } from '@mui/material';
import {ErrorBoundary} from 'react-error-boundary';
import WeatherHour from './components/WeatherHour';

function App() {

  const { data, setUrl} = FetchData();
  console.log(data);

  function ErrorHandler({error}) {
    return (
      <div role="alert">
        <p>Please Enter A Valid Zip Code</p>
      </div>
    )
  }

  const [isShown, setIsShown] = useState(true);

  const buttonHandler = ()=> {
    setIsShown(!isShown);
    console.log(buttonHandler());
  };

  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorHandler}>
        <Container className="App">
        
          <CitySearch className="CitySearch" onSearch={(zip) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${zip}, us&cnt=7&appid=${REACT_APP_API_KEY}&units=imperial`)}/>
          {data && <WeatherWeek className="WeatherWeek" weathers={data.list} />}
            
          <Button onClick={buttonHandler}>See More</Button>
          <br></br>
          {data && <WeatherHour className="WeatherHour" hourly={data.list} />}
        </Container>
      </ErrorBoundary>
    </div>
  );
}

export default App;
