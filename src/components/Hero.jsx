import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import img from '../assets/istockphoto-1494453251-1024x1024.jpg'

export default function Hero() {
  return (
    <>
      <div className='mx-6'>
        <div className=' flex justify-around mt-11  flex-1'>
          <div className=''>
            <div id='text' className='text-8xl mb-6 font-bold align-middle justify-center'>
              CUSTOM GPT <br /> FOR YOUR <br /> STUDY NEEDS
            </div>
            <span className='text-gray-700 mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iste nulla<br />  vitae repellendus beatae deleniti suscipit rerum velit, sequi corporis laborum,<br />  .</span>
            <button type="button" className="text-white  ml-7 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:    ring-gray-700 dark:border-gray-700 capitalize">
              <div className='flex p-1 align-middle gap-2'>TRY NOW <FaArrowRight className='m-auto align-middle justify-center' /></div>
            </button>
          </div>
          <div>
            <img id='img' src={img} className='rounded-lgf h-[400px]' />
          </div>
        </div>

      </div>
    </>
  )
}
