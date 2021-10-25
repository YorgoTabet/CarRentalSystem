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
import * as actions from './Store/actions/index'
import Login from './Containers/Auth/Login';
import Signup from './Containers/Auth/Signup';


function App(props) {

  const [toggleTracks, setToggleTracks] = useState(true)


  //Helper function to toggle state
  const switchTracks = () => {
    console.log('Switching Tracks')
    setToggleTracks(prevState => {
      return !prevState
    })
  }

  return (
    <div className={styles.App} >
      <Navbar
        tracksToggled={toggleTracks}
        setToggleTracks={switchTracks}
        isAuth={props.isAuth}
        isLoggingIn={props.isLoggingIn}
        logout={props.onLogout}
        email={props.email} />
      <Switch>

        <Route path="/" exact render={() => <MainPage toggleTracks={toggleTracks} />} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/car/:id" exact component={CarInfo} />
      </Switch>


    </div >
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
    isLoggingIn: state.auth.isLoggingIn,
    email: state.auth.email
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
