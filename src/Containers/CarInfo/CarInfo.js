import React, { useState } from 'react'
import db from '../../db.json'
import styles from './CarInfo.module.css'

const CarInfo = (props) => {

    const [car, setCar] = useState(db.cars.find(x => { return x.id === parseInt(props.match.params.id) }))
    console.log(car);
    return (
        <React.Fragment>
            <img src={car.url} alt={car.id} />
            <h1>{car.name}</h1>
            <p>{car.description}</p>

        </React.Fragment>
    )

}
export default CarInfo