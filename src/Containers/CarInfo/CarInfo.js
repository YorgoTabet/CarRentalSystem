import React, { useState, useEffect } from 'react'
import styles from './CarInfo.module.css'
import { connect } from 'react-redux'
import axios from '../../axios/axios-data'

import History from '../History/History'

const CarInfo = (props) => {

    const [car, setCar] = useState({})
    const [loading, setloading] = useState(true)
    useEffect(() => {
        // setCar(props.cars.find(x => x._id === props.match.params.id))
        //send request to firebase to get car by id
        console.log(props.match.params.id);
        axios.get(`cars/result.json?orderBy="_id"&equalTo="${props.match.params.id}"`)
            .then(req => {
                console.log(req.data)
                let currentCar = req.data[Object.keys(req.data)[0]]
                console.log(currentCar);
                setCar(currentCar)
                setloading(false)

            })
            .catch(err => {
                props.history.push('/')
            })

        setloading(false)
    }, [props.history, props.match.params.id])


    return (

        <div className={styles.main} >
            {loading ? <h1>Loading... </h1> :
                <div className={styles.container + ' container'}>
                    <img className={styles.img + ' img-fluid'} src={car.image} alt={car.description} />
                    <div className={styles.info + " justify-content-start"}>
                        <h1 className={styles.name}>{car.title}</h1>
                        <p className={styles.description}>{car.description}</p>
                        <div className={styles.details}>
                            <h5>Details</h5>
                            <ul>
                                <li>Number of Rentals: {car.numberOfRentals}</li>
                            </ul>
                        </div>
                        {/* history component just pass the car ID */}
                        <History carHistory={{ ...car.history }} />
                    </div>
                </div>}
        </div>
    )

}

const mapPropsToState = (state) => {
    return {
        cars: state.cars.carList
    }
}

export default connect(mapPropsToState)(CarInfo)