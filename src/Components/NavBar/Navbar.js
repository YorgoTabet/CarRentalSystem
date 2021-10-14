import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import { Container } from "react-bootstrap";
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import styles from './NavBar.module.css'
import logo from '../../assets/logo.svg'


const navbar = (props) => {

    // Checking if button is pressed or not
    let eyeIconStatus = () => {
        if (props.tracksToggled)
            return (
                <RemoveRedEyeRoundedIcon />
            )
        else return (
                <VisibilityOffRoundedIcon />
        )
    }

    return (
        <div>
            <br />
            <Navbar  variant="dark" className={styles.navbar}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="100"
                            height="100"
                            className="d-inline-block align-middle"
                        />{' '}
                        <span className="h2">Car Rental</span>
                    </Navbar.Brand>
                    <button
                        className='btn btn-light'
                        onClick={props.setToggleTracks}>
                        {eyeIconStatus()}
                    </button>
                </Container>

            </Navbar>
        </div>
    )
}

export default navbar