import React, { useEffect, useRef, useState } from 'react';
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
import axios from 'axios';

export default function Slider() {

    const [cats, setCat] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/get-all-cat');
                setCat(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchData();
    }, []);
    console.log(cats);

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
                {
                    cats && cats.map(cat =>
                        <SwiperSlide>
                            <li className='relative text-center'>
                                <img src={`http://localhost:5000/image/${cat.image}`} alt='slider2' />
                                <div className='absolute top-10 w-[190px] left-0'>
                                    <h1 className='text-xl'>{cat?.name}</h1>
                                    <p className='text-base'>5 Items</p>
                                </div>
                            </li>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
}