import React, { useState } from 'react'
import styles from './Control.module.css'
import FilterListIcon from '@mui/icons-material/FilterList';

const Control = (props) => {

    const [showBrands, setshowBrands] = useState(false)
    const [isFiltered, setIsFiltered] = useState(false)

    let toggleBrands = () => {
        setshowBrands((prevState) => {
            setshowBrands(!prevState)
        })
    }

    let MyBrands = () => {
        let differentBrands = []
        props.carList.forEach(x => {
            if (!differentBrands.includes(x.brand)) {
                differentBrands.push(x.brand)
            }
        });
        return (
            <div className={styles.container}>
                {differentBrands.sort().map((x) => {
                    return (
                        <div
                            key={x}
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
            <h1 className={styles.title}>Filter</h1>
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