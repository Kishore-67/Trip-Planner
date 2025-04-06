import React from 'react'
import './Login.css'
import  { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { RiLockPasswordFill } from "react-icons/ri";
import { SignUp } from './SignUp';
export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const newUser = { username, password };
  
      try {
        const response = await fetch('https://expense-tracker-1-cn2a.onrender.com/adds', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        });
  
        if (response.ok) {
          console.log('User added successfully');
        } else {
          console.error('Failed to add user');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
  return (
<div className='parent'>
    
    <div className='wrapper'>
        <form action=" ">
            <h1>Login</h1>
        <div className="input-box">
            <input type="text"  placeholder="Username"  value={username} onChange={(e) => setUsername(e.target.value)} required/>
            <FaRegUser className='icon' />
        </div>

        <div className="input-box">
        <input type="text"  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <RiLockPasswordFill className='icon' />
        </div>

        <div className="remember-forgot">
            <label><input type ="checkbox"/>Remember me</label>
           
        </div>

            <Link to={'/'}><div className='but-container'><button type="submit" onClick={handleSubmit}>Login</button></div></Link>

        <div className="register-link">
            <p>Don't have an account??  <div><Link to={"/signup"}>Register</Link></div></p>
        </div>

        </form>
        </div>
        </div>
  )
}

       