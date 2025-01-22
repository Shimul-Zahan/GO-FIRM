import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import image from '../../assets/popularP/frozen.jpg'
import { Link } from 'react-router-dom'
import { MyContext } from '../../Auth/AuthProvide'
import axios from 'axios'

const Whitelist = () => {

    const { login_user, state, setState } = useContext(MyContext);
    const [white, setWhite] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://server-brown-tau.vercel.app/api/get-white?email=${login_user?.email}`);
                setWhite(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchData();
    }, [state]);


    const handleDelete = async (itemId) => {
        setState(false)
        try {
            await axios.delete(`https://server-brown-tau.vercel.app/api/whitelist/${itemId}`);
            setState(true)
            setWhite(white.filter(item => item._id !== itemId));
        } catch (error) {
            console.error('Error deleting whitelist item:', error);
        }
    };


    return (
        <div className='min-h-screen'>
            <Navbar />
            <div className="max-w-7xl mx-auto py-16">
                <div className="pb-10">
                    <div className='py-5'>
                        <div className='grid lg:grid-cols-2 py-2 px-2 bg-gray-100'>
                            <div className='grid grid-cols-4 justify-center items-center pl-10'>
                                <h1 className='col-span-3'>Product</h1>
                                <h1 className='col-span-1'>Price</h1>
                            </div>
                            <div className='grid grid-cols-4 justify-center items-center'>
                                <h1 className='col-span-3'>Add Cart</h1>
                                <h1 className='col-span-1'>Action</h1>
                            </div>
                        </div>
                    </div>
                    {
                        white && white.map(w =>
                            <div className='py-5'>
                                <div className='grid lg:grid-cols-2'>
                                    <div className='grid grid-cols-4 justify-center items-center'>
                                        <h1 className='col-span-3'>
                                            <div className='flex justify-start gap-2 items-center'>
                                                <img src={`https://gofirm-server.vercel.app/api/image/${w.image}`} alt="" className='h-24' />
                                                <h1>{w.productName}</h1>
                                            </div>
                                        </h1>
                                        <h1 className='col-span-1'>{w.price}</h1>
                                    </div>
                                    <div className='grid grid-cols-4 justify-center items-center'>
                                        <Link to='/cart' className='col-span-3 bg-green-500 px-10 py-2 w-[35%]'>View Cart</Link>
                                        <button onClick={() => handleDelete(w._id)} className='col-span-1 hover:text-red-500 flex justify-normal'>Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <div className='py-16'>
                        <Link to='/cart' className='border border-black px-10 py-3 hover:bg-green-500 duration-300 mt-16'>Go to Cart</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Whitelist