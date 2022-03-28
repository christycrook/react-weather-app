import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { API_KEY, API_BASE_URL } from '../api';

const CitySearch = () => {
    const [city, setCity] = useState('');

    const onSearch = () => {
        fetch(`${ API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
            .then((response) => response.json())
            .then((result) => console.log(result));
    }

    
        return(
            <form>
                <h1>Search Your City</h1>
                <input 
                    type="text"
                    placeholder='Search Your City'
                    onChange={(event) => setCity(event.target.value)}
                    value={city}
                >
                </input>
                <br></br>
                <br></br>
                <Button 
                    variant="contained" 
                    onClick={onSearch}
                >Check Weather</Button>
            </form>
        )
    
};

export default CitySearch;