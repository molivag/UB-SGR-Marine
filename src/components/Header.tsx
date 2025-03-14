// import MoveImages from "./Carousel";
// import Navigation_menu from "./Navigation";
import SwipImages from "./SwiperComp";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/styles.css';
import MenuBar from "./NavigationBar";


function HeaderComp() {
  return (
    <header>
      <div>
        <div className="h-96 ">
          {/* <MoveImages /> */}
	  <SwipImages/>
        </div>
        <div className="bg-UBfoothead">
          {/* <Navigation_menu /> */}
	  <MenuBar/>
        </div>
      </div>
    </header>
  );
}

export default HeaderComp;
