// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/styles.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function SwipImages() {
  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          dynamicBullets: false,
          clickable: true
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center 
            bg-[url('/MBE1271/img/carrusel/car1.webp')] bg-cover bg-center bg-no-repeat">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center 
            bg-[url('/MBE1271/img/carrusel/car2.webp')] bg-cover bg-center bg-no-repeat">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center 
            bg-[url('/MBE1271/img/carrusel/car3.webp')] bg-cover bg-center bg-no-repeat">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center 
            bg-[url('/MBE1271/img/carrusel/car4.webp')] bg-cover bg-center bg-no-repeat">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center 
            bg-[url('/MBE1271/img/carrusel/car5.webp')] bg-cover bg-center bg-no-repeat">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center 
            bg-[url('/MBE1271/img/carrusel/car6.webp')] bg-cover bg-center bg-no-repeat">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center 
            bg-[url('/MBE1271/img/carrusel/car7.webp')] bg-cover bg-center bg-no-repeat">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center 
            bg-[url('/MBE1271/img/carrusel/car8.webp')] bg-cover bg-center bg-no-repeat">
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default SwipImages
