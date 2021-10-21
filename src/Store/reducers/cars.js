import * as actionTypes from '../actions/actionTypes'
let initialState = {
    carList: [],
    featuredCars: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.setFeaturedcars:
            return {
                ...state,
                featuredCars: action.data
            }
        case actionTypes.setCarList:
            return {
                ...state,
                carList: action.data
            }
        default:
            return {
                ...initialState
            }
    }
}

export default reducer