import * as actionTypes from '../actions/actionTypes'
let initialState = {
    email: null,
    username: null,
    token: null,
    isLoggingIn: false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.isLoggingIn:
            return {
                ...state,
                isLoggingIn: true
            }
        case actionTypes.notLoggingIn:
            return {
                ...state,
                isLoggingIn: false
            }
        default:
            return state

    }

}

export default authReducer