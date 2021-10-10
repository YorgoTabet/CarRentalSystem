import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CarRentalRoundedIcon from '@mui/icons-material/CarRentalRounded';
import styles from './CarCard.module.css'
import ReadMoreReact from 'read-more-react'




function MediaCard(props) {

    let readMoreText = () => {
        return (<a className={styles.readMore} href='#'>...read more</a>)
    }
    return (
        <Card className={styles.mainCard} sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={props.car.url}
            />
            <CardContent>
                <Typography gutterBottom className={styles.cardTitle} variant="h5" component="div">
                    {props.car.name}
                </Typography>
                <Typography className={styles.description} variant="body2" color="text.secondary">

                    <ReadMoreReact
                        className='h5'
                        text={props.car.description}
                        min={50}
                        ideal={52}
                        max={55}
                        readMoreText={readMoreText()}>

                    </ReadMoreReact>


                </Typography>
            </CardContent>

            {props.tracksToggled ?
                <CardActions title="number of tracks" className={styles.tracks} >
                    <CarRentalRoundedIcon />
                    <Typography sx={{ color: '#22313f' }} size="small">{props.car.tracks}</Typography>
                </CardActions> :
                null
            }


        </Card>
    );
}

export default MediaCard;