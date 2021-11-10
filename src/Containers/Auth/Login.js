import React, { useEffect } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { useCallback } from 'react'
import * as actions from '../../Store/actions/index'

import styles from './Auth.module.css'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

const Login = (props) => {

    const isAuth = useSelector(state => state.auth.token !== null)
    const error = useSelector(state => state.auth.error)
    const dispatch = useDispatch()

    const onLoadPage = useCallback(() => {
        dispatch(actions.isLoggingIn())
    }, [dispatch])
    const onLeavePage = useCallback(() => {
        dispatch(actions.notLoggingIn())
    }, [dispatch])
    const signIn = useCallback((info) => {
        dispatch(actions.signIn(info))
    }, [dispatch])

    useEffect(() => {
        //dipatch userisloggingin to Hide the navigation items that shouldn't be seen
        onLoadPage();
        return () => {
            onLeavePage()
        }
    }, [onLoadPage, onLeavePage])

    //formik validation
    const validateLogin = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
        }
        if (!values.password) {
            errors.password = 'Required'
        } else if (values.password.length < 5) {
            errors.password = 'Invalid password'
        }
        return errors

    }

    //Formik log in form
    let form = (<Formik
        initialValues={{ email: '', password: '' }}
        validate={validateLogin}
        onSubmit={(values) => {
            const info = {
                email: values.email,
                password: values.password,
            }
            signIn(info)
        }}>
        {
            <div className={styles.page}>
                <Form className={styles.loginBox}>
                    <h3 className={styles.title}>Welcome Back!</h3>
                    <Field name="email" type="email" placeholder='Email' />
                    <ErrorMessage component='div' className={styles.ErrorMessage} name="email" />

                    <Field name="password" type="password" placeholder='password' />
                    <ErrorMessage component='div' className={styles.ErrorMessage} name="password" />

                    <button type="submit" className={styles.loginBtn}>Login</button>
                    <p>New here?</p><Link to='/signup'>Sign up</Link>
                </Form>

            </div>

        }
    </Formik>)


    return (
        <div>
            {error ? <span className={styles.ErrorMessage}>Invalid Credentials</span> : null}
            {isAuth ? <Redirect to="/" /> : form}
        </div>
    )

}




export default Login
