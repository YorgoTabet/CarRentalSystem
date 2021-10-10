import Carousel from './Components/Carousel/Carousel';
import 'react-multi-carousel/lib/styles.css';

import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/NavBar/Navbar';
import { useState } from 'react';

import db from "./db.json"

function App() {

  const [toggleTracks, setToggleTracks] = useState({ toggleTracksOn: true })
  const [featuredCars] = useState({ featuredCars: [...db.cars] })
  console.log(featuredCars.featuredCars);
  return (
    <div className={styles.App} >
      <Navbar
        tracksToggled={toggleTracks.toggleTracksOn}
        setToggleTracks={setToggleTracks} />
      <Carousel
        tracksToggled={toggleTracks.toggleTracksOn}
        cars={featuredCars.featuredCars}></Carousel>
    </div>
  );
}

export default App;
