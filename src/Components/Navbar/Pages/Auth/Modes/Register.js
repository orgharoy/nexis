import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../../../Styles/auth-modes.css';
import RegisterContact from './RegisterPages/RegisterContact';
import RegisterName from './RegisterPages/RegisterName';
import RegisterPassword from './RegisterPages/RegisterPassword';


function Register(click) {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    first_name: "",
    last_Name: "",
    phone_number: "",
    email: "",
    password: ""
  });

  const nextPage = () => {
    setPage((page) => page + 1);
  }

  useEffect(()=>{
      click.click(page);
  }, [page])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(errorHandler(formData.password) === true){
      window.alert("The password must be 8 characters or more")
    } else {
      try {
        let res = await fetch("https://test.nexisltd.com/signup",{
          method: "POST",
          body: JSON.stringify(formData)
        })
        
        let data = await res.json();

        if (res.status === 200) {
          console.log('successfully created account')

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

  const FormDisplay = () => {
    if(page === 0){
      return(<RegisterName formData={formData} setFormData={setFormData} />)
    } else if(page === 1){
      return(<RegisterContact formData={formData} setFormData={setFormData} />)
    } else if (page === 2) {
      return (<RegisterPassword formData={formData} setFormData={setFormData} />)
    } else {
      return (<h1>There was an Error {page}</h1>)
    }
  };
  
  const RegisterButtons = () => {
    if(page=== 0 || page===1){
      return(
          <button
            className='button' 
            disabled={page === 2}
            onClick={nextPage}>
              Next Step 
              <svg width="16" viewBox="0 0 17 15" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.7071 8.20711C17.0976 7.81658 17.0976 7.18342 16.7071 6.79289L10.3431 0.428933C9.95262 0.0384087 9.31946 0.0384086 8.92893 0.428933C8.53841 0.819457 8.53841 1.45262 8.92893 1.84315L14.5858 7.5L8.92893 13.1569C8.53841 13.5474 8.53841 14.1805 8.92893 14.5711C9.31946 14.9616 9.95262 14.9616 10.3431 14.5711L16.7071 8.20711ZM-8.74228e-08 8.5L16 8.5L16 6.5L8.74228e-08 6.5L-8.74228e-08 8.5Z"/>
              </svg>

          </button>
      )
    } else if (page=== 2){
      return(
        <button
          className='button' 
          onClick={handleSubmit}>
            Sign Up
        </button>
      )
    } else {
      return(
        <button className='button'> Something got fucked</button>
      )
    }
  };

  const BackButton = () => {
    if(page===0){
      return (
        <div className="backButtonDiv"></div>
      );
    }
    else if(page=== 1 || page=== 2){
      return(
        <div className="backButtonDiv">
          <p
          className='backButton'
          onClick={()=>{
            setPage((page) => page - 1);
          }}>Back</p>
        </div>
      )
    } else {
      return(
        <div className="backButtonDiv">
          <p>Fuckity Fuck</p>
        </div>
      )
    }
  }

  return (
    <div>
        <div className="auth-contents">
          {FormDisplay()}
        </div>

        <div className="buttons">
          {BackButton()}
          {RegisterButtons()}
          <div></div>
        </div>
    </div>
  )
}

export default Register;