import React from 'react'
import { connect } from 'react-redux'

import Carousel from '../../Components/Carousel/Carousel'
import styles from './MainPage.module.css'
import db from '../../db.json'
import CarList from './CarList/CarList'


const mainPage = (props) => {


    let listOfCars = db.listOfCars;




    console.log(props.state);
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