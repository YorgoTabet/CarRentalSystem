import Carousel from './Components/Carousel/Carousel';
import 'react-multi-carousel/lib/styles.css';
import { Route, Switch } from 'react-router';

import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/NavBar/Navbar';
import MainPage from './Components/MainPage/MainPage';
import { useState } from 'react';
import CarInfo from './Containers/CarInfo/CarInfo';


function App() {

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
        setToggleTracks={switchTracks} />
      <Switch>
        <Route path="/" exact render={() => <MainPage toggleTracks={toggleTracks.toggleTracksOn} />} />
        <Route path="/car/:id" exact component={CarInfo} />
      </Switch>


    </div >
  );
}

export default App;
