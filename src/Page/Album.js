import React from 'react'
import Allphoto from '../Component/Allphoto'

const Album = () => {
  return (
    <div className='w-full'> 
    <div className='w-90 m-auto '>
        <p className='lg:text-2xl py-5 xsm:text-xl  '> ছবি ও অ্যালবাম</p>
        <div className='w-full flex gap-5 xsm:flex-wrap justify-between lg:flex-nowrap  '>
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
