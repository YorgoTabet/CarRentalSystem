import * as actionTypes from './actionTypes'


export const isLoggingIn = () => {
    return {
        type: actionTypes.isLoggingIn
    }
}

export const notLoggingIn = () => {
    return {
        type: actionTypes.notLoggingIn
    }
}