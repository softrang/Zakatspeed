import React from 'react'
import Reqdonetion from '../Component/Reqdonetion'

const Donation = () => {
  return (
    <div className='w-full'>
    <div className='w-90 m-auto py-5'>
        <p className='text-2xl py-5'>Donation, Funds & Accounts </p>
        <div className='w-full flex gap-5 justify-around'> 
            <Reqdonetion/>
            <Reqdonetion/>
            <Reqdonetion/>
            <Reqdonetion/>

        </div>
      
    </div>
    </div>
  )
}

export default Donation
