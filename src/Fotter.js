import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import Logo from './image/logo.png'

const Fotter = () => {
  return (
    <> 
    <div className='w-full  bg-zinc-800 hidden'> 
    <div className='w-90 m-auto h-min flex  text-white py-5  '>
        <div className='w-3/12 text-center'>
        <img className='h-[120px] m-auto ' src={Logo} alt='logo'/> 


        <div className='w-full flex gap-5 justify-center items-center mt-7'> 
            <div className='  text-3xl'><FaFacebookF /> </div>
            <div className='  text-3xl'><FaYoutube /> </div>
            <div className='  text-3xl'><FaLinkedin /> </div>
            <div className='  text-3xl'><FaTwitter /> </div>
        </div>
        
         </div>
        <div className='w-3/12  px-5'>
        <p className='text-2xl mb-5'> যাকাত নেটওয়ার্ক </p>
        <ul className='text-base  leading-7'>
            <li> যাকাত হিসাব</li>
            <li>যাকাত বই </li>
            <li>যাকাত তহবিল </li>
            <li>দাতা নেটওয়ার্ক </li>
            <li>গ্রহিতা নেটওয়ার্ক </li>
        </ul>
         </div>
        <div className='w-3/12'>
        <p className='text-2xl mb-5'> ইসলামিক পণ্য </p>
        <ul className='text-base leading-7'>
            <li> কর্জে আল হাসনা</li>
            <li>ইসলামিক ব্যাংক </li>
            <li>ইসলামিক ইন্সুরেন্স  </li>
            <li>সুকুক বন্ড </li>
            
        </ul>
         </div>
        <div className='w-3/12 '>
        <p className='text-2xl mb-5'> সেবা সমূহ</p>
        <ul className='text-base leading-7'>
            <li> যাকাত সংগ্রহ</li>
            <li>যাকাত বিপণন </li>
            <li>গবেষণাগার  </li>
            <li>সমবায় আর্থিক ব্যবস্থা</li>
            <li>প্রাতিষ্ঠানিক যাকাত কার্যক্রম </li>
            
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
