import React, { useEffect } from 'react'

import styles from './MainPage.module.css'
import CarList from './CarList/CarList'

import { connect } from 'react-redux'
import * as actions from '../../Store/actions/index'


const MainPage = (props) => {
    const { getCarInfo } = props
    useEffect(() => {
        getCarInfo()
    }, [getCarInfo])


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
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCarInfo: () => dispatch(actions.getCarList())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(MainPage)