import React, { useEffect, useState } from 'react'
import db from '../../../../db.json'
import styles from './Control.module.css'
import FilterListIcon from '@mui/icons-material/FilterList';

const Control = (props) => {

    let listOfCars = db.listOfCars
    const [showBrands, setshowBrands] = useState(false)
    const [isFiltered, setIsFiltered] = useState(false)

    let toggleBrands = () => {
        setshowBrands((prevState) => {
            setshowBrands(!prevState)
        })
    }

    let MyBrands = () => {
        let differentBrands = []
        listOfCars.forEach(x => {
            if (!differentBrands.includes(x.brand)) {
                differentBrands.push(x.brand)
            }
        });
        return (
            <div className={styles.container}>
                {differentBrands.map((x) => {
                    return (
                        <div
                            onClick={() => {
                                props.changeKey(x);
                                setIsFiltered(true);
                                setshowBrands(false);
                            }}
                            className={styles.listItem}
                        >
                            {x}
                        </div>
                    )
                })
                }
            </div >

        )

    }

    return (
        <div className={styles.control}>
            <h1 className={styles.title}>Search</h1>
            <div className={styles.filter}>
                {isFiltered ?
                    <span
                        className={styles.filterClear}
                        onClick={() => {
                            props.changeKey(null);
                            setIsFiltered(false)
                        }}
                    >clear
                    </span>
                    : null}
                <FilterListIcon
                    fontSize='large' sx={{ color: 'white' }}
                    onClick={toggleBrands}
                    className={styles.filterLogo} />
                {showBrands ? <MyBrands /> : null}
            </div>
        </div >

    )
}

export default Control