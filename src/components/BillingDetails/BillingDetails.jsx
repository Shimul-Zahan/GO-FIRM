import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import PaymentCard from '../../Shared/PaymentCard';

const BillingDetails = () => {

    const [paymentOption, setPaymentOption] = useState('DeliveryStandard');
    const [showPaymentModal, setShowPaymentModal] = useState(false);

    const handleOptionChange = (e) => {
        console.log(e.target.value);
        setPaymentOption(e.target.value);
        if (e.target.value === 'payfirst') {
            setShowPaymentModal(true);
        } else {
            setShowPaymentModal(false);
        }
    };

    console.log(paymentOption);
    console.log(showPaymentModal);

    const handleBilling = (e) => {
        e.preventDefault();
    }

    return (
        <div className=''>
            <Navbar />

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-8 max-w-7xl mx-auto py-10">
                <div className="lg:col-span-3 bg-white shadow-2xl pb-10">
                    <div className='lg:w-full mx-auto px-10'>
                        <form onSubmit={handleBilling}>
                            <div>
                                <h1 className='text-4xl font-bold text-center my-10'>Billing Details Form</h1>
                            </div>
                            <button className='border border-black w-full border-dashed py-2 px-5 mb-8'>
                                <h1>Returning customer? <span className='text-green-500 underline border-gray-500 cursor-pointer'>Click here to login</span></h1>
                            </button>
                            <button className='border border-black w-full border-dashed py-2 px-5 mb-8'>
                                <h1>Have a coupon? <span className='text-green-500 underline border-green-500 cursor-pointer'>Click here to enter yout code</span></h1>
                            </button>
                            <div className='space-y-8'>
                                <div className='grid grid-cols-2 items-center gap-5 w-full'>
                                    <div className='relative'>
                                        <input type="text" placeholder='Shimul Zahan ' className='border border-black py-3 px-5 w-full' />
                                        <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>First Name</h1>
                                    </div>
                                    <div className='relative'>
                                        <input type="text" placeholder='Shimul Zahan ' className='border border-black py-3 px-5 w-full' />
                                        <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Last Name</h1>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <input type="text" placeholder='shimul LTD' className='border border-black py-3 px-5 w-full' />
                                    <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Company name (optional)</h1>
                                </div>
                                <div className='relative'>
                                    <input type="text" placeholder='Bangladesh (BD) ' className='border border-black py-3 px-5 w-full' />
                                    <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Country / Region</h1>
                                </div>
                                <div className='relative'>
                                    <input type="text" placeholder='House Number and Street Number ' className='border border-black py-3 px-5 w-full' />
                                    <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Street address</h1>
                                </div>
                                <div className='relative'>
                                    <input type="text" placeholder='Rajshahi ' className='border border-black py-3 px-5 w-full' />
                                    <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Town / City</h1>
                                </div>
                                <div className='grid grid-cols-2 gap-5 justify-center items-center'>
                                    <div className='relative'>
                                        <input type="text" placeholder='Bangladesh' className='border border-black py-3 px-5 w-full' />
                                        <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>State / County</h1>
                                    </div>
                                    <div className='relative'>
                                        <input type="text" placeholder='Zip Code ' className='border border-black py-3 px-5 w-full' />
                                        <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Postcode ZIP</h1>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <input type="text" placeholder='+880 12345678' className='border border-black py-3 px-5 w-full' />
                                    <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Phone</h1>
                                </div>
                                <div className='relative'>
                                    <input type="email" placeholder='abc@gmail.com ' className='border border-black py-3 px-5 w-full' />
                                    <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Email address </h1>
                                </div>
                                <div className='relative'>
                                    <textarea
                                        id="OrderNotes"
                                        className="mt-2 p-4 w-full border-black border align-top shadow-sm sm:text-sm"
                                        rows="4"
                                        placeholder="Enter any additional order notes..."
                                    ></textarea>
                                    <h1 className='absolute -top-1 left-4 px-1 bg-white text-sm'>Order notes (optional)</h1>
                                </div>
                                <button type='submit' className='border-2 bg-black text-white border-black py-3 px-5 w-full'>
                                    Submit Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="lg:col-span-2 bg-white shadow-2xl">
                    <section>
                        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                            <div class="mx-auto max-w-3xl">
                                <header class="text-center">
                                    <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
                                </header>

                                <div class="mt-8">
                                    <div class="mt-8 flex justify-end border-t border-gray-500 pt-8">
                                        <div class="w-screen max-w-lg space-y-4">
                                            <dl class="space-y-1 text-sm text-gray-700">
                                                <div class="flex justify-between items-center">
                                                    <dt>Mango</dt>
                                                    <dt>1Kg</dt>
                                                    <dd>£250</dd>
                                                </div>
                                                <div class="flex justify-between items-center">
                                                    <dt>Banana</dt>
                                                    <dt>1Kg</dt>
                                                    <dd>£250</dd>
                                                </div>
                                                <div class="flex justify-between items-center">
                                                    <dt>Fuck</dt>
                                                    <dt>1Kg</dt>
                                                    <dd>£250</dd>
                                                </div>
                                                <span className="flex items-center py-5">
                                                    <span className="h-px flex-1 bg-black"></span>
                                                </span>
                                                <div class="flex justify-between">
                                                    <dt>Subtotal</dt>
                                                    <dd>£250</dd>
                                                </div>

                                                <div class="flex justify-between">
                                                    <dt>VAT</dt>
                                                    <dd>£25</dd>
                                                </div>

                                                <div class="flex justify-between">
                                                    <dt>Discount</dt>
                                                    <dd>-£20</dd>
                                                </div>

                                                <div class="flex justify-between !text-base font-medium">
                                                    <dt>Total</dt>
                                                    <dd>£200</dd>
                                                </div>
                                            </dl>

                                            {/* radio marks */}

                                            <fieldset className="space-y-4">
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
                                                            onChange={handleOptionChange}
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
                                                            onChange={handleOptionChange}
                                                        />
                                                    </label>
                                                </div>
                                            </fieldset>

                                            {/* modal here */}
                                            {showPaymentModal && (
                                                <div className="modal">
                                                    <div className="modal-content">
                                                        <span className="close" onClick={() => setShowPaymentModal(false)}>&times;</span>
                                                        <PaymentCard />
                                                    </div>
                                                </div>
                                            )}
                                            {/* coupons here */}
                                            <div class="flex justify-end">
                                                <span
                                                    class="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke-width="1.5"
                                                        stroke="currentColor"
                                                        class="-ms-1 me-1.5 h-4 w-4"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                                                        />
                                                    </svg>

                                                    <p class="whitespace-nowrap text-xs">2 Discounts Applied</p>
                                                </span>
                                            </div>

                                            {/* checkout buttons */}
                                            <div class="flex justify-end">
                                                <a
                                                    href="#"
                                                    class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                                                >
                                                    Checkout
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div >
    )
}

export default BillingDetails