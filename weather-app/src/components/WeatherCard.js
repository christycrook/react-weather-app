import React from "react";
import Card from "@mui/material/Card";
import Typography from '@mui/material/Typography';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";

const WeatherCard = ({dt, main, temp_max, temp_min, icon}) => {
    const date = new Date(dt);
    return (
        <Container fixed>
            <Grid xs={6} md={4}
                container spacing={2}
                direction="row"
            >
                <Card 
                    sx={{ maxWidth: 225}}
                    variant="outlined"
                >
                    <CardMedia
                        component="img"
                        height="194"
                        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></CardMedia>
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
                </Card>
            </Grid>
        </Container>
    )
};

export default WeatherCard;