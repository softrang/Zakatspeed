import React from 'react'
import News from './Component/News'
import Logo from './image/logo.png'

const Header = () => {
  return (
    <> 
   
    <News/>
   
    <div className='w-full bg-zinc-50 text-zinc-900 py-3 '> 
    
    <div className='w-90 flex   m-auto '>
    <div className='w-2/12 h-[50px]'> <img className='h-full' src={Logo} alt='logo'/> </div>
    <div className='w-10/12 flex   items-center justify-end uppercase'>
      {["হোম", "সেবা সমূহ", "ব্যবস্থাপনা", "আমাদের সমন্ধে", "যোগাযোগ" , "রেজিস্ট্রেশন" , "লগিন"].map((item, index) => (
        <span key={index} className={`text-xl  py-2 px-4 ${index===5? `ml-[8%]`:``}`}>{item}</span>
      ))}
    </div>
  </div>
  </div>
  </>
  )
}

export default Header
