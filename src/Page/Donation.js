import React from 'react'
import Reqdonetion from '../Component/Reqdonetion'
import { useDeta } from '../Context/ShareDeta'

const Donation = () => {
  const {donate} =useDeta();
  return (
    <div className='w-full'>
    <div className='w-90 m-auto py-5'>
        <p className='lg:text-2xl py-5 xsm:text-xl'>অনুদান, তহবিল এবং হিসাব ব্যবস্থাপনা </p>
        <div className='w-full flex justify-between gap-5 xsm:flex-wrap lg:flex-nowrap '> 
           {donate.map((items, index)=>(
            <Reqdonetion deta1 ={items } key={index}/>
           ))}
           
          

        </div>
      
    </div>
    </div>
  )
}

export default Donation
