import React from 'react'
import Carousel from '../Carousel/Carousel'

const mainPage = (props) => {


    return (
        <Carousel
            tracksToggled={props.toggleTracks}
        ></Carousel>
    )

}
export default mainPage