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

export default function OfficialStoreSlider() {
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
          <img src="/banner-store/1.jpg" alt="me" className="w-full rounded-lg h-72 object-center" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner-store/2.jpg" alt="me" className="w-full rounded-lg h-72 object-center" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner-store/3.jpg" alt="me" className="w-full rounded-lg h-72 object-center" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner-store/4.jpg" alt="me" className="w-full rounded-lg h-72 object-center" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
