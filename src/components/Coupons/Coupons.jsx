import React from 'react'
import { RiErrorWarningLine } from "react-icons/ri";
import Navbar from '../Navbar/Navbar';
import Coupon from '../../Shared/coupon';

const CouponCard = () => {
    return (
        <>
            <Navbar />
            <div className='max-w-7xl mx-auto min-h-screen'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 py-10'>
                    <Coupon />
                    <Coupon />
                    <Coupon />
                    <Coupon />
                    <Coupon />
                    <Coupon />
                </div>
            </div>
        </>
    )
}

export default CouponCard