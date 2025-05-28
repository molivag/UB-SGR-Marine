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
      {/* <SwiperSlide> <div className='bg-[url(/img/test1.jpg)] bg-cover bg-center h-full w-full'></div></SwiperSlide> */}
        <SwiperSlide><span className='font-bold text-5xl'>Slide 1</span></SwiperSlide>
        <SwiperSlide><span className='font-bold text-5xl'>Slide 2</span></SwiperSlide>
        <SwiperSlide><span className='font-bold text-5xl'>Slide 3</span></SwiperSlide>
        <SwiperSlide><span className='font-bold text-5xl'>Slide 4</span></SwiperSlide>
        <SwiperSlide><span className='font-bold text-5xl'>Slide 5</span></SwiperSlide>
        <SwiperSlide><span className='font-bold text-5xl'>Slide 6</span></SwiperSlide>
{/* <SwiperSlide><div className="bg-[url(../../public/img/GiselaM.jpg)] ..."></div></SwiperSlide> */}
      </Swiper>
    </>
  );
}
export default SwipImages




// Este es para fade effect


// import React, { useRef, useState } from 'react';
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import './styles.css';

// // import required modules
// import { EffectFade, Navigation, Pagination } from 'swiper/modules';

// export default function App() {
//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         effect={'fade'}
//         navigation={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[EffectFade, Navigation, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

