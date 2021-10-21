import React, { useState } from 'react'
import Control from './Control/Control'
import List from './List/List'



const CarList = (props) => {
    const [searchKey, setsearchKey] = useState(null)




    const changeKey = (key) => {
        setsearchKey(key)
    }

    return (
        // control
        <div>
            <Control carList={props.carList} changeKey={changeKey} />
            <List carList={props.carList} search={searchKey} />
        </div>

    )

}


export default CarList