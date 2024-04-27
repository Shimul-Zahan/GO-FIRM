import React from 'react'
import Navbar from '../Navbar/Navbar'
import image1 from '../../assets/popularP/frozen.jpg'
import image2 from '../../assets/popularP/slider2.jpg'

const Compare = () => {
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
                            <img src={image1} alt="" />
                            <h1 className='text-xl font-bold'>Ergonomic Linen Pants</h1>
                        </div>
                        <div className='flex justify-center items-center flex-col space-y-2 border border-gray-400 py-5'>
                            <img src={image1} alt="" />
                            <h1 className='text-xl font-bold'>Ergonomic Linen Pants</h1>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-[120px_1fr]">
                    <div class="border-l border-b border-r border-gray-400 flex justify-center items-center">
                        <h1 className='font-bold'>Description</h1>
                    </div>
                    <div class="grid grid-cols-2">
                        <div className='flex justify-center items-center flex-col space-y-2 border-b border-r border-gray-400 py-5'>
                            <h1 className='px-5 text-base text-center'>In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as </h1>
                        </div>
                        <div className='flex justify-center items-center flex-col space-y-2 border-b border-r border-gray-400 py-5'>
                            <h1 className='px-5 text-base text-center'>In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as </h1>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-[120px_1fr]">
                    <div class="border-l border-b border-r border-gray-400 flex justify-center items-center">
                        <h1 className='font-bold'>Price</h1>
                    </div>
                    <div class="grid grid-cols-2">
                        <div className='flex justify-center items-center flex-col space-y-2 border-b border-r border-gray-400 py-5'>
                            <h1 className='px-5 text-base text-center font-bold'>$25.00</h1>
                        </div>
                        <div className='flex justify-center items-center flex-col space-y-2 border-b border-r border-gray-400 py-5'>
                            <h1 className='px-5 text-base text-center font-bold'>$35.00</h1>
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
                        <h1 className='font-bold'>Rating</h1>
                    </div>
                    <div class="grid grid-cols-2">
                        <div className='flex justify-center items-center flex-col space-y-2 border-b border-r border-gray-400 py-5'>
                            <h1 className='px-5 text-base text-center'>4.6 later start hobe</h1>
                        </div>
                        <div className='flex justify-center items-center flex-col space-y-2 border-b border-r border-gray-400 py-5'>
                            <h1 className='px-5 text-base text-center'>4.8 later start hobe</h1>
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