import React from 'react';
import '../../../../../../Styles/auth-modes.css';

const RegisterName = ({formData, setFormData}) => {
  return (
    <div>
        <div className="group">
            <input className="text" type="text" value={formData.first_name} required onChange={(e)=> setFormData({...formData, first_name: e.target.value}) }/>
            <span class="bar"></span>
            <label>Write First Name</label>
          </div>

          <div className="group">
            <input className="text" type="text" value={formData.last_Name} required  onChange={(e)=> setFormData({...formData, last_Name: e.target.value}) } />
            <span class="bar"></span>
            <label>Write Last Name</label>
          </div>
    </div>
  )
}

export default RegisterName;