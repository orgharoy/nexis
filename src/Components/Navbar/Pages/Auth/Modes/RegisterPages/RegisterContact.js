import React from 'react';
import '../../../../../../Styles/auth-modes.css';

const RegisterContact = ({formData, setFormData}) => {
  return (
    <div>
      <div className="phone-group">
        <div className="group fixed">
          <p className="fixed-label">+880</p>
        </div>
        <div className="group">
          <input className="text" type="text" value={formData.phone_number} required onChange={(e)=> setFormData({...formData, phone_number:e.target.value}) } />
          <span class="bar"></span>
          <label>1xxxxxxxxx</label>
        </div>
      </div>

      <div className="group">
        <input className="text" type="email" value={formData.email} required onChange={(e)=> setFormData({...formData, email:e.target.value}) } />
        <span class="bar"></span>
        <label>Write Email Address</label>
      </div>
</div>
  )
}

export default RegisterContact;