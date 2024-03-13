import React from 'react'
import './Login.css'
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { RiLockPasswordFill } from "react-icons/ri";
import { SignUp } from './SignUp';
export const LoginForm = () => {
  return (
<div className='parent'>
    
    <div className='wrapper'>
        <form action=" ">
            <h1>Login</h1>
        <div className="input-box">
            <input type="text"  placeholder="Username" required/>
            <FaRegUser className='icon' />
        </div>

        <div className="input-box">
        <input type="text"  placeholder="Password" required/>
        <RiLockPasswordFill className='icon' />
        </div>

        <div className="remember-forgot">
            <label><input type ="checkbox"/>Remember me</label>
            <a href='#'>Forgot password?</a>
        </div>

            <Link to={'/'}><button type="submit">Login</button></Link>

        <div className="register-link">
            <p>Don't have an account??  on <div><Link to={"/signup"}>Register</Link></div></p>
        </div>

        </form>
        </div>
        </div>
  )
}

       