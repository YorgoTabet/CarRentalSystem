import React, { useState, useEffect } from 'react'
import styles from './CarInfo.module.css'
import { connect } from 'react-redux'

const CarInfo = (props) => {
    // 
    const [car, setCar] = useState(null)
    const [loading, setloading] = useState(true)
    useEffect(() => {
        console.log(props.cars, props.match.params.id);
        setCar(props.cars.find(x => x._id === props.match.params.id))
        setloading(false)
    }, [props.cars, props.match.params.id])


    return (
        <React.Fragment >
            {loading ? <h1>Loading... </h1> :
                <div className={styles.container + ' container'}>
                    <img className={styles.img + ' img-fluid'} src={car.image} alt={car.description} />
                    <div className={styles.info + " justify-conent-start"}>
                        <h1 className={styles.name}>{car.title}</h1>
                        <p className={styles.description}>{car.description}</p>
                        <div className={styles.details}>
                            <h5>Details</h5>
                            <ul>
                                <li>Number of Rentals: {car.numberOfRentals}</li>
                            </ul>
                        </div>

                    </div>
                </div>}
        </React.Fragment>
    )

}

const mapPropsToState = (state) => {
    return {
        cars: state.cars.carList
    }
}

export default connect(mapPropsToState)(CarInfo)