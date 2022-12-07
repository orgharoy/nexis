import React, {useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import '../../../Styles/Info.css';

function Info() {
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchItems();
  }, [])

  const fetchItems = async () => {
    const data = await fetch('https://test.nexisltd.com/test',{

      headers: {"Authorization": 'Bearer' + localStorage.getItem('token')}
    })
    if(data){
      console.log(data); 
    } else {
      console.log('no data')
    }
  }
  if(token === null){
    return <Navigate to="/auth" />
  }else{
    return (
      <div className='info-container'>
        <div className="info-header">
          <h1 className='info-title'>Attendance Information</h1>
        </div>
        <div className="info-table">
          <table className='info-table'>
            <tr>
              <th>Date</th>
              <th>Employee Name</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>Shows Cors Error</td>
              <td>Shows Cors Error</td>
              <td>Shows Cors Error</td>
            </tr>
            <tr>
              <td>Shows Cors Error</td>
              <td>Shows Cors Error</td>
              <td>Shows Cors Error</td>
            </tr>
            <tr>
              <td>Shows Cors Error</td>
              <td>Shows Cors Error</td>
              <td>Shows Cors Error</td>
            </tr>
          </table>
        </div>
      </div>
    )
  }

}

export default Info;