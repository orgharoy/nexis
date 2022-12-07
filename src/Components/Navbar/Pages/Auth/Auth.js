import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

import Login from './Modes/Login';
import Register from './Modes/Register';

import image from '../../../../Images/image.png';
import '../../../../Styles/auth.css';

function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const [showBot, setShowBot] = useState(true);

  const token = localStorage.getItem('token');

  const click = (n) => {
    if(n !== 0){
      setShowBot(false);
    } else {
      setShowBot(true);
    }
  }

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  if(token !== null){
    return <Navigate to="/nexis/" />
  }else{
    return (
      <div className='auth'>
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="auth-components">
          <h1 className='heading'>{ isSignup ? 'SignUp Form' : 'Log in Form'}</h1>
          <div className="modes">
            {
              isSignup ? <Register click={click} /> : <Login />
            }
          </div>
          {
            showBot ? 
              <div className="switcher">
                {
                  isSignup ? 
                    <p className='small-text'>Already have an account? <span onClick={switchMode}>LOGIN HERE!</span></p>
                  :
                    <p className='small-text'>Don't have an account? <span onClick={switchMode}>SIGNUP HERE!</span></p>
                }
              </div>
            : 
            <div className="switcher"></div>
          }
        </div>
      </div> 
    )
  }
}

export default Auth;