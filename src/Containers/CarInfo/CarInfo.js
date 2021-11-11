import React, { useState, useEffect } from 'react'
import styles from './CarInfo.module.css'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import axios from '../../axios/axios-data'
import * as actions from '../../Store/actions/index'
import classNames from 'classnames'

import History from '../History/History'

const CarInfo = (props) => {

    const [car, setCar] = useState({})
    const [loading, setloading] = useState(true)
    const dispatch = useDispatch()

    const hideUi = useCallback(
        () => {
            dispatch(actions.hideUi())
        },
        [dispatch],
    )

    const showUi = useCallback(
        () => {
            dispatch(actions.showUi())
        },
        [dispatch],
    )



    useEffect(() => {
        hideUi()
        return () => {
            showUi()
        }
    }, [hideUi, showUi])

    useEffect(() => {
        axios.get(`cars/result.json?orderBy="_id"&equalTo="${props.match.params.id}"`)
            .then(req => {
                let currentCar = req.data[Object.keys(req.data)[0]]
                setCar(currentCar)
                setloading(false)

            })
            .catch(err => {
                props.history.push('/')
                setloading(false)
            })

        setloading(false)
    }, [props.history, props.match.params.id])


    return (

        <div className={styles.main} >
            {loading ? <h1>Loading... </h1> :
                <div className={classNames(styles.container, 'container')}>
                    <img className={classNames(styles.img, ' img-fluid')} src={car.image} alt={car.description} />
                    <div className={classNames(styles.info, " justify-content-start")}>
                        <h1 className={styles.name}>{car.title}</h1>
                        <p className={styles.description}>{car.description}</p>
                        <div className={styles.details}>
                            <h5>Details</h5>
                            <ul>
                                <li>Number of Rentals: {car.numberOfRentals}</li>
                            </ul>
                        </div>
                        <History carHistory={{ ...car.history }} />
                    </div>
                </div>}
        </div>
    )

}




export default CarInfo