/* eslint-disable react/no-children-prop */
import { PiArrowsLeftRight } from "react-icons/pi";
import { CiShoppingCart } from "react-icons/ci";
import { PiEyeLight } from "react-icons/pi";
import { IoBagRemoveOutline } from "react-icons/io5";
const FirstShop = () => {
    return (
        <div className="mt-16">
            <h2 className="text-center font-medium">Shop by Category</h2>
            <h1 className="text-center font-bold mt-3 text-4xl" >Popular on the Shofi store</h1>
            <div className="flex min-h-screen items-center justify-center mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                        <div className="h-96 w-72">
                            <img className="h-full w-full rounded-md object-cover group-hover:scale-110 transition-transform duration-500" src="https://klbtheme.com/qualis/wp-content/uploads/2018/12/p5.jpg" alt="" />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent"></div>

                        <div className='text-4xl ml-5 w-full space-y-8 absolute top-[35%] left-2 translate-y-[-50%]  group-hover:block transition-transform delay-300 transform hidden hover:block '>
                            <div className='relative w-[70%] cursor-pointer showMenu'>
                                <CiShoppingCart className='bg-white font-thin p-1 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Add to cart</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                            <div className='relative w-[60%] cursor-pointer showMenu'>
                                <PiEyeLight className='bg-white p-1 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Quick View</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                            <div className='relative w-[70%] cursor-pointer showMenu'>
                                <PiArrowsLeftRight className='bg-white p-2 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Add to Compare</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                            <div className='relative w-[60%] mt-10 cursor-pointer showMenu'>
                                <IoBagRemoveOutline className='bg-white p-2 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Remove wishlist</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mt-5">
                                <h1 className="font-medium">Baby Food</h1>
                                <h1 className="font-semibold">Ergonomic Linen Pants</h1>
                                <h1>Baby Food</h1>
                                <h1>$25.00</h1>
                            </div>
                        </div>
                    </div>
                    <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                        <div className="h-96 w-72">
                            <img className="h-full w-full rounded-md object-cover group-hover:scale-110 transition-transform duration-500" src="https://shofi-grocery.vercel.app/images/product/product-4.jpg" alt="" />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent"></div>

                        <div className='text-4xl ml-5 w-full space-y-8 absolute top-[35%] left-2 translate-y-[-50%]  group-hover:block transition-transform delay-300 transform hidden hover:block '>
                            <div className='relative w-[70%] cursor-pointer showMenu'>
                                <CiShoppingCart className='bg-white font-thin p-1 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Add to cart</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                            <div className='relative w-[60%] cursor-pointer showMenu'>
                                <PiEyeLight className='bg-white p-1 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Short View</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                            <div className='relative w-[70%] cursor-pointer showMenu'>
                                <PiArrowsLeftRight className='bg-white p-2 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Compare items</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                            <div className='relative w-[60%] mt-10 cursor-pointer showMenu'>
                                <IoBagRemoveOutline className='bg-white p-2 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Remove wishlist</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mt-5">
                                <h1 className="font-medium">Baby Food</h1>
                                <h1 className="font-semibold">Ergonomic Linen Pants</h1>
                                <h1>Baby Food</h1>
                                <h1>$25.00</h1>
                            </div>
                        </div>
                    </div>
                    <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                        <div className="h-96 w-72">
                            <img className="h-full w-full rounded-md object-cover group-hover:scale-110 transition-transform duration-500" src="https://shofi-grocery.vercel.app/images/product/product-2.jpg" alt="" />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent"></div>

                        <div className='text-4xl ml-5 w-full space-y-8 absolute top-[35%] left-2 translate-y-[-50%]  group-hover:block transition-transform delay-300 transform hidden hover:block '>
                            <div className='relative w-[70%] cursor-pointer showMenu'>
                                <CiShoppingCart className='bg-white font-thin p-1 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Add to cart</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                            <div className='relative w-[60%] cursor-pointer showMenu'>
                                <PiEyeLight className='bg-white p-1 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Short View</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                            <div className='relative w-[70%] cursor-pointer showMenu'>
                                <PiArrowsLeftRight className='bg-white p-2 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Compare items</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                            <div className='relative w-[60%] mt-10 cursor-pointer showMenu'>
                                <IoBagRemoveOutline className='bg-white p-2 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Remove wishlist</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mt-5">
                                <h1 className="font-medium">Baby Food</h1>
                                <h1 className="font-semibold">Ergonomic Linen Pants</h1>
                                <h1>Baby Food</h1>
                                <h1>$25.00</h1>
                            </div>
                        </div>
                    </div>
                    <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                        <div className="h-96 w-72">
                            <img className="h-full w-full rounded-md object-cover group-hover:scale-110 transition-transform duration-500" src="https://shofi-grocery.vercel.app/images/product/product-1.jpg" alt="" />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent"></div>

                        <div className='text-4xl ml-5 w-full space-y-8 absolute top-[35%] left-2 translate-y-[-50%]  group-hover:block transition-transform delay-300 transform hidden hover:block '>
                            <div className='relative w-[70%] cursor-pointer showMenu'>
                                <CiShoppingCart className='bg-white font-thin p-1 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Add to cart</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                            <div className='relative w-[60%] cursor-pointer showMenu'>
                                <PiEyeLight className='bg-white p-1 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Short View</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                            <div className='relative w-[70%] cursor-pointer showMenu'>
                                <PiArrowsLeftRight className='bg-white p-2 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Compare items</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                            <div className='relative w-[60%] mt-10 cursor-pointer showMenu'>
                                <IoBagRemoveOutline className='bg-white p-2 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Remove wishlist</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mt-5">
                                <h1 className="font-medium">Baby Food</h1>
                                <h1 className="font-semibold">Ergonomic Linen Pants</h1>
                                <h1>Baby Food</h1>
                                <h1>$25.00</h1>
                            </div>
                        </div>
                    </div>
                    <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                        <div className="h-96 w-72">
                            <img className="h-full w-full rounded-md object-cover group-hover:scale-110 transition-transform duration-500" src="https://klbtheme.com/qualis/wp-content/uploads/2018/12/p11.jpg" alt="" />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent"></div>

                        <div className='text-4xl ml-5 w-full space-y-8 absolute top-[35%] left-2 translate-y-[-50%]  group-hover:block transition-transform delay-300 transform hidden hover:block '>
                            <div className='relative w-[70%] cursor-pointer showMenu'>
                                <CiShoppingCart className='bg-white font-thin p-1 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Add to cart</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                            <div className='relative w-[60%] cursor-pointer showMenu'>
                                <PiEyeLight className='bg-white p-1 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Short View</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                            <div className='relative w-[70%] cursor-pointer showMenu'>
                                <PiArrowsLeftRight className='bg-white p-2 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Compare items</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                            <div className='relative w-[60%] mt-10 cursor-pointer showMenu'>
                                <IoBagRemoveOutline className='bg-white p-2 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Remove wishlist</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mt-5">
                                <h1 className="font-medium">Baby Food</h1>
                                <h1 className="font-semibold">Ergonomic Linen Pants</h1>
                                <h1>Baby Food</h1>
                                <h1>$25.00</h1>
                            </div>
                        </div>
                    </div>
                    <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                        <div className="h-96 w-72">
                            <img className="h-full w-full rounded-md object-cover group-hover:scale-110 transition-transform duration-500" src="https://klbtheme.com/qualis/wp-content/uploads/2018/12/p12.jpg" alt="" />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent"></div>

                        <div className='text-4xl ml-5 w-full space-y-8 absolute top-[35%] left-2 translate-y-[-50%]  group-hover:block transition-transform delay-300 transform hidden hover:block '>
                            <div className='relative w-[70%] cursor-pointer showMenu'>
                                <CiShoppingCart className='bg-white font-thin p-1 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Add to cart</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                            <div className='relative w-[60%] cursor-pointer showMenu'>
                                <PiEyeLight className='bg-white p-1 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Short View</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                            <div className='relative w-[70%] cursor-pointer showMenu'>
                                <PiArrowsLeftRight className='bg-white p-2 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Compare items</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                            <div className='relative w-[60%] mt-10 cursor-pointer showMenu'>
                                <IoBagRemoveOutline className='bg-white p-2 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Remove wishlist</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mt-5">
                                <h1 className="font-medium">Baby Food</h1>
                                <h1 className="font-semibold">Ergonomic Linen Pants</h1>
                                <h1>Baby Food</h1>
                                <h1>$25.00</h1>
                            </div>
                        </div>
                    </div>
                    <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                        <div className="h-96 w-72">
                            <img className="h-full w-full rounded-md object-cover group-hover:scale-110 transition-transform duration-500" src="https://shofi-grocery.vercel.app/images/product/product-2.jpg" alt="" />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent"></div>

                        <div className='text-4xl ml-5 w-full space-y-8 absolute top-[35%] left-2 translate-y-[-50%]  group-hover:block transition-transform delay-300 transform hidden hover:block '>
                            <div className='relative w-[70%] cursor-pointer showMenu'>
                                <CiShoppingCart className='bg-white font-thin p-1 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Add to cart</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                            <div className='relative w-[60%] cursor-pointer showMenu'>
                                <PiEyeLight className='bg-white p-1 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Short View</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                            <div className='relative w-[70%] cursor-pointer showMenu'>
                                <PiArrowsLeftRight className='bg-white p-2 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Compare items</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                            <div className='relative w-[60%] mt-10 cursor-pointer showMenu'>
                                <IoBagRemoveOutline className='bg-white p-2 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Remove wishlist</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mt-5">
                                <h1 className="font-medium">Baby Food</h1>
                                <h1 className="font-semibold">Ergonomic Linen Pants</h1>
                                <h1>Baby Food</h1>
                                <h1>$25.00</h1>
                            </div>
                        </div>
                    </div>
                    <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                        <div className="h-96 w-72">
                            <img className="h-full w-full rounded-md object-cover group-hover:scale-110 transition-transform duration-500" src="https://shofi-grocery.vercel.app/images/product/product-2.jpg" alt="" />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent"></div>

                        <div className='text-4xl ml-5 w-full space-y-8 absolute top-[35%] left-2 translate-y-[-50%]  group-hover:block transition-transform delay-300 transform hidden hover:block '>
                            <div className='relative w-[70%] cursor-pointer showMenu'>
                                <CiShoppingCart className='bg-white font-thin p-1 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Add to cart</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                            <div className='relative w-[60%] cursor-pointer showMenu'>
                                <PiEyeLight className='bg-white p-1 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Short View</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                            <div className='relative w-[70%] cursor-pointer showMenu'>
                                <PiArrowsLeftRight className='bg-white p-2 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Compare items</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                            <div className='relative w-[60%] mt-10 cursor-pointer showMenu'>
                                <IoBagRemoveOutline className='bg-white p-2 rounded-full hover:bg-[#678E61]' />
                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                    <h1 className='z-50'>Remove wishlist</h1>
                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mt-5">
                                <h1 className="font-medium">Baby Food</h1>
                                <h1 className="font-semibold">Ergonomic Linen Pants</h1>
                                <h1>Baby Food</h1>
                                <h1>$25.00</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstShop;

// style={{ backgroundImage: "url('https://shofi-grocery.vercel.app/images/product/product-2.jpg')" }} 