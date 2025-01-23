import React, { useState } from 'react';
import { FaUser, FaCreditCard, FaAddressCard, FaBoxOpen, FaBell, FaEnvelope, FaMailBulk, FaLock } from 'react-icons/fa';
import Navbar from '../../Navbar/Navbar';
import user from '../../../assets/login/login-shape-4.png';
import { Outlet } from 'react-router-dom';

const UserDashboardLayout = () => {
    const [active, setActive] = useState('Profile'); // State to track the active link

    const menuItems = [
        { name: 'Profile', icon: <FaUser /> },
        { name: 'Billing Information', icon: <FaCreditCard /> },
        { name: 'Address', icon: <FaAddressCard /> },
        { name: 'My Orders', icon: <FaBoxOpen /> },
        { name: 'Notification', icon: <FaBell /> },
        { name: 'Message', icon: <FaEnvelope /> },
        { name: 'Mails', icon: <FaMailBulk /> },
        { name: 'Change Password', icon: <FaLock /> },
    ];

    return (
        <>
            <Navbar />
            <div className="px-16 mx-auto py-10 min-h-screen">
                <div className="grid grid-cols-4 justify-center items-start gap-4 lg:grid-cols-4 lg:gap-8">
                    {/* Sidebar */}
                    <div className="rounded-lg py-1 shadow-xl bg-white col-span-1">
                        <ul>
                            {menuItems.map((item) => (
                                <li
                                    key={item.name}
                                    onClick={() => setActive(item.name)}
                                    className={`py-3 px-8 rounded-sm flex items-center gap-4 cursor-pointer ${active === item.name ? 'bg-green-500 text-white' : 'hover:bg-gray-200'
                                        }`}
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Profile Content */}
                    <div className='col-span-3'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDashboardLayout;
