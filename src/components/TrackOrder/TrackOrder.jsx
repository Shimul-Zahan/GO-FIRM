import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import image from '../../assets/order/gift.png'
import { MyContext } from '../../Auth/AuthProvide';
import axios from 'axios';

const TrackOrder = () => {

    const [latestPayment, setLatestPayment] = useState(null);
    const { login_user } = useContext(MyContext);

    const getLatestPayment = async (email) => {
        try {
            const response = await axios.get(`https://server-brown-tau.vercel.app/api/get-latest-payment?email=${email}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching latest payment data:', error);
            return null;
        }
    }

    useEffect(() => {
        const fetchLatestPayment = async () => {
            const paymentData = await getLatestPayment(login_user?.email);
            setLatestPayment(paymentData);
        };

        fetchLatestPayment();
    }, [login_user?.email]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const calculateDeliveryDate = (orderDate) => {
        const deliveryDate = new Date(orderDate);
        deliveryDate.setDate(deliveryDate.getDate() + 3); // Add 3 days
        return formatDate(deliveryDate);
    };

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto min-h-screen'>
                {
                    latestPayment ?

                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 py-10 bg-white shadow-2xl px-10">
                            <div className="bg-[#4f3e95] w-full flex flex-col justify-center items-center p-16 text-center text-white">
                                <img src={image} alt="" />
                                <h1 className='text-3xl font-bold py-2'>Your Order Confirmed</h1>
                                <p className='text-base'>We will send you a shipping confirmation email as soon <br />  as your order ships</p>
                                <div>
                                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-20 pt-8 py-5">
                                        <div className="">
                                            <h1 className='text-lg'>Order Date:</h1>
                                            <h1 className='text-xl font-bold'>{latestPayment && formatDate(latestPayment.createdAt)}</h1>
                                        </div>
                                        <div className="">
                                            <h1 className='text-lg'>Expected Delivery:</h1>
                                            <h1 className='text-xl font-bold'>{latestPayment && calculateDeliveryDate(latestPayment.createdAt)}</h1>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-20">
                                        <div className="">
                                            <h1 className='text-lg'>Order Number:</h1>
                                            <h1 className='text-xl font-bold'>#9641</h1>
                                        </div>
                                        <div className="">
                                            <h1 className='text-lg'>Payment Method:</h1>
                                            <h1 className='text-xl font-bold'>SSL-COMMERZ</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-10">
                                <h1 className='text-3xl font-bold text-center pb-10'>Order Details</h1>
                                <div className='grid grid-cols-2 py-4 font-bold'>
                                    <h1>Product</h1>
                                    <h1 className='text-end'>Total</h1>
                                </div>
                                <span className="flex items-center">
                                    <span className="h-px flex-1 bg-black"></span>
                                </span>
                                {
                                    latestPayment?.products && latestPayment?.products.map(p =>
                                        <div className='grid grid-cols-2 py-4'>
                                            <h1>{p?.name}</h1>
                                            <h1 className='text-end'>{p.price} TK</h1>
                                        </div>
                                    )
                                }
                                <span className="flex items-center">
                                    <span className="h-px flex-1 bg-black"></span>
                                </span>
                                <div className='grid grid-cols-2 py-4'>
                                    <h1>Subtotal</h1>
                                    <h1 className='text-end font-thin'>{latestPayment?.totalPrice} TK</h1>
                                </div>
                                <span className="flex items-center">
                                    <span className="h-px flex-1 bg-black"></span>
                                </span>
                                <div className='grid grid-cols-2 py-4'>
                                    <h1>Shipping</h1>
                                    <h1 className='text-end'>Delivery: 00.00 TK</h1>
                                </div>
                                <span className="flex items-center">
                                    <span className="h-px flex-1 bg-black"></span>
                                </span>
                                <div className='grid grid-cols-2 py-4 font-bold'>
                                    <h1>Total</h1>
                                    <h1 className='text-end'>{latestPayment?.totalPrice} TK</h1>
                                </div>
                            </div>
                        </div> : <div className='flex justify-center items-center h-screen text-3xl'>No Order Yet</div>
                }
            </div>
        </div>
    )
}

export default TrackOrder