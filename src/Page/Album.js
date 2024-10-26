import React from 'react'
import Allphoto from '../Component/Allphoto'

const Album = () => {
  return (
    <div className='w-full'> 
    <div className='w-90 m-auto '>
        <p className='text-2xl py-5 '> ছবি ও অ্যালবাম</p>
        <div className='w-full flex gap-5 flex-wrap justify-between'>
            <Allphoto/>
            <Allphoto/>
            <Allphoto/>
            <Allphoto/>

        </div>
      
    </div>
    </div>
  )
}

export default Album
