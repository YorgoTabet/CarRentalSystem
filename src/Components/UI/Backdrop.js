import React from "react"
import styles from './Backdrop.module.css'

const Backdrop = (props) => {
    return <div className={styles.backDrop} onClick={props.click} />

}
export default Backdrop