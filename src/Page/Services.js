import React from 'react'
import ServicCard from '../Component/ServicCard'
import { useDeta } from '../Context/ShareDeta'

const Services = () => {
  const {service} = useDeta()
  return (
    <div className='w-full'> 
    <div className='w-90 m-auto py-5'>
        <p className='lg:text-2xl py-5 xsm:text-xl  '>আমাদের সেবা সমূহ</p>
        <div className='w-full flex justify-between gap-5 xsm:flex-wrap lg:flex-nowrap '> 
          {service.map((items, index)=>(
            <ServicCard deta={items} key={index}/>
          ))}
         
         

        </div>
      
    </div>
    </div>
  )
}

export default Services
