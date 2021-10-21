import React, { useState, useEffect } from 'react'
import db from '../../db.json'
import styles from './CarInfo.module.css'
import axios from 'axios'

const CarInfo = (props) => {
    // 
    const [car, setCar] = useState(db.cars.find(x => { return x.id === parseInt(props.match.params.id) }))
    const [loading, setloading] = useState(true)
    useEffect(() => {
        axios.get(`https://rental-project-96fe5-default-rtdb.europe-west1.firebasedatabase.app/cars.json?orderBy="id"&equalTo=${props.match.params.id}`)
            .then(res => {
                let elementKey = Object.keys(res.data)[0]
                setloading(false)
                setCar(res.data[elementKey])
            }).catch(err => {
                alert("there was an error")
                props.history.push('/')
            })
    }, [])


    return (
        <React.Fragment >
            {loading ? <h1>Loading... </h1> :
                <div className={styles.container + ' container'}>
                    <img className={styles.img + ' img-fluid'} src={car.url} alt={car.id} />
                    <div className={styles.info + "justify-conent-start"}>
                        <h1 className={styles.name}>{car.name}</h1>
                        <p className={styles.description}>{car.description}</p>
                        <div className={styles.details}>
                            <h5>Details</h5>
                            <ul>
                                <li>Price: {car.details.price}/Day</li>
                                <li>Down Payment: {car.details.downpayment}$</li>
                                <li>Seats: {car.details.seats}</li>
                                <li>Consumption: {car.details.gasConsumption}/10</li>
                                <li>Comformt: {car.details.comfort}/10</li>
                            </ul>
                        </div>

                    </div>
                </div>}
        </React.Fragment>
    )

}



export default CarInfo