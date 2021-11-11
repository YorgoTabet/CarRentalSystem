import React, { useEffect } from 'react'

import styles from './MainPage.module.css'
import CarList from './CarList/CarList'
import { useCallback } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../Store/actions/index'

import classNames from 'classnames'


const MainPage = (props) => {
    const dispatch = useDispatch()

    const carList = useSelector(state => state.cars.carList)
    const getCarInfo = useCallback(
        () => {
            dispatch(actions.getCarList())
        },
        [dispatch],
    )

    useEffect(() => {
        getCarInfo()
    }, [getCarInfo])


    return (
        <div className={classNames(styles.container, ' container')}>
            <CarList
                tracksToggled={props.toggleTracks}
                carList={carList} />
        </div>

    )
}

export default MainPage