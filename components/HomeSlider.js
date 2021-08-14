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


export default function HomeSlider() {
  
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
          <img src="/banner-e-commerce11.png" alt="me" className="w-full rounded-lg h-80 object-center" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Ecommerce-Banner-1920.jpg" alt="me" className="w-full rounded-lg h-80 object-center" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/R.jpg" alt="me" className="w-full rounded-lg h-80 object-center" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}