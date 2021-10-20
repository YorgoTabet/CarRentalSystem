import React, { useState } from 'react'
import db from '../../db.json'
import styles from './CarInfo.module.css'

const CarInfo = (props) => {

    const [car] = useState(db.cars.find(x => { return x.id === parseInt(props.match.params.id) }))
    // "price": 12.3,
    // "downpayment": 200,
    // "seats": 4,
    // "gasConsumption": 4,
    // "comfort": 9
    return (
        <React.Fragment >
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
            </div>
        </React.Fragment>
    )

}
export default CarInfo