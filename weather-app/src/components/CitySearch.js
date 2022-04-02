import React, { useState } from 'react';
import Button from '@mui/material/Button';
// import { API_KEY, API_BASE_URL } from '../api';
import WeatherCard from './WeatherCard';

const CitySearch = ({onSearch}) => {
    const [zip, setZip] = useState('');

    // const onSearch = () => {
    //     fetch(`${ API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=imperial`)
    //         .then((response) => response.json())
    //         .then((result) => console.log(result));
    // };

    
        return(
            <form>
                <h1>Check the Weather</h1>
                <input 
                    type="text"
                    placeholder='Enter Zip Code'
                    onChange={(event) => setZip(event.target.value)}
                    value={zip}
                >
                </input>
                <br></br>
                <br></br>
                <Button 
                    variant="contained" 
                    onClick={() => onSearch(zip)}
                    onSubmit={WeatherCard}
                >Check Weather</Button>
            </form>
        )
    
};

export default CitySearch;