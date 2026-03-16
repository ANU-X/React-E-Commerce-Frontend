import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import axios from 'axios'
import toast from 'react-hot-toast'


const Login = () => {
  const [password, setPassword] = useState(false)  
  const [user, setUser] = useState({email: '', password: ''})

    const navigete = useNavigate()

  const loginput = (e)=>{
    setUser({...user, [e.target.name]: e.target.value })
  }

  const loginUser =async (e)=>{
    e.preventDefault()
    try {
      const res =await axios.post('http://localhost:3000/api/user/login', user)
      if(res.data.error){
        toast.error(res.data.message)
      }

      if(res.data){
        toast.success(res.data.message || 'login succssfull')
      }
      setUser({email: '', password: ''})

      setTimeout(() =>navigete('/cart'), 2000);

    } catch (error) {
      toast.error(error.response?.data?.message || 'user not register')
    }
  }

  return (
    <div className='Login'>
      <form onSubmit={loginUser} action="" className='login-form'>
        <h1> Login </h1>
        <div className='pass'>
        <label htmlFor="email">Enter Your Email :</label>
        <input 
        type="email"
        name='email'
        id='email'
        onChange={loginput}
        value={user.email}
        placeholder='enter email' 
        required/>
        </div>
        <div className='pass'>
          <label htmlFor="password">Enter Password :</label>
          <input 
          type={password ? 'text' : 'password'}
          name='password'
          id='password'
          onChange={loginput}
          value={user.password}
          placeholder='password'/>
          <div onClick={()=>setPassword(prev => !prev)} className='eye_icon'>
            {password ? <FaEye/> : <FaEyeSlash/>}
          </div>
        </div>

        <div className='check'>
          <input type="checkbox" />
          <Link className='check_link'>Condition</Link>
        </div>

        <button type='submit' className='login_button' >Login</button>

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
