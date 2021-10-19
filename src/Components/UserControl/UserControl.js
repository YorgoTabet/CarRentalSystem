import React from "react"
import { Link } from 'react-router-dom'

const UserControl = (props) => {


    return (
        props.isAuth ? <button onClick={props.logout}>Logout</button> : <div><button><Link to='/auth'>Login</Link></button></div>

    )
}
export default UserControl