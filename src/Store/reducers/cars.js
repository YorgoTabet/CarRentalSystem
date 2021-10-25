import * as actionTypes from '../actions/actionTypes'
let initialState = {
    carList: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.setCarList:
            return {
                ...state,
                carList: action.data
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer