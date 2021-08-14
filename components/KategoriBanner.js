// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles


// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Autoplay,
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Autoplay, Pagination]);

// Now you can use Swiper


export default function KategoriBanner() {
  
  return (
    <>
      <Swiper navigation={true} className="mySwiper"
        centeredSlides={true}
        autoplay={{
          "delay": 2500,
          "disableOnInteraction": false
        }}
        pagination={{
          "clickable": true
        }}
        >
        <SwiperSlide>
          <img src="/banner/0e0040de-88c9-4f54-8f94-3232fecd8672.jpg" alt="me" className="w-full h-96 object-center" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner/96d8ffe0-a37c-46c1-ab98-37a86b378579.jpg" alt="me" className="w-full h-96 object-center" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner/a986bc44-f9c2-4841-9597-d2432c6836fb.jpg" alt="me" className="w-full h-96 object-center" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner/a986bc44-f9c2-4841-9597-d2432c6836fb.jpg" alt="me" className="w-full h-96 object-center" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner/f1fa605f-3a79-4d73-a110-1a285ec143b7.jpg" alt="me" className="w-full h-96 object-center" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}