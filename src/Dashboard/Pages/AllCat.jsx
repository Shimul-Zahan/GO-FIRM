import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AllCat = () => {

    const [cats, setCat] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/get-all-cat');
                setCat(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchData();
    }, []);

    const [productCounts, setProductCounts] = useState([]);

    useEffect(() => {
        const fetchProductCounts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/cat-count');
                setProductCounts(response.data);
            } catch (error) {
                console.error('Error fetching product counts by category:', error);
            }
        };

        fetchProductCounts();
    }, []);

    return (
        <div>
            <div className="relative p-10">
                <div className='flex justify-between items-center pb-10'>
                    <h1 className='text-3xl font-bold'>All Categories</h1>
                    <Link to='/dashboard/add-products'>
                        <button className='px-10 py-2 border border-black hover:bg-green-500 duration-300'>Add Category</button>
                    </Link>
                </div>
                <div className='max-w-7xl mx-auto'>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                        {
                            cats && cats.map(cat =>
                                <div
                                    key={cat._id}
                                    className="rounded-lg flex justify-between flex-row items-center gap-1 border border-black p-5 px-10">
                                    <div>
                                        <h1 className='text-2xl font-bold'>{cat.name}</h1>
                                        <h1 className='text-lg'>{cat.subName}</h1>
                                        <h1 className='text-lg font-bold'>{getCountByCategory(cat?.name)}</h1>
                                    </div>
                                    <img src={`http://localhost:5000/image/${cat.image}`} className='h-32' alt="" />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )

    // shot total count here

    function getCountByCategory(name) {
        const categoryCount = productCounts.find(item => item.name === name);
        return categoryCount ? `${categoryCount.count} Items` : '0 Items';
    }

}

export default AllCat