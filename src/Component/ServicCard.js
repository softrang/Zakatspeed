import React from 'react'
import { GiCow } from "react-icons/gi";

const ServicCard = () => {
  return (
    <div className='w-3/12 flex flex-col items-center justify-center py-4  shadow-inner shadow-indigo-600 rounded-xl'>
        <div className='text-5xl'><GiCow />  </div>
        <p className='text-xl'>Cow Loan</p>
        <p className='text-lg w-10/12 text-center'>A cow loan provides livestock financing for farmers to boost productivity.</p>
      <p className='px-4 py-2 bg-indigo-500 text-white rounded-xl  mt-5'> Read more</p>
    </div>
  )
}

export default ServicCard
