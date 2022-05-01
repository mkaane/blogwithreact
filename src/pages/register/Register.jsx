import React from 'react'
import "./register.css"

export default function Register() {
  return (
    <div className='register'>
        <span className="registerTitle">Login</span>
        <form className='registerForm'>
            <label>Email</label>
            <input type="text" className="registerInput" placeholder='Enter your email' />
            <label>Password</label>
            <input type="password" className='registerInput' placeholder='Enter your password' />
            <button className='registerButton'>Register</button>
        </form>
        <button className='registerLoginButton'>Login</button>
    </div>
  )
}
