// import MoveImages from "./Carousel";
// import Navigation_menu from "./Navigation";
import SwipImages from "./SwiperComp";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Parallax } from "react-scroll-parallax";

function HeaderSwip() {
  return (
    <header className="relative overflow-y-hidden">
    {/* <header > */}
      <Parallax speed={-23}>
        <div className="xsm:h-[350px] md:h-[620px] 5xl:h-[980px] xsm:-mt-40 md:-mt-20 bg-cover bg-no-repeat bg-center ">
          {/* <div className="h-96 "> */}
          {/* <MoveImages /> */}
          <SwipImages />
        </div>
      </Parallax>
    </header>
  );
}

export default HeaderSwip;
