import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import image1 from '../../assets/popularP/frozen.jpg'
import image2 from '../../assets/popularP/slider2.jpg'
import { MyContext } from '../../Auth/AuthProvide'
import axios from 'axios'

const Compare = () => {

    // /get-to-compare
    const [cats, setCat] = useState([]);
    const { login_user } = useContext(MyContext)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://server-brown-tau.vercel.app/api/get-to-compare?email=${login_user?.email}`);
                setCat(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchData();
    }, []);

    console.log(cats[0]);

    return (
        <div className='min-h-screen'>
            <Navbar />
            <div className='max-w-7xl mx-auto py-10 px-3 lg:px-0'>
                <h1 className='lg:text-5xl font-bold pb-10'>Compare Products</h1>
                <div class="grid grid-cols-1 lg:grid-cols-[120px_1fr]">
                    <div class="border border-gray-400 flex justify-center items-center">
                        <h1 className='font-bold'>Product</h1>
                    </div>
                    <div class="grid grid-cols-2">
                        <div className='flex justify-center items-center flex-col space-y-2 border-t border-b border-gray-400 py-5'>
                            <img src={`http://localhost:5000/image/${cats[0]?.image}`} alt="" />
                            <h1 className='text-xl font-bold'>{cats[0]?.productName}</h1>
                        </div>
                        <div className='flex justify-center items-center flex-col space-y-2 border border-gray-400 py-5'>
                            <img src={`http://localhost:5000/image/${cats[1]?.image}`} alt="" />
                            <h1 className='text-xl font-bold'>{cats[1]?.productName}</h1>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-[120px_1fr]">
                    <div class="border-l border-b border-r border-gray-400 flex justify-center items-center">
                        <h1 className='font-bold'>Description</h1>
                    </div>
                    <div class="grid grid-cols-2">
                        <div className='flex justify-center items-center flex-col space-y-2 border-b border-r border-gray-400 py-5'>
                            <h1 className='px-5 text-base text-center'>{cats[1]?.orderNotes} </h1>
                        </div>
                        <div className='flex justify-center items-center flex-col space-y-2 border-b border-r border-gray-400 py-5'>
                            <h1 className='px-5 text-base text-center'>{cats[1]?.orderNotes}</h1>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-[120px_1fr]">
                    <div class="border-l border-b border-r border-gray-400 flex justify-center items-center">
                        <h1 className='font-bold'>Price</h1>
                    </div>
                    <div class="grid grid-cols-2">
                        <div className='flex justify-center items-center flex-col space-y-2 border-b border-r border-gray-400 py-5'>
                            <h1 className='px-5 text-base text-center font-bold'>{cats[0]?.price}</h1>
                        </div>
                        <div className='flex justify-center items-center flex-col space-y-2 border-b border-r border-gray-400 py-5'>
                            <h1 className='px-5 text-base text-center font-bold'>{cats[1]?.price}</h1>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-[120px_1fr]">
                    <div class="border-l border-b border-r border-gray-400 flex justify-center items-center">
                        <h1 className='font-bold'>Add to cart</h1>
                    </div>
                    <div class="grid grid-cols-2">
                        <div className='flex justify-center items-center flex-col space-y-2 border-b border-r border-gray-400 py-5'>
                            <h1 className='px-5 text-base text-center'>Add to cart</h1>
                        </div>
                        <div className='flex justify-center items-center flex-col space-y-2 border-b border-r border-gray-400 py-5'>
                            <h1 className='px-5 text-base text-center'>Add to cart</h1>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-[120px_1fr]">
                    <div class="border-l border-b border-r border-gray-400 flex justify-center items-center">
                        <h1 className='font-bold'>Quality</h1>
                    </div>
                    <div class="grid grid-cols-2">
                        <div className='flex justify-center items-center flex-col space-y-2 border-b border-r border-gray-400 py-5'>
                            <h1 className='px-5 text-base text-center'>{cats[0]?.quality}</h1>
                        </div>
                        <div className='flex justify-center items-center flex-col space-y-2 border-b border-r border-gray-400 py-5'>
                            <h1 className='px-5 text-base text-center'>{cats[1]?.quality}</h1>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-[120px_1fr]">
                    <div class="border-l border-b border-r border-gray-400 flex justify-center items-center">
                        <h1 className='font-bold'>Availability</h1>
                    </div>
                    <div class="grid grid-cols-2">
                        <div className='flex justify-center items-center flex-col space-y-2 border-b border-r border-gray-400 py-5'>
                            <h1 className='px-5 text-base text-center hover:text-red-500'>{cats[0]?.status}</h1>
                        </div>
                        <div className='flex justify-center items-center flex-col space-y-2 border-b border-r border-gray-400 py-5'>
                            <h1 className='px-5 text-base text-center hover:text-red-500'>{cats[1]?.status}</h1>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-[120px_1fr]">
                    <div class="border-l border-b border-r border-gray-400 flex justify-center items-center">
                        <h1 className='font-bold'>Remove</h1>
                    </div>
                    <div class="grid grid-cols-2">
                        <div className='flex justify-center items-center flex-col space-y-2 border-b border-r border-gray-400 py-5'>
                            <h1 className='px-5 text-base text-center hover:text-red-500'>Remove</h1>
                        </div>
                        <div className='flex justify-center items-center flex-col space-y-2 border-b border-r border-gray-400 py-5'>
                            <h1 className='px-5 text-base text-center hover:text-red-500'>Remove</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Compare