import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox({info}){
    const INITURL="https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D"
    const HOTURL="https://images.unsplash.com/photo-1571568154091-c6105f85ecc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGR1c3R8ZW58MHx8MHx8fDA%3D"
    const COLDURL="https://images.unsplash.com/photo-1602262017121-07616f2e1b7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1c3R8ZW58MHx8MHx8fDA%3D"
    const RAINURL="https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D"
    return(
        <div className="InfoBox">
            <br /><br /><br />
                <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity>80?RAINURL:info.temp>15?HOTURL:COLDURL}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            <br /> Temperature = {info.temp}&deg;C
                            <br /> Feels Like = {info.feelsLike}&deg;C
                            <br /> Humidity = {info.humidity}%
                            <br /> Max Temp = {info.tempMax}&deg;C
                            <br /> Min Temp = {info.tempMin}&deg;C
                            <br /> The Weather can be described as {info.weather}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}