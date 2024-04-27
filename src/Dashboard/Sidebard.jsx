import React, { useContext, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import logoDark from '../assets/grab/shape-2.png'
import { MdHomeFilled } from "react-icons/md";
import './sidebar.css'
import { FaCartPlus } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import { AiFillHourglass } from "react-icons/ai";
import { MdAdminPanelSettings } from "react-icons/md";
import { GrDocumentPerformance } from "react-icons/gr";
import { MdOutlinePayments } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { IoSettings } from 'react-icons/io5'
import { MyContext } from '../Auth/AuthProvide';

const Sidebard = () => {

    const { isSidebarOpen, darkMode } = useContext(MyContext);

    return (
        <section className='flex justify-start items-start w-full'>
            <div className={`${isSidebarOpen ? 'w-0 duration-500' : 'w-96 duration-500'} flex h-screen overflow-y-scroll bg-[#21295c] flex-col justify-between border-e`}>
                <div className="py-6">
                    <Link to='/' className='flex justify-center items-center gap-2'>
                        <svg id="logo-16" width="109" height="43" viewBox="0 0 109 43" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M64.9315 11.4284C62.1883 8.6852 58.9316 6.5091 55.3475 5.0245C51.7633 3.5399 47.9219 2.7758 44.0424 2.7758C40.1629 2.7758 36.3215 3.5399 32.7373 5.0245C29.1532 6.5091 25.8965 8.6852 23.1533 11.4284L44.0424 32.3174L64.9315 11.4284Z" class="ccompli1" fill="#FFD200"></path> <path d="M44.0686 32.3475C46.8118 35.0907 50.0684 37.2667 53.6526 38.7513C57.2367 40.2359 61.0782 41 64.9577 41C68.837 41 72.679 40.2359 76.263 38.7513C79.847 37.2667 83.104 35.0907 85.847 32.3475L64.9577 11.4584L44.0686 32.3475Z" class="ccompli2" fill="#06E07F"></path> <path d="M44.017 32.3429C41.2738 35.0861 38.0171 37.2621 34.433 38.7467C30.8488 40.2313 27.0074 40.9954 23.1279 40.9954C19.2484 40.9954 15.407 40.2313 11.8228 38.7467C8.2387 37.2621 4.982 35.0861 2.2388 32.3429L23.1279 11.4538L44.017 32.3429Z" class="ccustom" fill="#E3073C"></path> <path d="M64.9831 11.433C67.726 8.6898 70.983 6.5138 74.567 5.0292C78.151 3.5446 81.993 2.7805 85.872 2.7805C89.752 2.7805 93.593 3.5446 97.177 5.0292C100.761 6.5138 104.018 8.6898 106.761 11.433L85.872 32.3221L64.9831 11.433Z" class="ccustom" fill="#1F84EF"></path> </svg>
                        {/* <img src={logoDark} alt="" className='h-10 w-w-full' /> */}
                        <h1 className='text-white text-center text-3xl font-bold'>GO FIRM</h1>
                    </Link>
                    <div className='mt-3'>
                        <NavLink to='/dashboard' className='flex justify-between items-center text-[#b9a683] hover:bg-[#b9a683] hover:text-black p-5'>
                            <div className='flex justify-start items-center gap-3'>
                                <MdHomeFilled className='text-2xl' />
                                <h1 className='text-base'>HOME</h1>
                            </div>
                            <div className='pr- text-[#21295c]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                            </div>
                        </NavLink>
                        <div>
                            <h1 className='px-12 mt-5 text-base text-[#b9a683] mb-5 uppercase'>Products Maintains</h1>
                        </div>
                        <ul className="space-y-1 px-5">
                            <NavLink to='/dashboard/products' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <FaCartPlus className='text-base' />
                                    <h1 className='text-base'>Registration</h1>
                                </div>
                                <div className='pr- text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/customer' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <FaUsers className='text-base' />
                                    <h1 className='text-base'>Payments</h1>
                                </div>
                                <div className='pr- text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/transactions' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <MdOutlinePayments className='text-base' />
                                    <h1 className='text-base'>Transactions</h1>
                                </div>
                                <div className='pr- text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/geography' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <BiWorld className='text-base' />
                                    <h1 className='text-base'>Geography</h1>
                                </div>
                                <div className='pr- text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                        </ul>
                    </div>

                    {/* navlinks */}
                    <div className='mt-6'>
                        <h1 className="px-12 mt-5 text-base text-[#b9a683] mb-5 uppercase">Payment Maintain</h1>
                        <ul className="space-y-1 px-5">
                            <NavLink to='/dashboard/overview' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <AiFillHourglass className='text-base' />
                                    <h1 className='text-base'>Overview</h1>
                                </div>
                                <div className='pr- text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/daily' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <FaRegCalendar className='text-base' />
                                    <h1 className='text-base'>Daily</h1>
                                </div>
                                <div className='pr- text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/monthly' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <FaCalendarAlt className='text-base' />
                                    <h1 className='text-base'>Monthly</h1>
                                </div>
                                <div className=' text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/breakdown' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <MdHomeFilled className='text-3xl' />
                                    <h1 className='text-base'>Breakdown</h1>
                                </div>
                                <div className='pr- text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                        </ul>
                    </div>
                    <div className='mt-6'>
                        <h1 className="px-12 mt-5 text-xl text-[#b9a683] mb-5">Users and Moderators Management</h1>
                        <ul className="space-y-1 px-5">
                            <NavLink to='/dashboard/user' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <FaUsers className='text-base' />
                                    <h1 className='text-base'>Users</h1>
                                </div>
                                <div className='pr- text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/admin' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <MdAdminPanelSettings className='text-base' />
                                    <h1 className='text-base'>Admin</h1>
                                </div>
                                <div className='pr- text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>
                            <NavLink to='/dashboard/performance' className='flex justify-between items-center text-[#ddd5c7] hover:bg-[#b9a683] hover:text-black px-5 py-2'>
                                <div className='flex justify-start items-center gap-3'>
                                    <GrDocumentPerformance className='text-base' />
                                    <h1 className='text-base'>Performance</h1>
                                </div>
                                <div className='pr- text-[#21295c]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="24px" viewBox="0 0 28 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m10 17l5-5-5-5" /></svg>
                                </div>
                            </NavLink>

                        </ul>
                    </div>
                </div>
                <div className="sticky inset-x-0 bottom-0 z-50 flex justify-between bg-[#21295c] items-center pr-4 border-t border-gray-100 text-[#b9a683] ">
                    <a href="#" className="flex items-center gap-2 p-4">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            className="h-10 w-10 rounded-full object-cover"
                        />

                        <div>
                            <p className="text-sm">
                                <strong className="block font-medium">Eric Frusciante</strong>

                                <span> eric@frusciante.com </span>
                            </p>
                        </div>
                    </a>
                    <IoSettings className='text-xl text-[#ddd5c7]' />
                </div>
            </div>
            {/* heres dashboard outlets */}
            <div className="w-full overflow-x-scroll">
                <div className=''>
                    <Navbar />
                </div>
                <Outlet />
            </div>
        </section>
    )
}

export default Sidebard
