import React from "react";
import WeatherHourCard from "./WeatherHourCard";

const WeatherHour = (hourly) => {
    return (
        <div>
            {hourly.map(({dt, main, weather}) => (
            <div>
                <WeatherHourCard 
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

export default WeatherHour;