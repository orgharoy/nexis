import React from 'react';

const RegisterPassword = ({formData, setFormData}) => {

  return (
    <div>
      <div className="group">
          <input className="text" type="password" value={formData.password} required onChange={(e)=> setFormData({...formData, password:e.target.value}) } />
          <span class="bar"></span>
          <label>Write Password</label>
          <p className='small-text'>Your password must be 8 character</p>
      </div>
    </div>
  )
}

export default RegisterPassword;