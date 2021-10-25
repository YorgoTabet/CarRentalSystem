import React from "react";
import CarCard from '../CarCard/CarCard'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './Carousel.module.css'



// Setting for responsive carousel
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1023, min: 771 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 770, min: 0 },
        items: 1
    }
};

//Adding Carousel Items
const carousel = (props) => {
    let data = props.featuredCars
    let carouselItems = data.map((data) => {
        return (
            <CarCard
                key={data.id}
                tracksToggled={props.tracksToggled}
                car={data} />)
    })

    return (
        <div>
            <header className={styles.header}>{props.brand}<hr /></header>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={4000}
            >
                {carouselItems}
            </Carousel>
        </div>
    )
}


export default carousel