import React from 'react'
import ServicCard from '../Component/ServicCard'

const Services = () => {
  return (
    <div className='w-full'> 
    <div className='w-90 m-auto py-5'>
        <p className='text-2xl py-5 '>Our services </p>
        <div className='w-full flex gap-5 '> 
          <ServicCard/>
          <ServicCard/>
          <ServicCard/>
          <ServicCard/>

        </div>
      
    </div>
    </div>
  )
}

export default Services
