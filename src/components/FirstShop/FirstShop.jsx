/* eslint-disable react/no-children-prop */
import { PiArrowsLeftRight } from "react-icons/pi";
import { CiShoppingCart } from "react-icons/ci";
import { PiEyeLight } from "react-icons/pi";
import { IoBagRemoveOutline } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MyContext } from "../../Auth/AuthProvide";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


const FirstShop = () => {

    const { login_user, setState } = useContext(MyContext);
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
        setState(false)
        const { email } = login_user;
        const productWithUserEmail = { ...selectedProduct, email };
        try {
            const response = await axios.post('https://server-brown-tau.vercel.app/api/add-to-cart', productWithUserEmail);
            console.log(response.data);
            setState(true)
            toast.success(`${response?.data?.message}`);
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };

    // Function to add product to cart
    const addToWhislist = async (selectedProduct) => {
        setState(false)
        const { email } = login_user;
        const productWithUserEmail = { ...selectedProduct, email };
        console.log(productWithUserEmail);
        try {
            const response = await axios.post('https://server-brown-tau.vercel.app/api/add-to-whislist', productWithUserEmail);
            console.log(response.data);
            setState(true)
            toast.success(`${response?.data?.message}`);
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };

    // Function to add product to cart
    const addToCompare = async (selectedProduct) => {
        setState(false)
        const { email } = login_user;
        const productWithUserEmail = { ...selectedProduct, email };
        console.log(productWithUserEmail);
        try {
            const response = await axios.post('https://server-brown-tau.vercel.app/api/add-to-compare', productWithUserEmail);
            console.log(response.data);
            setState(true)
            toast.success(`${response?.data?.message}`);
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };

    return (
        <div className="mt-16">
            <h2 className="text-center font-medium">Shop by Category</h2>
            <h1 className="text-center font-bold mt-3 text-4xl" >Popular on the GOFIRM store</h1>
            <div className="flex items-center justify-center mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {prods && prods.map(product =>
                        <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                            <div className="h-96 w-72">
                                <img src={`https://gofirm-server.vercel.app/api/image/${product.image}`} alt="" />
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
                                <img src={`https://gofirm-server.vercel.app/api/image/${selectedProduct.image}`} className="h-[600px] w-[600px]" alt="" />
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
                                        <div onClick={() => addToCart(selectedProduct)} className='border hover:bg-green-500 border-black w-full text-center py-2'>
                                            <button>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='border border-black bg-green-500 w-full text-center py-2'>
                                    <Link to='/cart'>Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FirstShop;

// style={{ backgroundImage: "url('https://shofi-grocery.vercel.app/images/product/product-2.jpg')" }} 