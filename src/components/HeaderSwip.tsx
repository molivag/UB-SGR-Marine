// import MoveImages from "./Carousel";
// import Navigation_menu from "./Navigation";
import SwipImages from "./SwiperComp";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// function HeaderComp() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(true);
//       window.removeEventListener("scroll", handleScroll);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header>
//       <div className="w-full">
//         {/* Carrusel animado con transición al primer scroll */}
//         <AnimatePresence>
//           {!scrolled && (
//             <motion.div
//               initial={{ scale: 1, opacity: 1 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ duration: 1, ease: "easeInOut" }}

//               className="relative h-screen overflow-hidden"
//             >
//               <SwipImages />
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Versión normal del carrusel cuando ya se scrolleó */}
//         {scrolled && (
//           <div className="relative h-[900px] overflow-hidden">
//             <SwipImages />
//           </div>
//         )}

//         {/* Sticky menú que se queda fijo arriba */}
//         <div className="sticky top-0 z-50 bg-UBfoothead shadow-xl">
//           <MenuBar />
//         </div>
//       </div>
//     </header>
//   );
// }
import { Parallax } from "react-scroll-parallax";

function HeaderSwip() {
  return (
    <header className="relative overflow-y-hidden">
    {/* <header > */}
      <Parallax speed={-23}>
        <div className="xsm:h-[600px] h-[720px] 5xl:h-[980px] -mt-20 bg-cover bg-no-repeat bg-center ">
          {/* <div className="h-96 "> */}
          {/* <MoveImages /> */}
          <SwipImages />
        </div>
      </Parallax>
    </header>
  );
}

export default HeaderSwip;
