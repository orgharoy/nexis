import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../../../Styles/auth-modes.css';

function Login() {
  const navigate = useNavigate();

    const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(errorHandler(formData.password) === true){
      window.alert("The password must be 8 characters or more")
    } else {
      try {

        let res = await fetch("https://test.nexisltd.com/login",{
          method: "POST",
          body: JSON.stringify(formData)
        })
        let data = await res.json();

        if (res.status === 200) {
          localStorage.setItem('token', data.refresh_token);
          navigate('/nexis')
        } else {
          console.log(data);
        }

      } catch (error) {
        console.log(error);
      }
    }
  }

  const errorHandler = (password) => {
    if(password.length < 8){
      return true;
    }
  }

  return (
    <div className='login'>
        <form className='login-form' action="" method="POST">
          <div className="auth-contents">
            <div className="group">
              <input className="text" type="text" required value={formData.email}  onChange={(e)=> setFormData({...formData, email:e.target.value}) } />
              <span class="bar"></span>
              <label>Write Email Address</label>
            </div>

            <div className="group">
              <input className="text" type="password" required value={formData.password} onChange={(e)=> setFormData({...formData, password:e.target.value}) }/>
              <span class="bar"></span>
              <label>Write Password</label>
              <p className='small-text'>Your password must be 8 character</p>
            </div>
          </div>

          <button className="button" onClick={handleSubmit}>Log In </button>
        </form>
    </div>
  )
}

export default Login;