import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <>
     <div className='my-10 justify-center items-center grid '>
        <h1 className='font-bold text-3xl h-10'>Get started for free </h1>
        <br />
        <form>
          <div className='gap-2'>
            <span className='font-semibold my-2'>Email</span>
            <br />
            <input
              id='email'
              className='my-2 w-80 border border-gray-500 p-1 rounded-lg'
              placeholder='   Enter email address'
              type='email'
            />
          </div>
          <div className='gap-2'>
            <span className='font-semibold my-2'>Password</span>
            <br />
            <input
              id='password'
              className='my-2 w-80 border border-gray-500 p-1 rounded-lg'
              placeholder='  Enter your password'
              type='password'
            />
          </div>
          <button
            type='button'
            className='uppercase text-white bg-black rounded-lg w-80 p-3 my-7'
          >
            Sign UP
          </button>
          <p>
            Already have an account?{' '}
            <Link className='underline font-semibold' to='/login'>
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  )
}
