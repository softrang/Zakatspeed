import React from 'react'
import { FaDonate } from "react-icons/fa";

const Reqdonetion = () => {
  return (
    <div className='w-3/12  flex items-center justify-center flex-col  shadow-inner shadow-green-600 py-4 rounded-xl'>
        <div className=' text-4xl mb-3'><FaDonate /> </div>
        <p className='text-center text-xl'> Donate Generously</p>
        <p className='text-lg w-10/12 text-center'>Donate generously to support important causes and make a positive impact. </p>
   <p className='px-4 py-3 bg-green-600 rounded-xl mt-5 text-white'> Read More</p>
    </div>
  )
}

export default Reqdonetion
