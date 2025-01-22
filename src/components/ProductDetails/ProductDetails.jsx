import React, { useEffect, useState } from 'react'
import icon from '../../assets/details/Screenshot 2024-04-26 033159.png'
import payment from '../../assets/details/Screenshot 2024-04-26 033351.png'
import Navbar from '../Navbar/Navbar'
import Reviews from '../../Shared/Reviews'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const ProductDetails = () => {

    const [prods, setProds] = useState([]);

    const { id } = useParams()
    console.log(id);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://server-brown-tau.vercel.app/api/get-all-products');
                setProds(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchData();
    }, []);

    const product = prods?.find(p => p._id === id);
    console.log(product);

    return (
        <>
            <Navbar />
            <div className='max-w-7xl mx-auto py-10'>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mb-10">
                    <div className="">
                        <img src={`http://localhost:5000/image/${product?.image}`} className="object-cover rounded-tl-lg rounded-bl-lg" />
                    </div>
                    <div className="space-y-5 lg:px-10">
                        <h1 className='text-sm'>{product?.selectedCat}</h1>
                        <h1 className='text-3xl font-bold'>{product?.productName}</h1>
                        <div className='flex justify-start items-center gap-5'>
                            <button className='bg-green-500 px-2 py-1'>In Stock</button>
                            <p className='text-lg'>***** (1 Reviews)</p>
                        </div>
                        <p className='text-lg'>{product?.orderNotes}<span className='text-green-300 font-bold'>See more</span></p>
                        <h1 className='text-2xl font-bold'>{product?.price} TK</h1>
                        <div>
                            <h1 className='text-sm py-1'>{product?.quantity}</h1>
                            <div className='flex justify-start items-center gap-5'>
                                <div className='flex justify-start items-center gap-8 text-xl bg-gray-200 w-[30%] py-2 px-4'>
                                    <button className='text-xl'>-</button>
                                    <p className='text-xl'>1</p>
                                    <button className='text-xl'>+</button>
                                </div>
                                <div className='border border-black w-full text-center py-2'>
                                    <button>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className='border border-black bg-green-500 w-full text-center py-2'>
                            <Link to='cart'>Buy Now</Link>
                        </div>
                        <h1>SKU: NVB7SDVX45</h1>
                        <h1>Category: Frozen Foods</h1>
                        <div className='flex justify-start items-center gap-3'>
                            <img src={icon} alt="" />
                            <h1>30 days easy returns</h1>
                        </div>
                        <div className='flex justify-start items-center gap-3'>
                            <img src={icon} alt="" />
                            <h1>Order yours before 2.30pm for same day dispatch</h1>
                        </div>
                        <div>
                            <img src={payment} alt="" />
                        </div>
                    </div>
                </div>
                <section className="mt-10">
                    <div className=" flex justify-center items-center">
                        <div className="flex gap-6">
                            <li className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700" > Description </li>

                            <li className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700" > Additional Information </li>

                            <li className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700" > Review (1) </li>

                        </div>
                    </div>
                    <span className="flex items-center mt-1">
                        <span className="h-px flex-1 bg-black"></span>
                    </span>

                </section>
                {/* tabs */}
                <div className='space-y-4 max-w-6xl mx-auto py-10'>
                    <h1 className='text-xl font-medium'>Baby Food</h1>
                    <h1 className='text-3xl font-bold'>Ergonomic Linen Pants</h1>
                    <p className='text-lg'>In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.</p>
                </div>
                <div className="flow-root rounded-lg border border-gray-100 max-w-6xl mx-auto py-10 shadow-sm">
                    <dl className="-my-3 divide-y divide-gray-100 text-sm">
                        <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-100 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Title</dt>
                            <dd className="text-gray-700 sm:col-span-2">Mr</dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-100 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Name</dt>
                            <dd className="text-gray-700 sm:col-span-2">John Frusciante</dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-100 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Occupation</dt>
                            <dd className="text-gray-700 sm:col-span-2">Guitarist</dd>
                        </div>
                    </dl>
                </div>
                <div className='py-10'>
                    <Reviews />
                </div>
            </div>
        </>
    )
}

export default ProductDetails