import * as actionTypes from './actionTypes'
import axios from 'axios'




const setCarList = (data) => {
    return {
        type: actionTypes.setCarList,
        data: data
    }
}
export const getCarList = () => {

    return dispatch => {
        axios.get('https://rental-project-96fe5-default-rtdb.europe-west1.firebasedatabase.app/cars.json')
            .then(res => {
                dispatch(setCarList(res.data))
            }).catch(err => {
                console.log("error on api call get car list");
            })
    }

}
