import React from 'react'
import './sign-in-and-sign-up.style.scss'
import SignIn from '../../components/Sign-In/Sign-In.component'
import SignUp from '../../components/sign-up/sign-up.component'


const SignInAndSignUpPage = () => (
    <div className='sign-in-sign-up'>
    <SignIn />
    <SignUp />
    </div>
)

export default SignInAndSignUpPage