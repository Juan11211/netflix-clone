import React, {useState} from 'react'
import './LoginScreen.css'
import SignInScreen from './SignInScreen'


export default function LoginScreen() {
    const [signIn, setSignIn] = useState(false)


  return (
    <div className='login--screen'>
        <div className='background--image'>
            <img className='loginscreen--logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='backg'/>
        </div>
            <button onClick={() => setSignIn(true)} className='login--button'>Login</button>

            <div className='loginscreen--gradient'></div>

            <div className='loginscreen--body'>
                {signIn ? (
                    <SignInScreen />
                ) : (
                    <>
                <h1>Unlimated films, Tv programs and more.</h1>
                <h2>Watch anywhere, Cancel anytime</h2>
                <h3>Ready to watch? 
                    Enter your email to create or 
                    restart your membership.</h3>
            
            <div className='login--form'>
                <form>
                    <input 
                        type='email'
                        placeholder='Email Address'  />
                    <button onClick={() => setSignIn(true)} className='get--started'>Get Started</button>
                </form>
            </div>
            </>
                )} 
            </div>
    </div>

  )
}
