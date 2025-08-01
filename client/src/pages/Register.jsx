import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import registerimg from '../assets/register.webp'

const Register = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [name, setName]= useState('');
    function handleSubmit (e){
        e.preventDefault();
        console.log("User Registered:",{name,email,password});
        
    }
    return (
    <div className='flex'>
        <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12'>
            <form onSubmit={handleSubmit} className='w-full max-w-md bg-white p-8 rounded-lg border shadow-sm'>
                <h2 className='text-xl font-medium text-center mb-6'>Rabbit</h2>
                <h2 className='text-2xl font-bold text-center mb-6'>Hey there!👋🏼.</h2>
                <p className='text-center mb-6'>
                    Enter your name, email and password to Register a new account.
                </p>

                <div className='mb-4'>
                    <label className='block font-semibold mb-2'>Name</label>
                    <input  value={name} onChange={(e)=>setName(e.target.value)}
                            className='w-full p-2 border rounded'
                            placeholder='Enter your name or username'/>
                </div>

                <div className='mb-4'>
                    <label className='block font-semibold mb-2'>Email</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}
                            className='w-full p-2 border rounded'
                            placeholder='Enter your email address'/>
                </div>

                <div className='mb-4'>
                    <label className='block font-semibold mb-2'>Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
                            className='w-full p-2 border rounded'
                            placeholder='Enter your password'/>
                </div>

                <button type='submit' className='w-full bg-black text-white p-2 hover:bg-gray-600 rounded-lg font-semibold transition'>
                    Sign Up
                </button>
                <p className='mt-6 text-center text-sm'>
                    You have an account alredy? <Link to="/login" className='text-blue-500'>Login</Link>
                </p>
                
            </form>
        </div>

        <div className='hidden md:block w-1/2 bg-gray-800'>
            <div className='flex flex-col h-full justify-center items-center'>
                <img src={registerimg} alt="login img" className='h-[750px] w-full object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default Register
