import React, { useState } from 'react';
import Button from '@mui/material/Button';

const CitySearch = ({onSearch}) => {
    const [zip, setZip] = useState('');

    // const onSearch = () => {
    //     fetch(`${ API_BASE_URL}/data/2.5/forecast?q=${zip}, us&cnt=7&appid=${REACT_APP_API_KEY}&units=imperial`)
    //         .then((response) => response.json())
    //         .then((result) => console.log(result));
    // };

    
        return(
            <form>
                <h1>Check Your Local Weather</h1>
                <input 
                    style={{marginBottom: 20}}
                    type="text"
                    placeholder='Enter Zip Code'
                    onChange={(event) => setZip(event.target.value)}
                    value={zip}
                >
                </input>
                <div>

                <Button 
                    style={{marginBottom: 40}}
                    variant="contained" 
                    onClick={() => onSearch(zip)}
                >Check Weather</Button>
                </div>
            </form>
        )
    
};

export default CitySearch;