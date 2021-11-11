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

    localStorage.setItem('token', null)
    localStorage.setItem('validUntil', null)
    localStorage.setItem('email', null)

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
    return dispatch => {

        const body = {
            email: info.email,
            password: info.password,
            returnSecureToken: true
        }
        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAV2X-TOL6EeQyILWaVVQGtAbDS4VIj1gs`, body)
            .then(res => {
                // turn ms in date from now
                const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000)
                localStorage.setItem('token', res.data.idToken)
                localStorage.setItem('validUntil', expirationDate)
                localStorage.setItem('email', res.data.email)
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
export const autologin = () => {
    return dispatch => {
        if (localStorage.getItem('token') !== null) {
            let token = localStorage.getItem('token');
            let expirationDate = new Date(localStorage.getItem('validUntil')).getTime()
            let email = localStorage.getItem('email');
            if (expirationDate > 0) {
                const body = {
                    idToken: token,
                    email
                }
                dispatch(AuthenticateSignIn(body))
                dispatch(timeOutLogout((expirationDate - new Date().getTime()) / 1000))
            } else {
                dispatch(logout())
            }
        }
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