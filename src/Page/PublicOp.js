import React from 'react'
import Publicopni from '../Component/Publicopni'

const PublicOp = () => {
  return (
    <div className='w-full py-5'>
    <div className='w-90 m-auto  flex '>
        <div className='w-4/12  pr-5 '>
        <p className='text-xl  py-5'> Give your Opinion</p>
        <form>
            <label className='block text-lg'>Name</label>
            <input className='w-full h-[35px] bg-transparent border-2 border-violet-400 pl-5 rounded-lg text-lg outline-0  ' type='text' placeholder='Enter Your Name' required/> 
            <label className='block text-lg'>E-mail</label>
            <input className='w-full h-[35px] bg-transparent border-2 border-violet-400 pl-5 rounded-lg text-lg outline-0  ' type='email' placeholder='Enter Your E-mail' required/> 
            <label className='block text-lg'>Messeage</label>
            <textarea className='w-full h-[150px] bg-transparent border-2 border-violet-400 pl-5 rounded-lg text-lg outline-0 resize-none  ' type='text' placeholder='Enter Your Messeage' required/> 
            <button className='px-4 py-2 bg-violet-700 text-white rounded-xl' type='submit'> Submit</button>
            </form>
        
        </div>
        <div className='w-8/12  pl-5'>
        <p className='text-2xl py-5 '>Public Opinion List</p>
        <Publicopni/>
        <Publicopni/>
        <Publicopni/>
        <button className='px-4 py-2 bg-violet-700 text-white rounded-xl' > view all</button>
    
        
        
        </div>
      
    </div>
    </div>
  )
}

export default PublicOp
