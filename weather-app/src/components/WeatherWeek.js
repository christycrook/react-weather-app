import React from "react";
import WeatherCard from "./WeatherCard";

const WeatherWeek = ({weathers}) => {
    return (
       <div>
           {weathers.map(({dt, main, weather}) => (
               <div>
                   <WeatherCard
                    temp_max={main.temp_max}
                    temp_min={main.temp_min}
                    dt={dt * 1000}
                    main={weather[0].main}
                    icon={weather[0].icon}
                    />
               </div>
           ))}
       </div>
    )
};

export default WeatherWeek;