import React from 'react'
import './SignUp.css'
import { CiMail } from "react-icons/ci";
import  { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

export const SignUp = () => {
    const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmits = async (event) => {
    event.preventDefault();

    // Create a user object
    const newUser = {
      firstName,
      lastName,
      username,
      email,
      password
    };

    try {
      // Send a POST request to your backend server
      const response = await fetch('https://expense-tracker-1-cn2a.onrender.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      });

      if (response.ok) {
        // User successfully created
        console.log('User created successfully');
      } else {
        // Failed to create user
        console.error('Failed to create user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
    
  return (
    <div className='parent'>
    <div className='Signup'>
        <form action=" ">
            <h1>SignUp</h1>

            <div className="input-box">
            <input type="text"  placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
            <FaRegUser className='icon' />
            </div>

            <div className="input-box">
            <input type="text"  placeholder="Last Name"  value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
            <FaRegUser className='icon' />
             </div>

        <div className="input-box">
            <input type="text"  placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
            <FaRegUser className='icon' />
        </div>

        <div className="input-box">
            <input type="text"  placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <CiMail className='icon' />
        </div>
        <div className="input-box">
        <input type="text"  placeholder=" Create Password" value={password} onChange={(e) => setPassword(e.target.value)}  required/>
        <RiLockPasswordFill className='icon' />
        </div>
        <Link to={'/'} ><div className='but-container'>
        <button type="submit" onClick={handleSubmits}>Sign In</button>
        </div></Link>
        <div className="register-link">
            <p>Already have an account? <div><Link to={'/Login'} >Login</Link></div></p>
        </div>

        </form>
        </div>
        </div>
  )
}

       