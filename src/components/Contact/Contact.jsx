import React from 'react';
import bgImage from '../../assets/login/login-bg.png';
import contact from '../../assets/contact/contact-icon-1.png';
import contact1 from '../../assets/contact/contact-icon-2.png';
import contact2 from '../../assets/contact/contact-icon-3.png';
import Navbar from '../Navbar/Navbar';

const Contact = () => {
    return (
        <>
            <Navbar />
            <div
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="grid grid-cols-1 gap-4  bg-white bg-blend-overlay bg-opacity-60 lg:grid-cols-6 lg:gap-8 max-w-7xl mx-auto py-10 min-h-screen">
                    <div className="lg:col-span-4">
                        <div className='lg:w-full mx-auto p-16'>
                            <form>
                                <div>
                                    <h1 className='text-4xl font-bold text-center my-10'>Send Your Message</h1>
                                </div>
                                <div className='space-y-8'>
                                    <div className='relative'>
                                        <input type="text" placeholder='Shimul Zahan ' className='border border-black py-3 px-5 w-full' />
                                        <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Your Name</h1>
                                    </div>
                                    <div className='relative'>
                                        <input type="text" placeholder='shimul@gmail.com ' className='border border-black py-3 px-5 w-full' />
                                        <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Your Email</h1>
                                    </div>
                                    <div className='relative'>
                                        <input type="text" placeholder='Feedback ' className='border border-black py-3 px-5 w-full' />
                                        <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Your Subject</h1>
                                    </div>
                                    <div className='relative'>
                                        <textarea
                                            id="OrderNotes"
                                            className="mt-2 p-4 w-full border-black border align-top shadow-sm sm:text-sm"
                                            rows="4"
                                            placeholder="Enter any additional order notes..."
                                        ></textarea>
                                        <h1 className='absolute -top-1 left-4 px-1 bg-white text-sm'>Your Message</h1>
                                    </div>
                                    <button type='submit' className='border-2 bg-black text-white border-black py-3 px-5 w-full'>
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="space-y-10 flex justify-center items-center flex-col">
                        <div className='space-y-5'>
                            <img src={contact} alt="" />
                            <div className='text-xl font-bold cursor-pointer space-y-2'>
                                <h1>contact</h1>
                                <h1>+670 413 90 762</h1>
                            </div>
                        </div>
                        <div className='space-y-5'>
                            <img src={contact1} alt="" />
                            <div className='text-xl font-bold cursor-pointer space-y-2'>
                                <h1>contact</h1>
                                <h1>+670 413 90 762</h1>
                            </div>
                        </div>
                        <div className='space-y-5'>
                            <img src={contact2} alt="" />
                            <div className='text-xl font-bold cursor-pointer space-y-2'>
                                <h1>contact</h1>
                                <h1>+670 413 90 762</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
