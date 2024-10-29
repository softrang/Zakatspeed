import React from 'react'
import News from './Component/News'
import Logo from './image/logo.png'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
  return (
    <> 
   
    <News/>
   
    <div className='w-full bg-zinc-50 text-zinc-900 py-3 '> 
    
    <div className='w-90 flex   m-auto '>
    <div className='w-1/12 h-[50px]'> <img className='h-full' src={Logo} alt='logo'/> </div>
   
    <div className='w-11/12 flex   items-center justify-end uppercase'>
    <ul className='flex gap-5 text-lg w-full'>
        <li className='cursor-pointer'>হোম</li>
        <li className='relative group w-max cursor-pointer flex items-center  gap-2 '>আমাদের কাজসমূহ <IoIosArrowDown />
          <ul className='absolute hidden group-hover:block bg-white shadow-md  w-max top-full'> 
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3'>সেবা সমূহ </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' >জাকাত সংগ্রহ </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' >জাকাত বিতরণ </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' > ব্যবস্থাপনা ও পরিচালনা </li>
            <li className=' leading-10  cursor-pointer px-3' >শরিয়ত ভিত্তিক পরিচালনা কমিটি </li>
          </ul>
        </li>
        <li className='relative group w-max cursor-pointer flex items-center  gap-2  ' >ইসলামী প্রোডাক্ট<IoIosArrowDown />
        <ul className='absolute hidden group-hover:block bg-white shadow-md  w-max top-full '> 
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3'>কর্জে হাসানা </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3 relative group  flex items-center  gap-2  ' >ইসলামী ব্যাংক <IoIosArrowForward />

            <ul className='absolute hidden group-hover:block bg-white shadow-md  w-max left-full top-0 '> 
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
        <li className='relative group w-max cursor-pointer  flex items-center  gap-2 '  >জাকাত বই<IoIosArrowDown />
          
        <ul className=' absolute hidden group-hover:block bg-white shadow-md w-max  top-full '> 
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
        <li className='relative group w-max cursor-pointer flex items-center  gap-2  '   >জাকাত ব্যাংক<IoIosArrowDown />
        <ul className='absolute hidden group-hover:block bg-white shadow-md  w-max top-full '> 
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3'>সুদ মুক্ত জমা </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' >এককালীন অনুদান </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' >প্রতিদিনের সাহায্য</li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' > সঞ্চয় </li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' > অর্থবিবরনী</li>
            <li className='border-b border-zinc-600 leading-10  cursor-pointer px-3' > এলাকা ভিত্তিক সুদ মুক্ত ঘুর্ণায়মান তহবিল</li>
            <li className=' leading-10  cursor-pointer px-3' >বিনিয়োগ</li>
          </ul>


        </li>
        <li className='cursor-pointer'>সংবাদ</li>
        <li className='cursor-pointer'>অডিট রিপোর্ট</li>
        <li className='ml-[4%] cursor-pointer'>রেজিস্ট্রেশন</li>
        <li className='cursor-pointer'>লগিন</li>
      </ul>
    </div>
  </div>
  </div>
  </>
  )
}

export default Header
