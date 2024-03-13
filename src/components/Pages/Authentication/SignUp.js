import React from 'react'
import './SignUp.css'

import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
export const SignUp = () => {
  return (
    <div className='wrapper'>
        <form action=" ">
            <h1>SignUp</h1>

            <div className="input-box">
            <input type="text"  placeholder="First Name" required/>
            <FaRegUser className='icon' />
            </div>

            <div className="input-box">
            <input type="text"  placeholder="Last Name" required/>
            <FaRegUser className='icon' />
             </div>

        <div className="input-box">
            <input type="text"  placeholder="Username" required/>
            <FaRegUser className='icon' />
        </div>

        <div className="input-box">
            <input type="text"  placeholder="Email" required/>
            <FaRegUser className='icon' />
        </div>

        <div className="input-box">
        <input type="text"  placeholder=" Create Password" required/>
        <RiLockPasswordFill className='icon' />
        </div>

        <button type="submit">Sign In</button>

        <div className="register-link">
            <p>Already have an account? <div><Link to={'/Login'} >Login</Link></div></p>
        </div>

        </form>
        </div>
  )
}

       