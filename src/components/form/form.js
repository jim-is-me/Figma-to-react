import React from 'react'
import user from './user.svg';

const Form = () => {
  return (
    <div className='fiverrform'>
      <div className='formcontainer'>
        <h4>Register</h4>
        <p className='formdetails'>Use your credentials to login into account</p>
        <div className='username'>
          <img src={user} alt="img"/>
          <input type='text' placeholder='Full name'/>
        </div>
        <input type='text' />
        <input type='text' />
        <input type='text' />
        <button>Register</button>
      </div>
    </div>
  )
}

export default Form
