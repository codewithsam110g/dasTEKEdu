import React from 'react'
import { Link } from 'react-router-dom'

export default function LogIn() {
  return (
    <>
    <div className=' my-10 justify-center items-center grid  '>
            <h1 className='font-bold text-3xl h-10'>Login to you Account</h1><br/>
            <form >
                <div className='gap-2'>
                    <span className='font-semibold my-2'>Email</span><br/>
                    <input id='email'  className='my-2 w-80 border border-gray-500 p-1 rounded-lg' placeholder='   Enter email address' type='email'/>
                </div>
                <div className='gap-2'>
                    <span className='font-semibold my-2'>password</span><br/>
                    <input id='password' className='my-2 w-80 border border-gray-500 p-1 rounded-lg' placeholder='  Enter your password' type=' password'/>
                </div>
                <button  className=' uppercase text-white bg-black rounded-lg w-80 p-3 my-7'>Login</button>
                <p>Dont have an account? <Link className=' underline font-semibold' to = '/signup'>SignUp</Link></p>
            </form>
        </div>
    </>
  )
}
