import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { connect } from 'react-redux'
import * as actions from '../../Store/actions/index'

import styles from './Auth.module.css'
import { Redirect } from 'react-router'

const Auth = (props) => {
    //state to check whether its log in or sign up form
    const [authMode, setAuthMode] = useState('login')

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
    const validateSignUp = values => {
        const errors = {};
        const passRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/g)
        if (!values.email) {
            errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
        }
        if (!values.password) {
            errors.password = 'Required'
        } else if (!passRegex.test(values.password)) {
            console.log(passRegex.test(values.password));
            errors.password = 'Password must contain 8-10 character, 1 uppercase, 1 number and a special character'
        }
        if (!values.username) {
            errors.username = 'Required'
        } else if (values.username.length < 5) {
            errors.username = 'must be at least 5 characters'
        }
        if (!values.confirmPass) {
            errors.confirmPass = 'Required'
        } else if (values.password !== values.confirmPass) {
            errors.confirmPass = 'Password does not match'
        }
        return errors

    }

    useEffect(() => {
        //dipatch userisloggingin to Hide the navigation items that shouldn't be seen
        props.onLoadPage();
        return () => {
            props.onLeavePage()
        }
    }, [])

    //usefull when changing from sign up to log in
    const activateSignUp = () => {
        setAuthMode((prevState) => {
            if (prevState === 'login') {
                return 'signup'
            } else {
                return 'login'
            }
        })
    }

    //Formik sign up form
    let formikSignUp =
        <Formik
            initialValues={{ email: '', username: '', password: '', confirmPass: '' }}
            validate={validateSignUp}
            onSubmit={(values) => {
                const info = {
                    email: values.email,
                    password: values.password,
                }
                props.signUp(info)
            }}>
            <div className={styles.page}>
                <Form className={styles.loginBox}>
                    <h3 className={styles.title}>Sign Up</h3>
                    <Field name="email" type="email" placeholder='Email' />
                    <ErrorMessage className={styles.ErrorMessage} name="email" />

                    <Field name="username" type="text" placeholder='Username' />
                    <ErrorMessage className={styles.ErrorMessage} name="username" />

                    <Field name="password" type="password" placeholder='password' />
                    <ErrorMessage className={styles.ErrorMessage} name="password" />

                    <Field name="confirmPass" type="password" placeholder='Confirm password' />
                    <ErrorMessage className={styles.ErrorMessage} name="confirmPass" />

                    <button type="submit" className={styles.loginBtn}>{'Sign Up'}</button>
                    <p>Already a member?</p><a href='#' onClick={activateSignUp}>Log in</a>
                </Form>
            </div>
        </Formik >

    //Formik log in form
    let form = (<Formik
        initialValues={{ email: '', password: '' }}
        validate={validateLogin}
        onSubmit={(values) => {
            const info = {
                email: values.email,
                password: values.password,
            }
            props.signIn(info)
        }}>
        {
            <div className={styles.page}>
                <Form className={styles.loginBox}>
                    <h3 className={styles.title}>Welcome Back!</h3>
                    <Field name="email" type="email" placeholder='Email' />
                    <ErrorMessage className={styles.ErrorMessage} name="email" />

                    <Field name="password" type="password" placeholder='password' />
                    <ErrorMessage className={styles.ErrorMessage} name="password" />

                    <button type="submit" className={styles.loginBtn}>Login</button>
                    <p>New here?</p><a href='#' onClick={activateSignUp}>Sign up</a>
                </Form>

            </div>

        }
    </Formik >)

    if (authMode === 'signup') {

        form = formikSignUp
    }

    return (
        <div>
            {props.error ? <span className={styles.ErrorMessage}>Something went wrong... Retry!</span> : null}
            {props.isAuth ? <Redirect to="/" /> : form}
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.token !== null,
        error: state.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onLoadPage: () => dispatch(actions.isLoggingIn()),
        onLeavePage: () => dispatch(actions.notLoggingIn()),
        signUp: (info) => dispatch(actions.signUp(info)),
        signIn: (info) => dispatch(actions.signIn(info)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)