import React from "react";

import Card from "@mui/material/Card";
import Typography from '@mui/material/Typography';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";

const WeatherCard = ({dt, main, temp_max, temp_min, icon}) => {
    const date = new Date(dt);
    
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
                sx={{width: 230}}

                // variant="outlined"
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}>
                    </CardMedia>
                    <CardContent>
                        <Typography>
                            {main}
                        </Typography>
                        <Typography>
                            {date.toLocaleDateString()} - {date.toLocaleTimeString()}
                        </Typography>
                        <Typography>
                           Min: {temp_min}
                        </Typography>
                        <Typography>
                            Max: {temp_max}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    )
};

export default WeatherCard;