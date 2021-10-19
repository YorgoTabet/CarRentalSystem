import React from 'react'
import { connect } from 'react-redux'

import Carousel from '../../Components/Carousel/Carousel'
import styles from './MainPage.module.css'


const mainPage = (props) => {




    console.log(props.state);
    return (
        <div className={styles.container + ' container'}>
            <Carousel
                tracksToggled={props.toggleTracks}
            ></Carousel>
        </div>

    )

}

const mapStateToProps = (state) => {
    return {
        state: state.username
    }
}



export default connect(mapStateToProps)(mainPage)