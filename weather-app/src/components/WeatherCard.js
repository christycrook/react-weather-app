import React from "react";

import Card from "@mui/material/Card";
import Typography from '@mui/material/Typography';
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

import WeatherHour from "./WeatherHour";
import { Button } from "@mui/material";

const WeatherCard = ({dt, main, temp_max, temp_min, icon}) => {
    const date = new Date(dt);
    // const dates = [
    //     "Sunday", 
    //     "Monday", 
    //     "Tuesday", 
    //     "Wednesday", 
    //     "Thursday", 
    //     "Friday", 
    //     "Saturday"
    // ];
    
    return (
        <Box 
          sx={{
              display: "inline-flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignContent: "flex-end",
              alignItems: "center",
              
          }}
        >
            <Card 
                sx={{width: 230, height: 400}}

                // variant="outlined"
            >
                    <CardMedia
                        component="img"
                        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}>
                    </CardMedia>
                    <CardContent>
                        <Typography>
                            {main}
                        </Typography>
                        <Typography>
                            {date.toLocaleDateString}
                        </Typography>
                        <Typography>
                           Min: {temp_min}
                        </Typography>
                        <Typography>
                            Max: {temp_max}
                        </Typography>
                        <CardActions >
                            <Button >
                                See More
                            </Button>
                        </CardActions>
                    </CardContent>
            </Card>
        </Box>
    )
};

export default WeatherCard;