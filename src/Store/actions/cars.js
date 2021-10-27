import * as actionTypes from './actionTypes'
import axios from '../../axios/axios-data'




const setCarList = (data) => {
    return {
        type: actionTypes.setCarList,
        data: data
    }
}
export const getCarList = () => {

    return dispatch => {
        axios.get('cars.json')
            .then(res => {
                console.log(res.data.result, " cars list");
                dispatch(setCarList(res.data.result))
            }).catch(err => {
                console.log("error on api call get car list");
            })
    }

}
