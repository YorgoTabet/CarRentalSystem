import React from "react"
import db from '../../../../db.json'
import classes from './List.module.css'

const List = (props) => {

    let listOfCars = db.listOfCars
    let searchedList = []

    if (props.search) {
        console.log('[LIST]: search key:', props.search);
        searchedList = listOfCars.filter(x => {
            return x.brand === props.search

        })
    } else {
        searchedList = listOfCars.slice(0)
    }
    return (
        <p>{searchedList.map(x => {
            return (
                <div className={classes.item}>
                    <img src={x.url} style={{ height: '30px', width: '30px' }} alt={x.name} />
                    <p> {x.name} <em><sub> {x.brand}</sub></em></p>

                </div>
            )
        })}</p>
    )
}

export default List
