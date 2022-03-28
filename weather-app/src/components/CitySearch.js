import React from 'react';
import Button from '@mui/material/Button';

const CitySearch = () => {
    

    return(
        <form>
            <h1>Search Your City</h1>
            <input 
                type="text"
                placeholder='Search Your City'
            >
            </input>
            <br></br>
            <br></br>
            <Button variant="contained">Check Weather</Button>
        </form>
    )
};

export default CitySearch;