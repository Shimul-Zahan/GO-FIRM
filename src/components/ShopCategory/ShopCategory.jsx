import React from 'react'
import Navbar from '../Navbar/Navbar'

const ShopCategory = () => {
    return (
        <>
            <Navbar />
            <div className='max-w-7xl mx-auto py-20'>
                <h1 className='text-4xl font-bold'>Shop Category</h1>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 py-8">
                    <div className="h-32 rounded-lg bg-gray-200 flex justify-center items-center flex-col gap-1">
                        <h1 className='text-2xl font-bold'>Frozen Foods</h1>
                        <h1 className='text-lg'>5 Products </h1>
                    </div>
                    <div className="h-32 rounded-lg bg-gray-200 flex justify-center items-center flex-col gap-1">
                        <h1 className='text-2xl font-bold'>Meat and Fish</h1>
                        <h1 className='text-lg'>2 Products </h1>
                    </div>
                    <div className="h-32 rounded-lg bg-gray-200 flex justify-center items-center flex-col gap-1">
                        <h1 className='text-2xl font-bold'>Milk & Dairy</h1>
                        <h1 className='text-lg'>2 Products </h1>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                    <div className="h-32 rounded-lg bg-gray-200 flex justify-center items-center flex-col gap-1">
                        <h1 className='text-2xl font-bold'>Beverages</h1>
                        <h1 className='text-lg'>3 Products </h1>
                    </div>
                    <div className="h-32 rounded-lg bg-gray-200 flex justify-center items-center flex-col gap-1">
                        <h1 className='text-2xl font-bold'>Vegetables</h1>
                        <h1 className='text-lg'>2 Products </h1>
                    </div>
                    <div className="h-32 rounded-lg bg-gray-200 flex justify-center items-center flex-col gap-1">
                        <h1 className='text-2xl font-bold'>Fruits</h1>
                        <h1 className='text-lg'>3 Products </h1>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ShopCategory