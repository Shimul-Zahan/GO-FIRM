import React from 'react'
import Navbar from '../Navbar/Navbar'
import image from '../../assets/order/gift.png'

const TrackOrder = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto'>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 py-10 bg-white shadow-2xl px-10">
                    <div className="bg-[#4f3e95] w-full flex flex-col justify-center items-center p-16 text-center text-white">
                        <img src={image} alt="" />
                        <h1 className='text-3xl font-bold py-2'>Your Order Confirmed</h1>
                        <p className='text-base'>We will send you a shipping confirmation email as soon <br />  as your order ships</p>
                        <div>
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-20 pt-8 py-5">
                                <div className="">
                                    <h1 className='text-lg'>Order Date:</h1>
                                    <h1 className='text-xl font-bold'>April 10, 2023</h1>
                                </div>
                                <div className="">
                                    <h1 className='text-lg'>Expected Delivery:</h1>
                                    <h1 className='text-xl font-bold'>April 16, 2023</h1>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-20">
                                <div className="">
                                    <h1 className='text-lg'>Order Number:</h1>
                                    <h1 className='text-xl font-bold'>#9641</h1>
                                </div>
                                <div className="">
                                    <h1 className='text-lg'>Payment Method:</h1>
                                    <h1 className='text-xl font-bold'>Credit Card</h1>
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
                        <div className='grid grid-cols-2 py-4'>
                            <h1>Xiaomi Redmi Note 9 Global V. <span className='font-bold'>x 2</span></h1>
                            <h1 className='text-end'>$274:00</h1>
                        </div>
                        <span className="flex items-center">
                            <span className="h-px flex-1 bg-black"></span>
                        </span>
                        <div className='grid grid-cols-2 py-4'>
                            <h1>Office Chair Multifun <span className='font-bold'>x 1</span></h1>
                            <h1 className='text-end'>$274:00</h1>
                        </div>
                        <span className="flex items-center">
                            <span className="h-px flex-1 bg-black"></span>
                        </span>
                        <div className='grid grid-cols-2 py-4'>
                            <h1>Apple Watch Series 6 Stainless <span className='font-bold'>x 2</span></h1>
                            <h1 className='text-end'>$362:00</h1>
                        </div>
                        <span className="flex items-center">
                            <span className="h-px flex-1 bg-black"></span>
                        </span>
                        <div className='grid grid-cols-2 py-4'>
                            <h1>ody Works Mens Collection <span className='font-bold'>x 2</span></h1>
                            <h1 className='text-end'>$274:00</h1>
                        </div>
                        <span className="flex items-center">
                            <span className="h-px flex-1 bg-black"></span>
                        </span>
                        <div className='grid grid-cols-2 py-4'>
                            <h1>Subtotal</h1>
                            <h1 className='text-end font-thin'>$507.000</h1>
                        </div>
                        <span className="flex items-center">
                            <span className="h-px flex-1 bg-black"></span>
                        </span>
                        <div className='grid grid-cols-2 py-4'>
                            <h1>Shipping</h1>
                            <h1 className='text-end'>Delivery: $20.00</h1>
                        </div>
                        <span className="flex items-center">
                            <span className="h-px flex-1 bg-black"></span>
                        </span>
                        <div className='grid grid-cols-2 py-4 font-bold'>
                            <h1>Total</h1>
                            <h1 className='text-end'>$1,476.00</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrackOrder