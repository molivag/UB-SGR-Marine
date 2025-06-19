// import MoveImages from "./Carousel";
// import Navigation_menu from "./Navigation";

import '../styles/styles.css';
import MenuBar from "./NavigationBar";



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

function HeaderComp() {
  return (
    <header>
      <div className="sticky top-0 z-50 bg-UBfoothead shadow-xl">
        {/* <Navigation_menu /> */}
        <MenuBar />
      </div>
    </header>
  );
}

export default HeaderComp;
