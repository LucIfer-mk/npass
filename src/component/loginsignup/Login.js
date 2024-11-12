import React from 'react'
import './login.css'
export default function login() {
  return (
    <div>
        <div className='login-form'>
          <div className='login-box'>
            <input type='text' placeholder='Enter your Name'/>
            <input type='password' placeholder='Enter your Password'/>
          </div>
        </div>
    </div>
  )
}
