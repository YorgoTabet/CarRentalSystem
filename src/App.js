import Carousel from './Components/Carousel/Carousel';
import 'react-multi-carousel/lib/styles.css';

import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/NavBar/Navbar';
import { useState } from 'react';


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
      <Carousel
        tracksToggled={toggleTracks.toggleTracksOn}
      ></Carousel>
    </div>
  );
}

export default App;
