import React from 'react'
import Carousel from '../../Components/Carousel/Carousel'
import styles from './MainPage.module.css'

const mainPage = (props) => {


    return (
        <div className={styles.container + ' container'}>
            <Carousel
                tracksToggled={props.toggleTracks}
            ></Carousel>
        </div>

    )

}
export default mainPage