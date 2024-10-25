import React from 'react'
import News from './Component/News'

const Header = () => {
  return (
    <> 
   
    <News/>
   
    <div className='w-full bg-zinc-50 text-zinc-900 '> 
    
    <div className='w-90 flex   m-auto '>
    <div className='w-2/12'> <p className='text-6xl uppercase '>zakatspeed</p></div>
    <div className='w-10/12 flex   items-center justify-end uppercase'>
      {["Home", "Services", "Management", "About", "Contact" , "SinUp" , "SinIn"].map((item, index) => (
        <span key={index} className={`text-xl  py-5 px-4 ${index===5? `ml-[10%]`:``}`}>{item}</span>
      ))}
    </div>
  </div>
  </div>
  </>
  )
}

export default Header
