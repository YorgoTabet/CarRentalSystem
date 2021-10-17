import React, { useState } from 'react'
import db from '../../db.json'
import styles from './CarInfo.module.css'

const CarInfo = (props) => {

    const [car, setCar] = useState(db.cars.find(x => { return x.id === parseInt(props.match.params.id) }))
    console.log(car);

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
                            <li>Bla bala bal</li>
                            <li>Bla bala bal</li>
                            <li>Bla bala bal</li>
                        </ul>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )

}
export default CarInfo