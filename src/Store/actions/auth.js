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
export const failedAuth = (err) => {

    return {
        type: actionTypes.failedAuth,
        err: err
    }
}

export const signIn = (info) => {
    const body = {
        email: info.email,
        password: info.password,
        returnSecureToken: true
    }
    return dispatch => {
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAV2X-TOL6EeQyILWaVVQGtAbDS4VIj1gs', body)
            .then(res => {
                console.log('sucessful', res.data)
                dispatch(AuthenticateSignIn(res.data))
                dispatch(timeOutLogout(res.data.expiresIn))
            })
            .catch(err => {
                dispatch(failedAuth(err))
                console.log(err);
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
                console.log('Signed up sucessfully', res)
                dispatch(timeOutLogout(res.data.expiresIn))
                dispatch(AuthenticateSignIn(res.data))

            })
            .catch(err => dispatch(failedAuth(err)))
    }

}