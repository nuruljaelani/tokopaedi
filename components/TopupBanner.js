/* eslint-disable react/jsx-boolean-value */
/* eslint-disable linebreak-style */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Autoplay,
  Pagination,
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Autoplay, Pagination]);

// Now you can use Swiper

export default function TopupBanner() {
  return (
    <>
      <Swiper
        navigation
        className="mySwiper"
        centeredSlides={true}
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <img src="/banner-tagihan/1.jpg" alt="me" className="w-full h-64 rounded-xl object-center" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner-tagihan/2.jpg" alt="me" className="w-full h-64 rounded-xl object-center" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner-tagihan/3.jpg" alt="me" className="w-full h-64 rounded-xl object-center" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
