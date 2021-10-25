import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { connect } from 'react-redux'
import * as actions from '../../Store/actions/index'

import styles from './Auth.module.css'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

const Login = (props) => {

    useEffect(() => {
        //dipatch userisloggingin to Hide the navigation items that shouldn't be seen
        props.onLoadPage();
        return () => {
            props.onLeavePage()
        }
    }, [])

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
                    <p>New here?</p><Link to='/signup'>Sign up</Link>
                </Form>

            </div>

        }
    </Formik >)


    return (
        <div>
            {props.error ? <span className={styles.ErrorMessage}>Something went wrong... Retry!</span> : null}
            {props.isAuth ? <Redirect to="/" /> : form}
        </div>
    )

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
        signIn: (info) => dispatch(actions.signIn(info)),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
