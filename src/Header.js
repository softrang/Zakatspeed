import React, { useEffect } from 'react'
import News from './Component/News'
import Logo from './image/logo.png'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {

  useEffect(() => {


    
  






    const mainMenu = document.querySelector(".main");
    const menu = document.querySelector(".menu");
  
    if (mainMenu && menu) {
      const toggleMenu = () => {
        if (menu.classList.contains("xsm:hidden")) {
          menu.classList.remove("xsm:hidden");
          menu.classList.add("xsm:block");
         
        } else {
          menu.classList.remove("xsm:block");
          menu.classList.add("xsm:hidden");
        }
      };
  
      mainMenu.addEventListener("click", toggleMenu);
  
      // Cleanup function to remove the event listener when the component unmounts
      return () => {
        mainMenu.removeEventListener("click", toggleMenu);
      };
    }









  }, []);
  
  


  return (
    <> 
   
    <News/>
   <div className='w-full bg-zinc-50 text-zinc-900 py-3 sticky top-0 z-50'>
    <div className='w-90 m-auto flex justify-between items-center relative '>
      <div className='w-1/12 xsm:w-4/12 lsm:w-2/12 lg:w-1/12'> <img className='h-full' src={Logo} alt='logo'/> </div>
      <div className='w-11/12  xsm:flex xsm:items-center xsm:justify-end xsm:gap-8 lmd:w-10/12 lg:w-11/12 lg:block  '> 
     
      <div className='w-full  flex  gap-10 lg:gap-5 llg:gap-10  justify-end items-center text-lg lg:text-base llg:text-lg  mb-5 xsm:mb-0 lg:mb-5 xsm:w-max lg:w-full'> 
      <div className='flex gap-2 items-center xsm:hidden lmd:flex'><MdOutlineEmail /> <p>info@zakatspeed.org</p></div>
      <div className='flex gap-2 items-center xsm:hidden lg:flex' ><FaPhoneAlt /> <p>+৮৮০ ১৩০৯-০৮৪৪৫১</p></div>
      <div className='flex gap-2 items-center xsm:hidden lg:flex' ><FaLocationDot /> <p>ঢাকা বাংলাদেশ</p></div>
      <div className='border border-zinc-700 px-5 py-2 rounded-xl xsm:hidden md:block'><p>জাকাত হিসাব</p></div>
      <div className='border border-zinc-700 px-5 py-2 rounded-xl xsm:hidden md:block' ><p>দান করুন</p></div>
      <div className='w-[4vw] h-[4vw]  xsm:w-[15vw] xsm:h-[15vw] lsm:w-[10vw] lsm:h-[10vw] md:w-[7vw] md:h-[7vw] lmd:w-[5vw] lmd:h-[5vw]  lg:w-[4vw] lg:h-[4vw] relative group border border-zinc-700 rounded-full flex items-center justify-center text-2xl'> <FaUserAlt /> 
<ul className='absolute hidden group-hover:block text-lg top-full bg-zinc-50 right-w-1/2 z-50'>
<li className='cursor-pointer py-2 px-4'><Link to="/login"> লগিন</Link> </li>
<li className='cursor-pointer py-2 px-4'> <Link to="/register">রেজিস্ট্রেশন </Link> </li>

</ul>
</div>
</div>
<div className='w-full flex   items-center justify-center uppercase xsm:w-max lg:w-full  '>
<button className='main text-4xl   xsm:w-[10vw] xsm:h-[10vw] lsm:w-[10vw] lsm:h-[10vw] md:w-[7vw] md:h-[7vw] lg:hidden flex items-center justify-center '><IoMenu /></button>
    <ul className=' menu   lg:gap-3 llg:gap-7  lg:text-base llg:text-lg xsm:w-full   xsm:hidden xsm:absolute xsm:top-full xsm:left-0 xsm:bg-zinc-50 xsm:p-5 lg:p-0 lg:relative lg:flex lg:justify-end z-40 '>
        <li className='cursor-pointer xsm:leading-10'><Link to="/"> হোম </Link> </li>
        <li className='relative group w-max cursor-pointer flex items-center  gap-2 xsm:leading-10 '>আমাদের কাজসমূহ <IoIosArrowDown />
          <ul className='absolute xsm:z-50 hidden group-hover:block bg-white shadow-md  w-max h-52  top-full'> 
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3'>সেবা সমূহ </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' >জাকাত সংগ্রহ </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' >জাকাত বিতরণ </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' > ব্যবস্থাপনা ও পরিচালনা </li>
            <li className=' leading-10  cursor-pointer px-3' >শরিয়ত ভিত্তিক পরিচালনা কমিটি </li>
          </ul>
        </li>
        <li className='relative group w-max cursor-pointer flex items-center  gap-2  xsm:leading-10 ' >ইসলামী প্রোডাক্ট<IoIosArrowDown />
        <ul className='absolute xsm:z-50 hidden group-hover:block bg-white shadow-md  w-max h-52 top-full '> 
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3'>কর্জে হাসানা </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3  flex items-center  gap-2 relative  dropdow-container xsm:leading-10  ' >ইসলামী ব্যাংক <IoIosArrowForward />

            <ul className=' dropdown  absolute   bg-white shadow-md  w-max left-full xsm:top-full xsm:left-0 lg:left-full lg:top-0 '> 
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3'>অর্থনৈতিক নিরাপত্তা ও ইসলাম </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' >সুদ ভিত্তিক অর্থব্যবস্থা </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' >ইসলামী অর্থনীতি ও পূঁজিবাদ অর্থনীতির প্রার্থক্য</li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' > ইসলামী ব্যাংকের বৈশিষ্ট্য বা কার্যাবলী এবং পুঁজি সংগ্রহ </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' > ইসলামী আর্থিক প্রতিষ্ঠানের বিনিয়োগের বিভিন্ন পদ্ধতি </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' > ক্ষুদ্রঋন কি দারিদ্র্য বিমোচনে সক্ষম </li>
            <li className=' leading-10  cursor-pointer px-3' >সুদী বিনিয়োগের আদর্শ বিকল্প </li>
          </ul>


            </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' >ইসলামী বীমা </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' > সকুক বন্ড </li>
            <li className=' leading-10  cursor-pointer px-3' >ওয়াকফ </li>
          </ul>

        </li>
        <li className='relative group w-max cursor-pointer  flex items-center  gap-2 xsm:leading-10 '  >জাকাত বই<IoIosArrowDown />
          
        <ul className=' absolute xsm:z-50 hidden group-hover:block bg-white shadow-md w-max h-52 overflow-y-scroll  top-full '> 
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3'>কোরআন, হাদিসে জাকাতের বিধান </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' >কোরআন হাদিসে জাকাতের বাণী </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' >জাকাত বন্টনের খাত সমূহ</li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' > বিভিন্ন সম্পদে জাকাতের নিসাব </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' > কাদের উপর জাকাত ফরজ </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' > যেসব সম্পদে জাকাত নেই </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' > জাকাত না দেয়ার ইহলৌকিক শাস্তি </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' > জাকাত না দেয়ার সামাজিক কুফল </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' > জাকাতের প্রাতিষ্ঠানিক করন </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' > জাকাত ভিত্তিক অর্থনীতি </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' > জাকাতের আর্থ-সামাজিক গুরুত্ব </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' > সুদ মুক্ত অর্থনীতির মূলভিত্তি জাকাত </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' > জাকাতের অর্থনৈতিক গুরুত্ব </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' > মানবসম্পদ উন্নয়নে জাকাতের ভুমিকা </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' > এসডিজি অর্জনে জাকাত </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' > বাংলাদেশের দারিদ্র্য পরিস্তিতি </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' > জাকাত -কর </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' > উশর/বাংলাদেশের উৎপাদন</li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' > জাকাত ক্যালকুলেশন </li>
           
            <li className=' leading-10  cursor-pointer px-3' >বাংলাদেশে উশর ও জাকাত আদায়ের সম্ভাব্য পরিমান</li>
          </ul>
         

        </li>
        <li className='relative group w-max cursor-pointer flex items-center  gap-2 xsm:leading-10  '   >জাকাত ব্যাংক<IoIosArrowDown />
        <ul className='absolute hidden group-hover:block bg-white shadow-md  w-max h-52 overflow-y-scroll top-full '> 
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3'>সুদ মুক্ত জমা </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' >এককালীন অনুদান </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' >প্রতিদিনের সাহায্য</li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' > সঞ্চয় </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' > অর্থবিবরনী</li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' > এলাকা ভিত্তিক সুদ মুক্ত ঘুর্ণায়মান তহবিল</li>
            <li className=' leading-10  cursor-pointer px-3' >বিনিয়োগ</li>
          </ul>


        </li>
        <li className='cursor-pointer xsm:leading-10'>সংবাদ</li>
        <li className='cursor-pointer xsm:leading-10'>অডিট রিপোর্ট</li>
        <li className='cursor-pointer xsm:leading-10'>সমগ্র বাংলাদেশ</li>
       
      </ul>
     
    </div>
</div>
    </div>

   </div>

  </>
  )
}

export default Header
