import React from 'react'
import classes from './Modal.module.css'
import logo from '../../assets/logo.svg'

const Modal = (props) => {
    return (
        <div className={classes.modal}>
            <img src={logo} className={classes.logo} />
            {props.children}
        </div>
    )
}

export default Modal