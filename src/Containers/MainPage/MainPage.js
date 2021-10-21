import React, { useEffect } from 'react'

import Carousel from '../../Components/Carousel/Carousel'
import styles from './MainPage.module.css'
import CarList from './CarList/CarList'


const mainPage = (props) => {



    return (
        <div className={styles.container + ' container'}>
            <Carousel
                tracksToggled={props.toggleTracks}
            ></Carousel>
            <CarList />
        </div>

    )
}





export default mainPage