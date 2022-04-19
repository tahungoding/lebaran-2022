import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import headerImg from '../../assets/img/Header.png'

export default function Hero() {
    return (

        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,

                }}

                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper "
            >
                <SwiperSlide><img src={headerImg} alt="" className="ml-3" /></SwiperSlide>
                <SwiperSlide><img src={headerImg} alt="" className="ml-3" /></SwiperSlide>
                <SwiperSlide><img src={headerImg} alt="" className="ml-3" /></SwiperSlide>
                <SwiperSlide><img src={headerImg} alt="" className="ml-3" /></SwiperSlide>
                <SwiperSlide><img src={headerImg} alt="" className="ml-3" /></SwiperSlide>
            </Swiper>
        </>


    )
}
