import React from "react";
import Card from "@mui/material/Card";
import Typography from '@mui/material/Typography';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { CardActionArea } from "@mui/material";

const WeatherCard = ({dt, main, temp_max, temp_min, icon}) => {
    const date = new Date(dt);
    return (
        <Container >
            <Grid
                container spacing={2}
                direction="row"
                justifyContent="center"
            >
                <Card 
                    sx={{ maxWidth: 225}}
                    variant="outlined"
                >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="194"
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
            </Grid>
        </Container>
    )
};

export default WeatherCard;