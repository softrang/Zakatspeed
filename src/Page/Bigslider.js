import React from 'react'
import Bigslide from '../Component/Bigslide'
import { useDeta } from '../Context/ShareDeta'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle'

const Bigslider = () => {
    const {bigslide} =useDeta()
  return (
    <div className='w-full mt-1 '>
        <div className='w-90 m-auto '> 
                   
            <Swiper
 modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop = {true}
     
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        hover:false
      }}
    >
     {bigslide.map((items, index) => (
  <SwiperSlide key={index}>
    <Bigslide deta={items} />
  </SwiperSlide>
))}

    </Swiper>




        </div>
      
    </div>
  )
}

export default Bigslider
