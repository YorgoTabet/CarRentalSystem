import * as actionTypes from './actionTypes'
import axios from 'axios'


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

export const AuthenticateSignIn = (info) => {

    return {
        type: actionTypes.AuthenticateSignIn,
        info: info
    }
}

export const logout = () => {

    return {
        type: actionTypes.logout
    }
}

export const timeOutLogout = (time) => {

    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000)
    }
}
export const failedAuth = () => {

    return {
        type: actionTypes.failedAuth,
    }
}

export const signIn = (info) => {
    const body = {
        email: info.email,
        password: info.password,
        returnSecureToken: true
    }
    return dispatch => {
        console.log(process.env.REACT_APP_API_KEY, "ENV")
        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAV2X-TOL6EeQyILWaVVQGtAbDS4VIj1gs`, body)
            .then(res => {
                dispatch(AuthenticateSignIn(res.data))
                dispatch(timeOutLogout(res.data.expiresIn))
            })
            .catch(err => {
                dispatch(failedAuth(err))
            })
    }
}
export const signUp = (info) => {
    const body = {
        email: info.email,
        password: info.password,
        returnSecureToken: true
    }
    return dispatch => {
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAV2X-TOL6EeQyILWaVVQGtAbDS4VIj1gs', body)
            .then(res => {
                dispatch(timeOutLogout(res.data.expiresIn))
                dispatch(AuthenticateSignIn(res.data))

            })
            .catch(err => dispatch(failedAuth()))
    }

}
export const hideUi = () => {
    return dispatch => {
        dispatch(isLoggingIn())
    }
}
export const showUi = () => {
    return dispatch => {
        dispatch(notLoggingIn())
    }
}