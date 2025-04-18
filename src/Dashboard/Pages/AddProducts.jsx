import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddProducts = () => {

    const navigate = useNavigate();
    const [cats, setCat] = useState([])
    const [showName, setShowName] = useState({});
    const [showImagePreview, setShowImagePreview] = useState({});
    const fileInputRef = useRef();
    const handleClearFile = () => {
        setShowName('');
        setShowImagePreview('');
        fileInputRef.current.value = '';
    };

    // for products
    const [productName, setProductName] = useState('');
    const [selectedCat, setSelectedCat] = useState('');
    const [price, setPrice] = useState('');
    const [region, setRegion] = useState('');
    const [quality, setQuality] = useState('');
    const [status, setStatus] = useState('');
    const [quantity, setQuantity] = useState('');
    const [addedTime, setAddedTime] = useState('');
    const [orderNotes, setOrderNotes] = useState('');
    const [isTopRated, setIsTopRated] = useState('');
    const [isTopSelling, setIsTopSelling] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://server-brown-tau.vercel.app/api/get-all-cat');
                setCat(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const product = {
            productName,
            selectedCat,
            price,
            region,
            quality,
            status,
            quantity,
            addedTime,
            orderNotes,
            image: showName,
            isTopRated,
            isTopSelling
        };
        try {
            const res = await axios.post('https://gofirm-server.vercel.app/api/add-product', product,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            if (res.data) {
                toast.success('Category added successfully!!!')
                navigate('/');
            }
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };


    return (
        <div>
            <div className="grid p-4 grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                <div className="lg:col-span-3">
                    <div className='flex justify-between items-center pb-10 px-10'>
                        <h1 className='text-3xl font-bold'>Add Products</h1>
                        <Link to='/dashboard/add-products'>
                            <button className='px-10 py-2 border border-black hover:bg-green-500 duration-300'>Add Products</button>
                        </Link>
                    </div>
                    <div className='lg:w-full mx-auto px-10'>
                        <form onSubmit={handleSubmit}>
                            <div className='space-y-8'>
                                <div className='grid grid-cols-2 items-center gap-5 w-full'>
                                    <div className='relative'>
                                        <input onChange={(e) => setProductName(e.target.value)} required type="text" name='name' placeholder='Product Name' className='border border-black py-3 px-5 w-full' />
                                        <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Product Name</h1>
                                    </div>
                                    <div className='relative'>
                                        <select
                                            value={selectedCat}
                                            required
                                            onChange={(e) => setSelectedCat(e.target.value)}
                                            className='border border-black bg-transparent py-3 px-5 w-full'
                                        >
                                            <option value="">Select Category</option>
                                            {cats.map(cat => (
                                                <option key={cat._id} value={cat.name}>{cat.name}</option>
                                            ))}
                                        </select>
                                        <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Product Category</h1>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 items-center gap-5 w-full'>
                                    <div className='relative'>
                                        <input required onChange={(e) => setPrice(e.target.value)} type="number" placeholder='price (tk)' className='border border-black py-3 px-5 w-full' />
                                        <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Price</h1>
                                    </div>
                                    <div className='relative'>
                                        <input type="text" onChange={(e) => setRegion(e.target.value)} placeholder='region for this product' className='border border-black py-3 px-5 w-full' />
                                        <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Region</h1>
                                    </div>
                                </div>

                                <div className='grid grid-cols-2 gap-5 justify-center items-center'>
                                    <div className='relative'>
                                        <select
                                            className='border border-black bg-transparent py-3 px-5 w-full'
                                            onChange={(e) => setQuality(e.target.value)}
                                        >
                                            <option value="">Select Quality</option>
                                            <option value="high">High</option>
                                            <option value="medium">Medium</option>
                                            <option value="low">Low</option>
                                        </select>
                                        <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Quality</h1>
                                    </div>
                                    <div className='relative'>
                                        <select
                                            className='border border-black bg-transparent py-3 px-5 w-full'
                                            onChange={(e) => setStatus(e.target.value)}
                                        >
                                            <option value="">Select Status</option>
                                            <option value="available">Available</option>
                                            <option value="stockout">Stockout</option>
                                            <option value="up comming">Up Comming</option>
                                        </select>
                                        <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Status</h1>
                                    </div>
                                </div>

                                <div className='grid grid-cols-2 gap-5 justify-center items-center'>
                                    <div className='relative'>
                                        <select
                                            className='border border-black bg-transparent py-3 px-5 w-full'
                                            onChange={(e) => setIsTopRated(e.target.value)}
                                        >
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                        <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Top Rated</h1>
                                    </div>
                                    <div className='relative'>
                                        <select
                                            className='border border-black bg-transparent py-3 px-5 w-full'
                                            onChange={(e) => setIsTopSelling(e.target.value)}
                                        >
                                            <option value="">Select Rated?</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                        <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Top Selling</h1>
                                    </div>
                                </div>


                                <div className='grid grid-cols-2 gap-5 justify-center items-center'>
                                    <div className='relative'>
                                        <input onChange={(e) => setQuantity(e.target.value)} type="text" required placeholder='quantity' className='border border-black py-3 px-5 w-full' />
                                        <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Quantity</h1>
                                    </div>
                                    <div className='relative'>
                                        <input onChange={(e) => setAddedTime(e.target.value)} type="date" required placeholder='Addeded Time' className='border border-black py-3 px-5 w-full' />
                                        <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Addeded Time</h1>
                                    </div>
                                </div>
                                <div className=" my-10 ">
                                    {showName?.name ? (
                                        <div className=" mx-auto flex max-w-full items-center gap-x-6  rounded-lg border-2 border-dashed border-gray-400 p-5 bg-white">
                                            <img className="size-[100px] h-[100px] w-full max-w-[250px] rounded-lg object-cover" src={showImagePreview} alt={showName?.name} />
                                            <div className="flex-1 space-y-1.5 overflow-hidden">
                                                <h5 className=" text-xl font-medium tracking-tight truncate">{showName?.name}</h5>
                                                <p className=" text-gray-500">{(showName.size / 1024).toFixed(1)} KB</p>
                                            </div>
                                            <div onClick={handleClearFile}>
                                                <svg width={30} viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z" fill="#000000"></path></g>
                                                </svg>
                                            </div>
                                        </div>
                                    ) : (
                                        <label className=" mx-auto flex max-w-full flex-col items-center justify-center space-y-3 rounded-lg border-2 border-dashed border-gray-400 p-6 bg-white" htmlFor="file5">
                                            <svg width={50} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 42 32" enableBackground="new 0 0 42 32" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">  <g> <path fill="black" d="M33.958,12.988C33.531,6.376,28.933,0,20.5,0C12.787,0,6.839,5.733,6.524,13.384 C2.304,14.697,0,19.213,0,22.5C0,27.561,4.206,32,9,32h6.5c0.276,0,0.5-0.224,0.5-0.5S15.776,31,15.5,31H9c-4.262,0-8-3.972-8-8.5 C1,19.449,3.674,14,9,14h1.5c0.276,0,0.5-0.224,0.5-0.5S10.776,13,10.5,13H9c-0.509,0-0.99,0.057-1.459,0.139 C7.933,7.149,12.486,1,20.5,1C29.088,1,33,7.739,33,14v1.5c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5V14 c0-0.003,0-0.006,0-0.009c3.019,0.331,7,3.571,7,8.509c0,3.826-3.691,8.5-8,8.5h-7.5c-3.238,0-4.5-1.262-4.5-4.5V12.783l4.078,4.07 C25.176,16.951,25.304,17,25.432,17s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.513,0-0.707l-4.461-4.452 c-0.594-0.592-1.055-0.592-1.648,0l-4.461,4.452c-0.195,0.194-0.195,0.512,0,0.707s0.512,0.195,0.707,0L20,12.783V26.5 c0,3.804,1.696,5.5,5.5,5.5H33c4.847,0,9-5.224,9-9.5C42,17.333,37.777,13.292,33.958,12.988z" ></path>  </g></g></svg>
                                            <div className="space-y-1.5 text-center">
                                                <h5 className="whitespace-nowrap text-lg font-medium tracking-tight ">Upload your file</h5>
                                                <p className="text-sm text-gray-500">File Should be in PNG, JPEG or JPG formate</p>
                                            </div>
                                        </label>
                                    )}

                                    <input ref={fileInputRef} onChange={(e) => {
                                        if (e.target.files && e.target.files[0]) {
                                            const imageFile = e.target.files[0];
                                            setShowName(imageFile);
                                            setShowImagePreview(URL.createObjectURL(imageFile));
                                        }
                                    }} className="hidden" id="file5" type="file" />
                                </div>
                                <div className='relative'>
                                    <textarea
                                        id="OrderNotes"
                                        required
                                        className="mt-2 p-4 w-full border-black border align-top shadow-sm sm:text-sm"
                                        rows="4"
                                        onChange={(e) => setOrderNotes(e.target.value)}
                                        placeholder="Enter any additional order notes..."
                                    ></textarea>
                                    <h1 className='absolute -top-1 left-4 px-1 bg-white text-sm'>Product Details</h1>
                                </div>
                                <button type='submit' className='border-2 bg-black text-white border-black py-3 px-5 w-full'>
                                    Add Products
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProducts