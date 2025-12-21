import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";


const Login = () => {
  const [openeye, setOpen] = useState(false)

  const OpenHandle = ()=>{
    setOpen(!openeye)
  }


  return (
    <div className='Login'>
      <form action="" className='login-form'>
        <h1> Login </h1>
        <input type="email" placeholder='enter email' required/>
        <div className='pass'>
          <input type={openeye ? 'password': 'text'} placeholder='password'/>
          <div onClick={OpenHandle} className='eye_icon'>
            {openeye ? <FaEyeSlash/> : <FaEye/>}
          </div>
        </div>

        <div className='check'>
          <input type="checkbox" />
          <Link className='check_link'>Condition</Link>
        </div>

        <button className='login_button'>Login</button>
        <p>Lorem ipsum dolor, sit amet . Veritatis, laborum.</p>
        <div className='Log-Reg'>
          <p>Don't have a account:</p>
        <Link to='/register'>Register</Link>
        </div>
      </form>
    </div>
  )
}

export default Login
