import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

  return (
    <div>
        <Header />
        <div className="absolute">  
            <img src ="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg" 
            alt="Background Image" />
        </ div>
        <form className="w-1/3 absolute p-12 bg-black my-52 mx-auto right-0 left-0 bg-opacity-70">
            <h1 className="font-bold text-3xl py-4 text-white m-2">
                {isSignInForm? "Sign In" : "Sign Up"}
            </h1>

            {!isSignInForm && (
            <input 
                type="text" 
                placeholder="Name" 
                className="p-2 m-2 w-full bg-gray-700 text-white"/>
            )}

            <input 
                type="text"
                placeholder="Email or phone number" 
                className="p-2 m-2 w-full bg-gray-700 text-white"/>

            <input 
                type="password" 
                placeholder="Password" 
                className="p-2 m-2 w-full bg-gray-700 text-white"/>

            <button 
                className="p-2 m-2 bg-red-600 text-white w-full rounded-lg">
                    Sign In
            </button>
            
            <p className="text-white m-2" onClick={toggleSignInForm}> 
                {isSignInForm? "New to OTT-GPT? Sign Up" : "Already registered? Sign In"} Now
            </p>
        </form>
    </div>
  )
}

export default Login