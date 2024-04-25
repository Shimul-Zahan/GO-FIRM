import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import slider1 from '../assets/popularP/slider2.jpg'
import slider2 from '../assets/popularP/slider3.jpg'
import slider3 from '../assets/popularP/slider4.jpg'
import slider4 from '../assets/popularP/slider5.jpg'
import slider5 from '../assets/popularP/slider6.jpg'
import slider6 from '../assets/popularP/frozen.jpg'

// import './styles.css';

import { Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
    return (
        <div className='lg:max-w-6xl mx-auto py-10'>
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                breakpoints={{
                    400: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                }}
                modules={[Pagination, Navigation]}
            // className="mySwiper"
            >
                <SwiperSlide>
                    <li className='relative text-center'>
                        <img src={slider1} alt='slider2' />
                        <div className='absolute top-10 w-full left-1/2 transform -translate-x-1/2'>
                            <h1 className='text-xl'>Frozen Foods</h1>
                            <p>5 Items</p>
                        </div>
                    </li>
                </SwiperSlide>
                <SwiperSlide>
                    <li className='relative text-center'>
                        <img src={slider2} alt='slider2' />
                        <div className='absolute top-10 w-full left-1/2 transform -translate-x-1/2'>
                            <h1 className='text-xl'>Frozen Foods</h1>
                            <p>5 Items</p>
                        </div>
                    </li>
                </SwiperSlide>
                <SwiperSlide>
                    <li className='relative text-center'>
                        <img src={slider3} alt='slider2' />
                        <div className='absolute top-10 w-full left-1/2 transform -translate-x-1/2'>
                            <h1 className='text-xl'>Frozen Foods</h1>
                            <p>5 Items</p>
                        </div>
                    </li>
                </SwiperSlide>
                <SwiperSlide>
                    <li className='relative text-center'>
                        <img src={slider4} alt='slider2' />
                        <div className='absolute top-10 w-full left-1/2 transform -translate-x-1/2'>
                            <h1 className='text-xl'>Frozen Foods</h1>
                            <p>5 Items</p>
                        </div>
                    </li>
                </SwiperSlide>
                <SwiperSlide>
                    <li className='relative text-center'>
                        <img src={slider5} alt='slider2' />
                        <div className='absolute top-10 w-full left-1/2 transform -translate-x-1/2'>
                            <h1 className='text-xl'>Frozen Foods</h1>
                            <p>5 Items</p>
                        </div>
                    </li>
                </SwiperSlide>
                <SwiperSlide>
                    <li className='relative text-center'>
                        <img src={slider6} alt='slider2' />
                        <div className='absolute top-10 w-full left-1/2 transform -translate-x-1/2'>
                            <h1 className='text-xl'>Frozen Foods</h1>
                            <p>5 Items</p>
                        </div>
                    </li>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}