import { useContext, useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import ProductCard from "../ProductCard/ProductCard";
import { MyContext } from "../../../Auth/AuthProvide";
import axios from "axios";
import { CiShoppingCart } from "react-icons/ci";
import { PiArrowsLeftRight, PiEyeLight } from "react-icons/pi";
import { IoBagRemoveOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const ShopPage = () => {

    const { login_user } = useContext(MyContext);
    const [prods, setProds] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };


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


    // Function to add product to cart
    const addToCart = async (selectedProduct) => {
        const { email } = login_user;
        const productWithUserEmail = { ...selectedProduct, email };
        try {
            const response = await axios.post('https://server-brown-tau.vercel.app/api/add-to-cart', productWithUserEmail);
            console.log(response.data);
            toast.success(`${response?.data?.message}`);
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };

    // Function to add product to cart
    const addToWhislist = async (selectedProduct) => {
        const { email } = login_user;
        const productWithUserEmail = { ...selectedProduct, email };
        console.log(productWithUserEmail);
        try {
            const response = await axios.post('https://server-brown-tau.vercel.app/api/add-to-whislist', productWithUserEmail);
            console.log(response.data);
            toast.success(`${response?.data?.message}`);
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };

    // Function to add product to cart
    const addToCompare = async (selectedProduct) => {
        const { email } = login_user;
        const productWithUserEmail = { ...selectedProduct, email };
        console.log(productWithUserEmail);
        try {
            const response = await axios.post('https://server-brown-tau.vercel.app/api/add-to-compare', productWithUserEmail);
            console.log(response.data);
            toast.success(`${response?.data?.message}`);
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };

    // searxh here
    const handleInputChange = async (e) => {
        try {
            const response = await axios.get(`https://server-brown-tau.vercel.app/api/search?search=${e.target.value}`);
            setProds(response.data);
            // setSearchResults(response.data);
        } catch (error) {
            console.error('Error searching products:', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="max-w-[1296px] mx-auto py-5">
                <div className="grid grid-cols-4">
                    {/* Side bar */}
                    <div className="max-w-[330px] flex flex-col gap-10">
                        {/* Product status */}
                        <div>
                            <div className="mb-8">
                                <p className="font-medium text-[18px]">Product Status</p>
                                <div className="divider m-0 h-0"></div>
                            </div>
                            <div className="form-control">
                                <label className="cursor-pointer flex items-center gap-3">
                                    <input type="radio" name="status" value="inStock" className="radio h-[18px] w-[18px] rounded-none radio-accent" />
                                    <span className="text-[16px] text-[#55585b]">In Stock</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="cursor-pointer flex items-center gap-3">
                                    <input type="radio" name="status" value="upcoming" className="radio h-[18px] w-[18px] rounded-none radio-accent" />
                                    <span className="text-[16px] text-[#55585b]">Upcoming</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="cursor-pointer flex items-center gap-3">
                                    <input type="radio" name="status" value="notAvailable" className="radio h-[18px] w-[18px] rounded-none radio-accent" />
                                    <span className="text-[16px] text-[#55585b]">Not Available</span>
                                </label>
                            </div>
                        </div>
                        {/* Top Rated */}
                        <div>
                            <div className="mb-7">
                                <p className="font-medium text-[18px]">Top Rated Products</p>
                                <div className="divider m-0 h-0"></div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="flex gap-4">
                                    <div>
                                        <img className="h-[70px] w-[70px]" src="https://shofi-grocery.vercel.app/images/product/product-3.jpg" alt="" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <div>
                                                <div className="rating rating-xs">
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                </div>
                                            </div>
                                            <span className="text-xs text-[#55585b]">(5)</span>
                                        </div>
                                        <h2 className="text-[16px] font-medium">Marshmallow Candy White</h2>
                                        <p className="text-[14px] text-[#55585b]">$55.00</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div>
                                        <img className="h-[70px] w-[70px]" src="https://shofi-grocery.vercel.app/images/product/product-3.jpg" alt="" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <div>
                                                <div className="rating rating-xs">
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                </div>
                                            </div>
                                            <span className="text-xs text-[#55585b]">(5)</span>
                                        </div>
                                        <h2 className="text-[16px] font-medium">Marshmallow Candy White</h2>
                                        <p className="text-[14px] text-[#55585b]">$55.00</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div>
                                        <img className="h-[70px] w-[70px]" src="https://shofi-grocery.vercel.app/images/product/product-3.jpg" alt="" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <div>
                                                <div className="rating rating-xs">
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                </div>
                                            </div>
                                            <span className="text-xs text-[#55585b]">(5)</span>
                                        </div>
                                        <h2 className="text-[16px] font-medium">Marshmallow Candy White</h2>
                                        <p className="text-[14px] text-[#55585b]">$55.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Popular brands */}
                        <div>
                            <div className="mb-7">
                                <p className="font-medium text-[18px]">Popular brands</p>
                                <div className="divider m-0 h-0"></div>
                            </div>
                            <div className="grid grid-cols-2 gap-8">
                                <img src="https://i.ibb.co/Ydf3C1H/brand-1.png" alt="" />
                                <img src="https://i.ibb.co/GTzWqnP/brand-2.png" alt="" />
                                <img src="https://i.ibb.co/YPzHpCD/brand-3.png" alt="" />
                                <img src="https://i.ibb.co/n3Wktzh/brand-4.png" alt="" />
                                <img src="https://i.ibb.co/xqTCvsL/brand-5.png" alt="" />
                                <img src="https://i.ibb.co/SfBRy61/brand-6.png" alt="" />
                            </div>
                        </div>
                        {/* Reset filter */}
                        <div>
                            <div className="mb-7">
                                <p className="font-medium text-[18px]">Popular brands</p>
                                <div className="divider m-0 h-0"></div>
                            </div>
                            <button className="bg-[#678e61] px-[48px] py-[9px] text-white rounded-full">Reset Filter</button>
                        </div>
                    </div>

                    <div className="mt-12 col-span-3 ml-8">

                        {/* search */}
                        <div className="h-11 mb-10 pl-10 w-full border border-black flex justify-center items-center rounded-3xl relative">
                            <input type="text" onChange={handleInputChange} name="searchItem" placeholder="Search item here" className="h-full w-full rounded-2xl pl-10 outline-none border-none" />
                            <div className="absolute top-0 left-0">
                                <div className="h-11 w-[45px] flex justify-center items-center text-2xl">
                                    <IoMdSearch />
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 cursor-pointer">
                                <div className="bg-black h-11 w-[105px] rounded-tr-2xl rounded-br-2xl text-white flex justify-center items-center text-base">
                                    <p className="text-lg">Search</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-7">
                            <div className="flex gap-2 items-center">
                                <button className="border border-black p-2">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.3327 6.01341V2.98675C16.3327 2.04675 15.906 1.66675 14.846 1.66675H12.1527C11.0927 1.66675 10.666 2.04675 10.666 2.98675V6.00675C10.666 6.95341 11.0927 7.32675 12.1527 7.32675H14.846C15.906 7.33341 16.3327 6.95341 16.3327 6.01341Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.3327 15.18V12.4867C16.3327 11.4267 15.906 11 14.846 11H12.1527C11.0927 11 10.666 11.4267 10.666 12.4867V15.18C10.666 16.24 11.0927 16.6667 12.1527 16.6667H14.846C15.906 16.6667 16.3327 16.24 16.3327 15.18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.33268 6.01341V2.98675C7.33268 2.04675 6.90602 1.66675 5.84602 1.66675H3.15268C2.09268 1.66675 1.66602 2.04675 1.66602 2.98675V6.00675C1.66602 6.95341 2.09268 7.32675 3.15268 7.32675H5.84602C6.90602 7.33341 7.33268 6.95341 7.33268 6.01341Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.33268 15.18V12.4867C7.33268 11.4267 6.90602 11 5.84602 11H3.15268C2.09268 11 1.66602 11.4267 1.66602 12.4867V15.18C1.66602 16.24 2.09268 16.6667 3.15268 16.6667H5.84602C6.90602 16.6667 7.33268 16.24 7.33268 15.18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </button>
                                <button className="border h-[40px] w-[40px] flex items-center justify-center">
                                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 7.11108H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 1H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 13.2222H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </button>
                                <p>Showing 1-9 of 17 results</p>
                            </div>
                            {/* Dropdown */}
                            <div>

                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {prods && prods.map(product =>
                                    <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                                        <div className="h-96 w-72">
                                            <img src={`https://server-brown-tau.vercel.app/image/${product.image}`} alt="" />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent"></div>
                                        <div className='text-4xl ml-5 w-full space-y-2 absolute top-[35%] left-2 translate-y-[-50%]  group-hover:block transition-transform delay-300 transform hidden hover:block '>
                                            <button onClick={() => addToCart(product)} className='relative w-[70%] cursor-pointer showMenu'>
                                                <CiShoppingCart className='bg-white font-thin p-1 rounded-full hover:bg-[#678E61]' />
                                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                                    <h1 className='z-50'>Add to cart</h1>
                                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                                </div>
                                            </button>
                                            <button onClick={() => openModal(product)} className='relative w-[60%] cursor-pointer showMenu'>
                                                <PiEyeLight className='bg-white p-1 rounded-full hover:bg-[#678E61]' />
                                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                                    <h1 className='z-50'>Quick View</h1>
                                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                                </div>
                                            </button>
                                            <button onClick={() => addToCompare(product)} className='relative w-[70%] cursor-pointer showMenu'>
                                                <PiArrowsLeftRight className='bg-white p-2 rounded-full hover:bg-[#678E61]' />
                                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                                    <h1 className='z-50'>Add to Compare</h1>
                                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                                </div>
                                            </button>
                                            <button onClick={() => addToWhislist(product)} className='relative w-[60%] mt-10 cursor-pointer showMenu'>
                                                <IoBagRemoveOutline className='bg-white p-2 rounded-full hover:bg-[#678E61]' />
                                                <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-black left-12 top-1/2 translate-y-[-50%]'>
                                                    <h1 className='z-50'>Add wishlist</h1>
                                                    <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-black text-sm h-3 absolute'></div>
                                                </div>
                                            </button>
                                        </div>
                                        <Link to={`/details/${product?._id}`}>
                                            <div className="mt-5 text-lg">
                                                <h1 className="font-thin">{product?.selectedCat}</h1>
                                                <h1 className="font-semibold text-2xl">{product?.productName}</h1>
                                                <h1>{product?.status}</h1>
                                                <h1>{product?.price}</h1>
                                            </div>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                        {isOpen && (
                            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                                <div className="fixed inset-0 bg-transparent blur-sm"></div>
                                <div className="absolute max-w-7xl bg-white p-8 rounded-lg z-50">
                                    <button onClick={closeModal} className="absolute top-0 right-0 m-2 text-gray-600 hover:text-gray-800">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mb-10">
                                        <div className="">
                                            <img src={`https://server-brown-tau.vercel.app/image/${selectedProduct.image}`} className="h-[600px] w-[600px]" alt="" />
                                        </div>
                                        <div className="space-y-5 lg:px-10">
                                            <h1 className='text-sm'>{selectedProduct?.selectedCat}</h1>
                                            <h1 className='text-4xl font-bold'>{selectedProduct?.productName}</h1>
                                            <div className='flex justify-start items-center gap-5'>
                                                <button className='bg-green-500 px-2 py-1'>{selectedProduct?.status}</button>
                                            </div>
                                            <p className='text-lg'>{selectedProduct?.orderNotes}<span className='text-green-300 font-bold px-5'>See more</span></p>
                                            <h1 className='text-2xl font-bold'>$25.00</h1>
                                            <div>
                                                <h1 className='text-sm py-1'>Quantity</h1>
                                                <div className='flex justify-start items-center gap-5'>
                                                    <div className='flex justify-start items-center gap-8 text-xl bg-gray-200 w-[30%] py-2 px-4'>
                                                        <button className='text-xl'>-</button>
                                                        <p className='text-xl'>1</p>
                                                        <button className='text-xl'>+</button>
                                                    </div>
                                                    <div onClick={() => addToCart(product)} className='border hover:bg-green-500 border-black w-full text-center py-2'>
                                                        <button>Add To Cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='border border-black bg-green-500 w-full text-center py-2'>
                                                <button>Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopPage;