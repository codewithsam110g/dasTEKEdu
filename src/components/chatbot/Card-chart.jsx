import React from 'react'
import { GiBulletBill } from "react-icons/gi";


export default function Cardchart({ url, title, desc }) {
  return (
    <div id='text' className=' shadow-2xl  border border-x-black m-2 rounded-xl grid sm:flex  mb-10'>
      <div><img src={url} className=' w-[450px] s sm:w-[600px] h-auto rounded-lg ' /></div>
      <div className='flex items-center justify-between'>
        <div className='text-center'>
        <div className='mb-6'>
        <h1 className='text-2xl m-4 mb-0 font-semibold italic underline'>{title}</h1>
          <p className="text-gray-400 m-2" >Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
          <ul>
            <li className='flex  items-center justify-center gap-2 ml-4 m-2'><GiBulletBill />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. m-2 Consequatur, assumenda!</li>
            <li className='flex  items-center justify-center gap-2 ml-4 m-2'><GiBulletBill />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. m-2 Consequatur, assumenda!</li>
            <li className='flex  items-center justify-center gap-2 ml-4 m-2'><GiBulletBill />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. m-2 Consequatur, assumenda!</li>
            <li className='flex  items-center justify-center gap-2 ml-4 m-2'><GiBulletBill />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. m-2 Consequatur, assumenda!</li>
           
          </ul>
          <button className='mx-6 bg-gray-700 rounded-md text-xl italic p-2 m-3'>Chat now </button>
        </div>
      </div>

    </div>

  )
}
