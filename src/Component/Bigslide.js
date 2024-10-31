import React from 'react'

const Bigslide = ({deta}) => {
  return (
    <div className='w-full relative '>
        <div className='w-full h-[32vw] bg-zinc-600  flex items-center justify-center '>
            <p className='lg:text-5xl text-center xsm:text-3xl'>ছবি</p>

        </div>

      <div className='w-full h-auto py-5  absolute  bottom-0 '>
        <h1 className='text-center lg:text-2xl xsm:text-lg'>{deta.title}</h1>

        </div>
    </div>
  )
}

export default Bigslide
