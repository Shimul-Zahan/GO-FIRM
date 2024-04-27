import React from 'react'
import user from '../../assets/c-review/user-2.jpg'
import quote from '../../assets/c-review/testimonial-quote-2.png'
import img from '../../assets/c-review/img.png'

const CustomerReview = () => {
    return (
        <div className='max-w-7xl mx-auto border border-gray-200 rounded-xl p-16 my-20'>
            <div className='relative grid grid-cols-4 gap-64'>
                <div className='col-span-1'>
                    <div className='h-72 w-72 border border-black rounded-full'>
                        <img src={user} alt="" className='h-64 w-64 rounded-full' />
                    </div>
                    <div>
                        <div className='absolute bottom-3 left-48 h-16 w-16 bg-white rounded-full flex justify-center items-center'>
                            <div className='h-12 w-12 bg-green-500 rounded-full flex justify-center items-center'>
                                <img src={quote} alt="" className='' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-3 pr-10 space-y-5'>
                    <img src={img} alt="" />
                    <h1 className='text-4xl font-bold'>Our Happy Customers</h1>
                    <p className='text-xl font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum obcaecati nulla? Illo reprehenderit veritatis sapiente? Ullam voluptate rem ipsa, reprehenderit debitis amet animi omnis, ipsum totam, suscipit possimus voluptates!100</p>
                    <div>
                        <div>
                            <h1 className='font-bold text-xl'>Shimul Zahan</h1>
                            <p className='text-sm'>Web Developer</p>
                        </div>
                        <div className='flex justify-end items-center'>
                            <button className='hover:scale-105'>Left</button>
                            <span className='px-5'>|</span>
                            <button className='hover:scale-105'>Right</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerReview