import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1641970304221-48dc92c14daf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL = "https://plus.unsplash.com/premium_photo-1661962369601-37be76489d4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwd2VhdGhlciUyMG9mJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D"
    const COLD_URL = "https://images.unsplash.com/photo-1610571672761-f1518401b119?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNvbGQlMjB3ZWF0aGVyJTIwb2YlMjBjaXR5fGVufDB8fDB8fHww"
    const RAIN_URL = "https://images.unsplash.com/photo-1559464674-77bd3e0445d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHJhaW4lMjB3ZWF0aGVyJTIwb2YlMjBjaXR5fGVufDB8fDB8fHww"

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity > 80 ? RAIN_URL 
                        : info.temp > 15 ? HOT_URL 
                        : COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city} {
                         info.humidity > 80 ? <ThunderstormIcon /> 
                         : info.temp > 15 ? <SunnyIcon /> 
                         : <AcUnitIcon />
                    }
                
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <div>
                            <p>Temparature = {info.temp}°C </p> 
                            <p>Humidity = {info.humidity}% </p>
                            <p>Min Temparature = {info.tempMin}°C </p> 
                            <p>Max Temparature = {info.tempMax}°C </p> 
                            <p>
                                The weather can be describe as <i>{info.weather}</i> and feels Like {info.feelslike}°C 
                            </p> 
                        </div>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    );
}