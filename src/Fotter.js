import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Fotter = () => {
  return (
    <> 
    <div className='w-full bg-zinc-800'> 
    <div className='w-90 m-auto flex  text-white  py-5'>
        <div className='w-3/12'>
        <p className='text-5xl text-center mb-5 uppercase'> zakatspeed</p>


        <div className='w-full flex gap-5 justify-center items-center'> 
            <div className='  text-3xl'><FaFacebookF /> </div>
            <div className='  text-3xl'><FaYoutube /> </div>
            <div className='  text-3xl'><FaLinkedin /> </div>
            <div className='  text-3xl'><FaTwitter /> </div>
        </div>
        
         </div>
        <div className='w-3/12 '>
        <p className='text-2xl mb-5'> Zakat Network</p>
        <ul className='text-base  leading-7'>
            <li> Zakat Calculation</li>
            <li>Zakat Book </li>
            <li>Zakat Fund </li>
            <li>Donor Network </li>
            <li>Recipient Network </li>
        </ul>
         </div>
        <div className='w-3/12'>
        <p className='text-2xl mb-5'> Islamic Products</p>
        <ul className='text-base leading-7'>
            <li> Qard al-Hasan</li>
            <li>Islamic Bank </li>
            <li>Islamic Insurance </li>
            <li>Sukuk Bond </li>
            
        </ul>
         </div>
        <div className='w-3/12'>
        <p className='text-2xl mb-5'> Approval/Services</p>
        <ul className='text-base leading-7'>
            <li> Zakat Collection</li>
            <li>Distribution </li>
            <li>Research Cell </li>
            <li>Financial System </li>
            <li>Institutional Activities </li>
            
        </ul>
        
         </div>
        
      
    </div>
    </div>
    <div className='w-full bg-zinc-800 border-t-2 border-zinc-700'> 
    <div className='w-90 m-auto text-center  text-white  '>
        <p className='py-5 '>zakatspeed@Copyright2024 Allrihgt are reacived</p>

    </div>
    </div>
    </>
    
  )
}

export default Fotter
