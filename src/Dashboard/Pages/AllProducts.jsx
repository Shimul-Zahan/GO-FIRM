import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'
import Pagination from '../Components/Pagination'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AllProducts = () => {

    const [prods, setProds] = useState([]);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/get-all-products');
                setProds(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchData();
    }, [isDeleting]);

    return (
        <div>
            <div className="grid p-4 grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 overflow-y-scroll">
                <div className="lg:col-span-3">
                    <div className='flex justify-between items-center pb-10'>
                        <h1 className='text-3xl font-bold'>All Products</h1>
                        <Link to='/dashboard/add-products'>
                            <button className='px-10 py-2 border border-black hover:bg-green-500 duration-300'>Add Products</button>
                        </Link>
                    </div>
                    <div className='grid lg:grid-cols-3 gap-5'>
                        {prods && prods.map(product =>
                            <ProductCard
                                image={product?.image}
                                name={product?.productName}
                                cat={product?.selectedCat}
                                price={product?.price}
                                rating={product?.status}
                                product={product}
                                setIsDeleting={setIsDeleting}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProducts