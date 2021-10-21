import React from "react"
import classes from './List.module.css'

const List = (props) => {

    let listOfCars = props.carList
    let searchedList = []

    if (props.search) {
        searchedList = listOfCars.filter(x => {
            return x.brand === props.search

        })
    } else {
        searchedList = listOfCars.slice(0)
    }
    return (
        <div className={classes.container}>
            {searchedList.map(x => {
                return (
                    <div className={classes.item} key={x.brand + x.name} >
                        <img src={x.url} className={classes.image} alt={x.name} />
                        <p className={classes.name}> {x.name} <em><sub> {x.brand}</sub></em></p>
                    </div>
                )
            })}</div >
    )
}

export default List
