import React from 'react'
import Publicopni from '../Component/Publicopni'
import { useDeta } from '../Context/ShareDeta'

const PublicOp = () => {
  const {opnion} =useDeta()
  return (
    <div className='w-full py-5'>
    <div className='w-90 m-auto  flex '>
        <div className='w-4/12  pr-5 '>
        <p className='text-xl  py-5'> আপনার মতামত দিন</p>
        <form>
            <label className='block text-lg'>নাম</label>
            <input className='w-full h-[35px] bg-transparent border-2 border-violet-400 pl-5 rounded-lg text-lg outline-0  ' type='text' placeholder='আপনার নাম লিখুন' required/> 
            <label className='block text-lg'>ই-মেইল</label>
            <input className='w-full h-[35px] bg-transparent border-2 border-violet-400 pl-5 rounded-lg text-lg outline-0  ' type='email' placeholder='আপনার ই-মেইল লিখুন' required/> 
            <label className='block text-lg'>আপনার মতামত</label>
            <textarea className='w-full h-[150px] bg-transparent border-2 border-violet-400 pl-5 rounded-lg text-lg outline-0 resize-none  ' type='text' placeholder='আপনার মতামত লিখুন' required/> 
            <button className='px-4 py-2 bg-violet-700 text-white rounded-xl' type='submit'> প্রেরণ</button>
            </form>
        
        </div>
        <div className='w-8/12  pl-5'>
        <p className='text-2xl py-5 '>জনগণের মতামতের তালিকা</p>
       {opnion.map((items)=>(
        <Publicopni deta2 ={items}/>
       ))}
      
       
        <button className='px-4 py-2 bg-violet-700 text-white rounded-xl' > view all</button>
    
        
        
        </div>
      
    </div>
    </div>
  )
}

export default PublicOp
