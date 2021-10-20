import React from "react"
import { Link } from 'react-router-dom'
import styles from './UserControl.module.css'
import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react";


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
                    <p>{props.email}</p>
                    <hr />
                    <button className={'btnLogout ' + styles.logout} onClick={promptLogout}>Logout</button>
                </div>
            </div >
            :
            <div>
                <Link className="btn btn-light" to='/auth'>Login</Link>
            </div >

    )
}
export default UserControl