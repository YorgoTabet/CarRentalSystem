import 'react-multi-carousel/lib/styles.css';
import { Redirect, Route, Switch } from 'react-router';

import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import CarInfo from './Containers/CarInfo/CarInfo';
import MainPage from './Containers/MainPage/MainPage';
import Navbar from './Components/NavBar/Navbar';
import * as actions from './Store/actions/index'
import Login from './Containers/Auth/Login';
import Signup from './Containers/Auth/Signup';


function App(props) {

  const [toggleTracks, setToggleTracks] = useState(true)

  const isAuth = useSelector(state => state.auth.token !== null)
  const isLoggingIn = useSelector(state => state.auth.isLoggingIn)
  const email = useSelector(state => state.auth.email)

  const dispatch = useDispatch()
  const onLogout = () => {
    dispatch(actions.logout())
  }

  //Helper function to toggle state
  const switchTracks = () => {
    console.log('Switching Tracks')
    setToggleTracks(prevState => {
      return !prevState
    })
  }
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div className={styles.App} >

      <Navbar
        tracksToggled={toggleTracks}
        setToggleTracks={switchTracks}
        isAuth={isAuth}
        isLoggingIn={isLoggingIn}
        logout={onLogout}
        email={email} />
      <Switch>
        <Route path="/" exact render={() => <MainPage toggleTracks={toggleTracks} />} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/car/:id" exact component={CarInfo} />
        <Redirect from="/car" to='/' />
        <Redirect to='/' />
      </Switch>


    </div>
  );
}


export default App;
