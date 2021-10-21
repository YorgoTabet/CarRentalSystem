import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CarRentalRoundedIcon from '@mui/icons-material/CarRentalRounded';
import ReadMoreReact from 'read-more-react'

import styles from './CarCard.module.css'

const MediaCard = (props) => {

    const [click, setClick] = useState(false)

    const onClickHandler = () => {
        setClick(!click)
    }

    let readMoreText = () => {
        return (<a className={styles.readMore} href='#1232'>...read more</a>)
    }
    return (
        <Card className={styles.mainCard} sx={{ maxWidth: 345 }} onClick={onClickHandler} >
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
            {click ? <Link to={"car/" + props.car.id} className={styles.ShowBtn}>Show</Link> : null}

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