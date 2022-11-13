import React from 'react'
import './SignInScreen.css'

function SignInScreen() {
  return (
    <div className='signin--screen'>
    <form>    
        <h1>Sign in</h1>
    <input placeholder='email' type='email' />
    <input placeholder='password' type='password' />
    <button type='submit'>Sign In</button>

    <h4 className='signup'>
      <span className='new--netflix'>New to Netflix?
        <a className='now' href=''>Sign Up Now</a>
        </span></h4>
    </form>
    </div>
  )
}

export default SignInScreen