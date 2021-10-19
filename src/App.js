import 'react-multi-carousel/lib/styles.css';
import { Route, Switch } from 'react-router';

import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { connect } from 'react-redux'

import CarInfo from './Containers/CarInfo/CarInfo';
import MainPage from './Containers/MainPage/MainPage';
import Navbar from './Components/NavBar/Navbar';
import Auth from './Containers/Auth/Auth'
import { logout } from './Store/actions/actionTypes';
import * as actions from './Store/actions/index'


function App(props) {

  const [toggleTracks, setToggleTracks] = useState({ toggleTracksOn: true })


  //Helper function to toggle state
  const switchTracks = () => {
    console.log('Switching Tracks')
    setToggleTracks(prevState => ({
      toggleTracksOn: !prevState.toggleTracksOn
    }))
  }

  return (
    <div className={styles.App} >
      <Navbar
        tracksToggled={toggleTracks.toggleTracksOn}
        setToggleTracks={switchTracks}
        isAuth={props.isAuth}
        isLoggingIn={props.isLoggingIn}
        logout={props.onLogout} />
      <Switch>

        <Route path="/" exact render={() => <MainPage toggleTracks={toggleTracks.toggleTracksOn} />} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/car/:id" exact component={CarInfo} />
      </Switch>


    </div >
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.token !== null,
    isLoggingIn: state.isLoggingIn
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
