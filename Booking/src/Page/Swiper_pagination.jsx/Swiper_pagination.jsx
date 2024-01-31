import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import room1 from '../Swiper_pagination.jsx/room14.jpg'
import room2 from '../Swiper_pagination.jsx/room15.jpg'
import room3 from '../Swiper_pagination.jsx/room16.jpg'
import room4 from '../Swiper_pagination.jsx/room17.jpg'
import room5 from '../Swiper_pagination.jsx/room18.jpg'
import room6 from '../Swiper_pagination.jsx/room19.jpg'
import room7 from '../Swiper_pagination.jsx/room20.jpg'
import room8 from '../Swiper_pagination.jsx/room21.jpg'
import room9 from '../Swiper_pagination.jsx/room22.jpg'
import room10 from '../Swiper_pagination.jsx/room24.jpg'
import room11 from '../Swiper_pagination.jsx/room23.jpg'
import room13 from '../Swiper_pagination.jsx/room13.jpg'

import '../Swiper_pagination.jsx/Swiper_pagination.css'


const Swiper_pagination = () => {
    return (
        <div>
                <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className="roomm"src={room1}></img></SwiperSlide>
        <SwiperSlide><img   className="roomm" src={room2}></img></SwiperSlide>
        <SwiperSlide><img  className="roomm" src={room3}></img></SwiperSlide>
        <SwiperSlide><img  className="roomm" src={room4}></img></SwiperSlide>    
         <SwiperSlide><img className="roomm"   src={room5}></img></SwiperSlide>   
           <SwiperSlide><img className="roomm"  src={room6}></img></SwiperSlide>
           <SwiperSlide><img className="roomm"  src={room7}></img></SwiperSlide>
           <SwiperSlide><img className="roomm"  src={room8}></img></SwiperSlide>
           <SwiperSlide><img className="roomm" src={room9}></img></SwiperSlide>
           <SwiperSlide><img className="roomm" src={room10}></img></SwiperSlide>
           <SwiperSlide><img className="roomm" src={room11}></img></SwiperSlide>
           <SwiperSlide><img className="roomm" src={room13}></img></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Swiper_pagination;