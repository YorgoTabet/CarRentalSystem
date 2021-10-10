import React from "react";
import CarCard from '../CarCard/CarCard'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


// Setting for responsive carousel
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 750 },
        items: 3
    },
    between: {
        breakpoint: { max: 750, min: 490 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 490, min: 0 },
        items: 1
    }
};

//Adding Carousel Items
const carousel = (props) => {
    let data = props.cars
    let carouselItems = data.map((data) => {
        return <CarCard
                 className="row"
                 key = {data.id}
                 tracksToggled={props.tracksToggled}
                 car={data} />
    })

    return (
        <div>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
            >
                {carouselItems}
            </Carousel>
        </div>
    )
}


export default carousel