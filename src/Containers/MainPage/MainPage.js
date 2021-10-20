import React from 'react'
import { connect } from 'react-redux'

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

const mapStateToProps = (state) => {
    return {
        state: state.username
    }
}



export default connect(mapStateToProps)(mainPage)