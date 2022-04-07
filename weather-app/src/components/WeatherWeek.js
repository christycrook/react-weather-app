import React from "react";
import { Box } from "@mui/material";
import WeatherCard from "./WeatherCard";

const WeatherWeek = ({weathers}) => {
   

    return (
       <Box
             sx={{
              display: "inline-flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexWrap: "wrap",
              maxWidth: "100%"
            }}
        >
           {weathers.map(({main, weather}) => (
               <div>
                   <WeatherCard
                    temp_max={main.temp_max}
                    temp_min={main.temp_min}
                    main={weather[0].main}
                    icon={weather[0].icon}
                    
                    />
               </div>
           ))}
       </Box>
    )
};

export default WeatherWeek;