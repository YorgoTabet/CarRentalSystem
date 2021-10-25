import React, { useEffect } from 'react'

import styles from './MainPage.module.css'
import CarList from './CarList/CarList'

import { connect } from 'react-redux'
import * as actions from '../../Store/actions/index'


const MainPage = (props) => {

    useEffect(() => {
        props.getCarInfo()
    }, [])


    return (
        <div className={styles.container + ' container'}>
            <CarList
                tracksToggled={props.toggleTracks}
                carList={props.carList} />
        </div>

    )
}


const mapStateToProps = (state) => {
    return {
        carList: state.cars.carList,
        featuredCars: state.cars.featuredCars
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCarInfo: () => dispatch(actions.getAllCarInfo())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(MainPage)