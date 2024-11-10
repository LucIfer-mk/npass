import React from 'react'
import './login.css'
export default function login() {
  return (
    <div>
      <div className='Login-Page'>
            <input type='text' placeholder='User Name' className='login-text'/><br/>
            <input type='password' placeholder='Password' className='login-text'/>
        </div>
    </div>
  )
}
