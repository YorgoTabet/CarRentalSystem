import React, { useEffect } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { connect } from 'react-redux'
import * as actions from '../../Store/actions/index'

import styles from './Auth.module.css'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

const Auth = (props) => {

    useEffect(() => {
        //dipatch userisloggingin to Hide the navigation items that shouldn't be seen
        props.onLoadPage();
        return () => {
            props.onLeavePage()
        }
    }, [])

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

    //Formik sign up form
    let form =
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
                    <ErrorMessage component='div' className={styles.ErrorMessage} name="email" />

                    <Field name="username" type="text" placeholder='Username' />
                    <ErrorMessage component='div' className={styles.ErrorMessage} name="username" />

                    <Field name="password" type="password" placeholder='password' />
                    <ErrorMessage component='div' className={styles.ErrorMessage} name="password" />

                    <Field name="confirmPass" type="password" placeholder='Confirm password' />
                    <ErrorMessage component='div' className={styles.ErrorMessage} name="confirmPass" />

                    <button type="submit" className={styles.loginBtn}>{'Sign Up'}</button>
                    <p>Already a member?</p><Link to="/login" >Log in</Link>
                </Form>
            </div>
        </Formik >

    return (
        <div>
            {props.error ? <span className={styles.ErrorMessage}>Sign up failed... Try again</span> : null}
            {props.isAuth ? <Redirect to="/" /> : form}
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.token !== null,
        error: state.auth.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onLoadPage: () => dispatch(actions.isLoggingIn()),
        onLeavePage: () => dispatch(actions.notLoggingIn()),
        signUp: (info) => dispatch(actions.signUp(info)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)