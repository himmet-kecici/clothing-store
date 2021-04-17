import React, { useState } from 'react';
import { connect } from 'react-redux'
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'
import './sign-in.styles.scss'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' })
    const { email, password } = userCredentials

    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStart(email, password)
    }

    const handleChange = event => {
        const { value, name } = event.target

        setUserCredentials({ ...userCredentials, [name]: value })

    }
    return (

        <div className='sign-in'>

            <h2>i already have an account</h2>
            <span> Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={email}
                    label="email"
                    required />


                <FormInput
                    name='password'
                    type='password'
                    handleChange={handleChange}
                    value={password}
                    label='password'
                    required />

                <div className='buttons'>
                    <CustomButton type='submit' >Sign in </CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn> with google</CustomButton>
                </div>

            </form>
        </div>

    )

}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)