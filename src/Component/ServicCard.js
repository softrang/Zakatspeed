import React from 'react'


const ServicCard = ({deta}) => {
 
  return (
    <div className='w-3/12 flex flex-col items-center justify-center py-4  shadow-inner shadow-indigo-600 rounded-xl'>
        <div className='text-5xl'>{deta.icon} </div>
        <p className='text-xl mb-4'>{deta.title}</p>
        <p className='text-base w-11/12 text-center'>{deta.dic}</p>
      <p className='px-4 py-2 bg-indigo-500 text-white rounded-xl  mt-5'> আরও পড়ুন</p>
    </div>
  )
}

export default ServicCard
