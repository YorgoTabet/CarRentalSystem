import React, { useState, useEffect } from 'react'
import Control from './Control/Control'
import Carousel from '../../../Components/Carousel/Carousel'



const CarList = (props) => {
    const [searchKey, setsearchKey] = useState(null)
    const [brands, setbrands] = useState([])
    const [filteredBrands, setFilteredBrands] = useState([])

    useEffect(() => {
        //getting the different brands in an array in state
        let differentBrands = []
        props.carList.forEach(x => {
            console.log(x.brand);
            if (!differentBrands.includes(x.brand)) {
                differentBrands.push(x.brand)
            }
        });
        setbrands(differentBrands);
    }, [props.carList])

    useEffect(() => {
        //setting a filtered array of what brands to show
        if (searchKey) {
            setFilteredBrands(brands.filter(brand => brand === searchKey))
        } else {
            setFilteredBrands(brands)
        }
    }, [searchKey, brands])

    const changeKey = (key) => {
        setsearchKey(key)
    }

    return (
        <div>
            <Control carList={props.carList} changeKey={changeKey} />
            {/* //loop on brands and pass a filtered arrray to each one to display
            // you can also pass a search key to either show it or not */}
            {
                filteredBrands && filteredBrands.map((x) => {
                    return <Carousel
                        key={x}
                        brand={x}
                        tracksToggled={props.tracksToggled}
                        featuredCars={props.carList.filter(car => car.brand === x && car.brand)}
                    />
                })
            }
        </div >
    )

}


export default CarList