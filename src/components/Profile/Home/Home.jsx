import React from 'react'
import user from '../../../assets/login/login-shape-4.png'
import Navbar from '../../Navbar/Navbar'

const HomeProfile = () => {
    return (
        <>
            <Navbar />
            <div className='max-w-7xl mx-auto py-10 min-h-screen'>
                <div className="grid grid-cols-1 justify-center items-center gap-4 lg:grid-cols-3 lg:gap-8">
                    <div className="rounded-lg py-1 shadow-xl bg-white">
                        <ul className=''>
                            <li className='bg-green-500 py-3 px-8 rounded-sm'>Profile</li>
                            <li className=' py-3 px-8 rounded-sm'>Information</li>
                            <li className=' py-3 px-8 rounded-sm'>Address</li>
                            <li className=' py-3 px-8 rounded-sm'>My Orders</li>
                            <li className=' py-3 px-8 rounded-sm'>Notification</li>
                            <li className=' py-3 px-8 rounded-sm'>Change Password</li>
                        </ul>
                    </div>
                    <div className="rounded-lg shadow-xl bg-white lg:col-span-2 p-4 space-y-10">
                        <div className='flex justify-between items-center'>
                            <div className='flex justify-start items-center gap-5'>
                                <img src={user} alt="" className='w-32 h-32 rounded-full shadow-2xl' />
                                <div>
                                    <h1 className='text-4xl font-bold py-1'>Welcome Mr. Admin!</h1>
                                    <p className='text-sm'>You have 08 notifications</p>
                                </div>
                            </div>
                            <div className='border border-black px-10 py-3'>
                                <button>Log Out</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
                            <div className="h-32 rounded-lg bg-gray-200">
                                <img src={user} alt="" className='w-full h-full flex justify-center items-center' />
                            </div>
                            <div className="h-32 rounded-lg bg-gray-200">
                                <img src={user} alt="" className='w-full h-full flex justify-center items-center' />
                            </div>
                            <div className="h-32 rounded-lg bg-gray-200">
                                <img src={user} alt="" className='w-full h-full flex justify-center items-center' />
                            </div>
                            <div className="h-32 rounded-lg bg-gray-200">
                                <img src={user} alt="" className='w-full h-full flex justify-center items-center' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeProfile