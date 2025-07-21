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
          <div className="aspect-[16/9] lg:aspect-[21/9]">
            <img
              src="/MBE1271/img/carrusel/car1.webp"
              className="w-full h-full
              xsm:object-scale-down 
              md:object-cover 
              md:object-center 
              xl:object-[center_100%]"
              alt=""
            />
          </div>

        </SwiperSlide>
        <SwiperSlide>

          <div className="aspect-[16/9] lg:aspect-[23/9]">
            <img
              src="/MBE1271/img/carrusel/car2.webp"
              className="w-full h-full
              xsm:object-scale-down 
              md:object-cover 
              md:object-center 
              xl:object-[center_100%]"
              alt=""

              // className="w-full h-full
              // xsm:object-scale-down 
              // md:object-cover 
              // md:object-center 
              // lg:object-[center_100%]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>



          <div className="aspect-[16/9] lg:aspect-[23/9]">
            <img
              src="/MBE1271/img/carrusel/car3.webp"
              className="w-full h-full
              xsm:object-scale-down 
              md:object-cover 
              md:object-center 
              xl:object-[center_80%]"
              alt=""

              // className="w-full h-full
              // xsm:object-scale-down 
              // md:object-cover 
              // md:object-center 
              // lg:object-[center_100%]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-[16/9] lg:aspect-[23/9]">
            <img
              src="/MBE1271/img/carrusel/car4.webp"
              className="w-full h-full
              xsm:object-scale-down 
              md:object-cover 
              md:object-center 
              xl:object-[center_45%]"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-[16/9] lg:aspect-[23/9]">
            <img
              src="/MBE1271/img/carrusel/car5.webp"
              className="w-full h-full
              xsm:object-scale-down 
              md:object-cover 
              md:object-center 
              xl:object-[center_50%]"
              alt=""
            />
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
        <SwiperSlide>
          {/* <div className="w-full h-full flex items-center justify-center  */}
          {/*   bg-[url('/MBE1271/img/carrusel/car9.webp')] bg-cover bg-center bg-no-repeat"> */}
          {/* </div> */}

          <div className="aspect-[16/9]">
            <img
              src="/MBE1271/img/carrusel/car9.webp"
              className="w-full h-full object-cover xsm:object-scale-down md:object-cover object-center"
              alt=""
            />
          </div>



        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center 
            bg-[url('/MBE1271/img/carrusel/car10.webp')] bg-cover bg-center bg-no-repeat">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-[16/9] lg:aspect-[23/9]">
            <img
              src="/MBE1271/img/carrusel/car11.webp"
              className="w-full h-full object-cover xsm:object-scale-down md:object-cover object-center"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center 
            bg-[url('/MBE1271/img/carrusel/car12.webp')] bg-cover bg-center bg-no-repeat">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-[16/9] lg:aspect-[23/9]">
            <img
              src="/MBE1271/img/carrusel/car13.webp"
              className="w-full h-full
              xsm:object-scale-down 
              md:object-cover 
              md:object-center 
              xl:object-[center_70%]"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-[16/9] lg:aspect-[23/9]">
            <img
              src="/MBE1271/img/carrusel/car14.webp"
              className="w-full h-full
              xsm:object-scale-down 
              md:object-cover 
              md:object-center 
              xl:object-[center_85%]"
              alt=""
            />
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-[16/9]">
            <img
              src="/MBE1271/img/carrusel/car15.webp"
              className="w-full h-full object-cover xsm:object-scale-down md:object-cover object-center"

              // className="w-full h-full object-cover object-center"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-[16/9]">
            <img
              src="/MBE1271/img/carrusel/car16.webp"
              className="w-full h-full
              xsm:object-scale-down 
              md:object-cover 
              md:object-center 
              lg:object-[center_30%]"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-[16/9] lg:aspect-[23/9]">
            <img
              src="/MBE1271/img/carrusel/car17.webp"
              className="w-full h-full
              xsm:object-scale-down 
              md:object-cover 
              md:object-center 
              xl:object-[center_25%]"
              alt=""
            />
          </div>

        </SwiperSlide>
        <SwiperSlide>

          <div className="aspect-[16/9] lg:aspect-[23/9]">
            <img
              src="/MBE1271/img/carrusel/car18.webp"
              className="w-full h-full
              xsm:object-scale-down 
              md:object-cover 
              md:object-center 
              xl:object-[center_15%]"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>

          <div className="aspect-[16/9] lg:aspect-[23/9]">
            <img
              src="/MBE1271/img/carrusel/car19.webp"
              className="w-full h-full
              xsm:object-scale-down 
              md:object-cover 
              md:object-center 
              xl:object-[center_90%]"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-[16/9] lg:aspect-[23/9]">
            <img
              src="/MBE1271/img/carrusel/car20.webp"
              className="w-full h-full
              xsm:object-scale-down 
              md:object-cover 
              md:object-center 
              xl:object-[center_100%]"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default SwipImages
