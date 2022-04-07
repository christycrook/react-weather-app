import React from "react";
import Card from "@mui/material/Card";
import Typography from '@mui/material/Typography';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/material";

const WeatherHourList = ({dt, main, temp_max, temp_min, icon}) => {
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
                    sx={{ maxWidth: 164, height: 250}}
                    // variant="outlined"
                >
                    <CardMedia
                        component="img"
                        // height="194"
                         src={`http://openweathermap.org/img/wn/${icon}@2x.png`}>
                    </CardMedia>
                    <CardContent>
                        <Typography>
                            {main}
                        </Typography>
                        <Typography>
                            {date.toLocaleTimeString()}
                        </Typography>
                        <Typography>
                           Min: {temp_min} F
                        </Typography>
                        <Typography>
                            Max: {temp_max} F
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
    )
};

export default WeatherHourList;