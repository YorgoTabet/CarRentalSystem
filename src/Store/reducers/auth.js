import * as actionTypes from '../actions/actionTypes'
let initialState = {
    email: null,
    token: null,
    isLoggingIn: false,
    error: false
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
        case actionTypes.AuthenticateSignIn:
            return {
                ...state,
                email: action.info.email,
                token: action.info.idToken,
                error: false
            }
        case actionTypes.logout:
            return {
                ...state,
                email: null,
                token: null,
                error: false
            }
        case actionTypes.failedAuth:
            return {
                ...state,
                email: null,
                token: null,
                error: true
            }
        default:
            return state

    }

}

export default authReducer