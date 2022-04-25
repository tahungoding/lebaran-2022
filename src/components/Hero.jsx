import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import headerImg from '../../assets/img/HeaderFix.png'
import header1Img from '../../assets/img/Header1.png'

export default function Hero() {
    return (

        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,

                }}

                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper -z-30"
            >
                <SwiperSlide><img src={headerImg} alt="" className="w-full -z-30" /></SwiperSlide>
                <SwiperSlide><img src={header1Img} alt="" className="w-full -z-30" /></SwiperSlide>
                
            </Swiper>
        </>


    )
}
