import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import image from '../../assets/popularP/frozen.jpg'
import { Link } from 'react-router-dom'
import { MyContext } from '../../Auth/AuthProvide'
import axios from 'axios'

const CartItem = () => {

    const { login_user, state } = useContext(MyContext);
    const [prods, setProds] = useState([]);
    const [white, setWhite] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [updatedPrice, setUpdatedPrice] = useState(totalPrice);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/get-cart?email=${login_user?.email}`);
                setProds(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchData();
    }, [state]);

    useEffect(() => {
        const calculateTotalPrice = () => {
            let totalPrice = 0;
            prods.forEach(item => {
                totalPrice += item.price;
            });
            setTotalPrice(totalPrice);
        };

        calculateTotalPrice();
    }, [prods]);


    const handleDeleteItem = async (productId) => {
        try {
            await axios.delete(`http://localhost:5000/api/delete-cart-item/${productId}`);
            const response = await axios.get(`http://localhost:5000/api/get-cart?email=${login_user?.email}`);
            setProds(response.data);
        } catch (error) {
            console.error('Error deleting item from cart:', error);
        }
    };


    return (
        <>
            <Navbar />
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-7 lg:gap-8 max-w-7xl mx-auto py-10">
                <div className="lg:col-span-5 pb-10">
                    <div className='py-5'>
                        <div className='grid lg:grid-cols-10 py-2 px-2 bg-gray-100'>
                            <h1 className='col-span-5'>Product</h1>
                            <h1 className='col-span-2'>Price</h1>
                            <h1 className='col-span-2'>Quantity</h1>
                            <h1 className='col-span-1'></h1>
                        </div>
                    </div>
                    {prods && prods.map(p =>
                        <div className='py-5'>
                            <div className='grid lg:grid-cols-10 py-2 px-2 justify-center items-center'>
                                <div className='col-span-5'>
                                    <div className='flex justify-start gap-2 items-center'>
                                        <img src={`http://localhost:5000/image/${p.image}`} alt="" className='h-24' />
                                        <h1>{p.productName}</h1>
                                    </div>
                                </div>
                                <div className='col-span-2'>{p.price} TK</div>
                                <div className='col-span-2'>1 KG</div>
                                <button onClick={() => handleDeleteItem(p._id)} className='col-span-1 hover:text-red-500'>Remove</button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="lg:col-span-2 bg-white shadow-2xl">
                    <section>
                        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                            <div class="mx-auto max-w-3xl">
                                <div class="mt-8">
                                    <div class="mt-8 flex justify-end pt-8">
                                        <div class="w-screen max-w-lg space-y-4">
                                            <dl class="space-y-1 border-b border-black text-sm text-gray-700">
                                                <div class="flex pb-5 font-bold justify-between items-center">
                                                    <dt>Subtotal</dt>
                                                    <dd>{totalPrice} TK</dd>
                                                </div>
                                            </dl>
                                            {/* radio buttons */}
                                            <fieldset className="space-y-4 border-b border-black">
                                                <legend className="sr-only">Pyment First</legend>

                                                <div>
                                                    <label
                                                        htmlFor="DeliveryStandard"
                                                        className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-lg font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                                                    >
                                                        <div className='text-lg'>
                                                            <p className="text-gray-700 text-sm">Payment First</p>

                                                            <p className="mt-1 text-gray-900 text-xs">Free</p>
                                                        </div>

                                                        <input
                                                            type="radio"
                                                            name="DeliveryOption"
                                                            value="payfirst"
                                                            id="DeliveryStandard"
                                                            className="size-5 border-gray-300 text-blue-500"
                                                            defaultChecked
                                                            onClick={() => setUpdatedPrice(totalPrice)}
                                                        // onChange={handleOptionChange}
                                                        />
                                                    </label>
                                                </div>

                                                <div>
                                                    <label
                                                        htmlFor="DeliveryPriority"
                                                        className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                                                    >
                                                        <div>
                                                            <p className="text-gray-700 text-sm">Cash on Delivery</p>

                                                            <p className="mt-1 text-gray-900 text-xs">60 tk</p>
                                                        </div>

                                                        <input
                                                            type="radio"
                                                            name="DeliveryOption"
                                                            value="cashon"
                                                            id="DeliveryPriority"
                                                            className="size-5 border-gray-300 text-blue-500"
                                                            // onChange={handleOptionChange}
                                                            onClick={() => setUpdatedPrice(totalPrice + 60)}
                                                        />
                                                    </label>
                                                </div>

                                                <div className='pb-5'>
                                                    <label
                                                        htmlFor="DeliveryPriority"
                                                        className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                                                    >
                                                        <div>
                                                            <p className="text-gray-700 text-sm">Free Shipping</p>

                                                            <p className="mt-1 text-gray-900 text-xs">00 tk</p>
                                                        </div>

                                                        <input
                                                            type="radio"
                                                            name="DeliveryOption"
                                                            value="free"
                                                            id="DeliveryPriority"
                                                            className="size-5 border-gray-300 text-blue-500"
                                                            // onChange={handleOptionChange}
                                                            onClick={() => setUpdatedPrice(totalPrice)}
                                                        />
                                                    </label>
                                                </div>
                                            </fieldset>
                                            <dl class="space-y-1 border-b border-black text-sm text-gray-700">
                                                <div class="flex pb-5 font-bold justify-between items-center">
                                                    <dt>Total</dt>
                                                    <dd>{updatedPrice}</dd>
                                                </div>
                                            </dl>
                                            <div class="flex justify-end">
                                                <Link to='/checkout'
                                                    class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                                                >
                                                    Checkout
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default CartItem