import React from 'react'
import ProductCard from '../Components/ProductCard'
import Pagination from '../Components/Pagination'
import { Link } from 'react-router-dom'

const AllProducts = () => {
    return (
        <div>
            <div className="grid p-4 grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                <div className="lg:col-span-2">
                    <div className='flex justify-between items-center pb-10'>
                        <h1 className='text-3xl font-bold'>All Products</h1>
                        <Link to='/dashboard/add-products'>
                            <button className='px-10 py-2 border border-black hover:bg-green-500 duration-300'>Add Products</button>
                        </Link>
                    </div>
                    <div className='grid lg:grid-cols-3 gap-5'>
                        <ProductCard image={'https://img.freepik.com/premium-photo/food-isolated_181303-35.jpg?w=1380'} />
                        <ProductCard image={'https://images.pexels.com/photos/209439/pexels-photo-209439.jpeg?cs=srgb&dl=pexels-pixabay-209439.jpg&fm=jpg'} />
                        <ProductCard image={'https://img.freepik.com/premium-photo/food-isolated_181303-35.jpg?w=1380'} />
                        <ProductCard image={'https://images.pexels.com/photos/209439/pexels-photo-209439.jpeg?cs=srgb&dl=pexels-pixabay-209439.jpg&fm=jpg'} />
                        <ProductCard image={'https://img.freepik.com/premium-photo/food-isolated_181303-35.jpg?w=1380'} />
                        <ProductCard image={'https://images.pexels.com/photos/209439/pexels-photo-209439.jpeg?cs=srgb&dl=pexels-pixabay-209439.jpg&fm=jpg'} />
                        <ProductCard image={'https://img.freepik.com/premium-photo/food-isolated_181303-35.jpg?w=1380'} />
                        <ProductCard image={'https://images.pexels.com/photos/209439/pexels-photo-209439.jpeg?cs=srgb&dl=pexels-pixabay-209439.jpg&fm=jpg'} />
                        <ProductCard image={'https://img.freepik.com/premium-photo/food-isolated_181303-35.jpg?w=1380'} />
                        <ProductCard image={'https://images.pexels.com/photos/209439/pexels-photo-209439.jpeg?cs=srgb&dl=pexels-pixabay-209439.jpg&fm=jpg'} />
                        <ProductCard image={'https://img.freepik.com/premium-photo/food-isolated_181303-35.jpg?w=1380'} />
                        <ProductCard image={'https://images.pexels.com/photos/209439/pexels-photo-209439.jpeg?cs=srgb&dl=pexels-pixabay-209439.jpg&fm=jpg'} />
                        <ProductCard image={'https://img.freepik.com/premium-photo/food-isolated_181303-35.jpg?w=1380'} />
                        <ProductCard image={'https://images.pexels.com/photos/209439/pexels-photo-209439.jpeg?cs=srgb&dl=pexels-pixabay-209439.jpg&fm=jpg'} />
                        <ProductCard image={'https://img.freepik.com/premium-photo/food-isolated_181303-35.jpg?w=1380'} />
                    </div>
                </div>
                <div className="relative">
                    <div className='flex justify-between items-center pb-10'>
                        <h1 className='text-3xl font-bold'>All Categories</h1>
                        <Link to='/dashboard/add-products'>
                            <button className='px-10 py-2 border border-black hover:bg-green-500 duration-300'>Add Category</button>
                        </Link>
                    </div>
                    <div className='max-w-7xl mx-auto'>
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
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
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2'>
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProducts