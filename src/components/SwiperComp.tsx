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
          dynamicBullets: true,
	  clickable: true
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
{/* <SwiperSlide><div className="bg-[url(../../public/img/GiselaM.jpg)] ..."></div></SwiperSlide> */}
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
}
export default SwipImages

