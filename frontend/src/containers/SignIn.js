import React, {useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {login} from '../actions/auth'

const SignIn = ({login, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const { email, password} = formData

    const onChange = (e) => setFormData({
        ...formData,
        [e.target.name]: e.target.value 
    })

    const onSubmit = e => {
        e.preventDefault()

        login(email, password)
    }

    if (isAuthenticated)
        return <Redirect to="/" />
    
    return (
        <div className="auth">
            <Helmet>
            <title>this is the login page</title>
                <meta name='description'
                    content='login page'
                />
            </Helmet>
            <h1 className="auth__title">Sign In</h1>
            <p className="auth_lead">Sign in with your account</p>
            <form className="auth__form" onSubmit={e => onSubmit(e)}>
                <div className="auth__form__group">
                    <input 
                        type="email" 
                        placeholder="email" 
                        value={email} 
                        className="auth__form__input" 
                        onChange={e=>onChange(e)} />
                </div>
                <div className="auth__form__group">
                    <input 
                        type="password" 
                        placeholder="password" 
                        value={password} 
                        className="auth__form__input" 
                        onChange={e=>onChange(e)} />
                </div>
                <button className="auth_form_button">Sign in</button>
            </form>
            <p className="auth_authtext">
                Don't have an account? <Link to="/signup" className="auth__authtext_link">Sign Up</Link>
            </p>

        </div>
    )
}

SignIn.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login})(SignIn)