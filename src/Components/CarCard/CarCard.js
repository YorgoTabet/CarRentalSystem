import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CarRentalRoundedIcon from '@mui/icons-material/CarRentalRounded';
import styles from './CarCard.module.css'
import ReadMoreReact from 'read-more-react'
import { useState } from 'react';
import { Link } from 'react-router-dom'







const MediaCard = (props) => {

    const [hover, setHover] = useState(false)

    const onHoverHandler = () => {
        setHover(!hover)
    }

    let readMoreText = () => {
        return (<a className={styles.readMore} href='#1232'>...read more</a>)
    }
    return (
        <Card className={styles.mainCard} sx={{ maxWidth: 345 }} onMouseEnter={onHoverHandler} onMouseLeave={onHoverHandler} >
            <CardMedia
                component="img"
                height="140"
                image={props.car.url}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.car.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">

                    <ReadMoreReact
                        text={props.car.description}
                        min={50}
                        ideal={52}
                        max={55}
                        readMoreText={readMoreText()} />




                </Typography>
            </CardContent>

            {/* View Details Btn */}
            {hover ? <Link to={"car/" + props.car.id} className={styles.ShowBtn}>Show</Link> : null}

            {/* Number of Rentals  */}
            {
                props.tracksToggled ?
                    <CardActions title="number of previous Rentals" className={styles.tracks} >
                        <CarRentalRoundedIcon />
                        <Typography sx={{ color: '#22313f' }} size="small">{props.car.tracks}</Typography>
                    </CardActions> :
                    null
            }



        </Card>

    );
}

export default MediaCard;