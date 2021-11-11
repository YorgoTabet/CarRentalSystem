import React from "react"
import { Link } from 'react-router-dom'
import styles from './UserControl.module.css'
import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react";
import Backdrop from "../UI/Backdrop";
import classNames from 'classnames'


const UserControl = (props) => {

    const [menuToggle, setMenuToggle] = useState(false)

    const switchMenu = () => {
        setMenuToggle((prevState) => {
            return !prevState
        })
    }
    const promptLogout = () => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Click OK to confirm logout')) {
            props.logout()
        }
    }

    return (
        props.isAuth ?
            <div>
                <button className='btn btn-light' onClick={switchMenu} ><PersonIcon /></button>

                <div className={styles.Menu} style={{ display: menuToggle ? 'block' : 'none' }}>
                    <Backdrop click={switchMenu} />
                    <p>{props.email}</p>
                    <hr />
                    <button className={classNames('btnLogout ', styles.logout)} onClick={promptLogout}>Logout</button>
                </div>
            </div >
            :

            <div>
                <button className='btn btn-light' onClick={switchMenu} ><PersonIcon /></button>
                <div className={styles.Menu} style={{ display: menuToggle ? 'block' : 'none' }}>
                    <Backdrop click={switchMenu} />
                    <Link className={styles.btn} to='/login'>Login</Link>
                    <Link className={styles.btn} to='/signup'>Signup</Link>
                </div>
            </div >

    )
}
export default UserControl