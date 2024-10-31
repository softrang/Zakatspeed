import React from 'react'


const Reqdonetion = ({deta1}) => {
 
  return (
    <div className='xsm:w-full lsm:w-5/12 lg:w-3/12  flex  items-center justify-center flex-col  shadow-inner shadow-green-600 py-4 rounded-xl'>
        <div className=' text-4xl mb-3'>{deta1.icon1}</div>
        <p className='text-center text-xl mb-4'> {deta1.title1}</p>
        <p className='text-base w-11/12 text-center'>{deta1.dic1} </p>
   <p className='px-4 py-3 bg-green-600 rounded-xl mt-5 text-white'> আরও পড়ুন </p>
    </div>
  )
}

export default Reqdonetion
