import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const MediaControlCard = ({ image, name, cat, price, status, product, setIsDeleting }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => {
        setIsOpen(true);
        setSelectedProduct(product)
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const {
        productName,
        selectedCat,
        price: productPrice,
        region,
        quality,
        status: productStatus,
        quantity,
        addedTime,
        orderNotes,
        isTopRated,
        isTopSelling
    } = product;

    // Set initial state with default values from the product prop
    const [updatedProductName, setUpdatedProductName] = useState(productName);
    const [updatedSelectedCat, setUpdatedSelectedCat] = useState(selectedCat);
    const [updatedPrice, setUpdatedPrice] = useState(productPrice);
    const [updatedRegion, setUpdatedRegion] = useState(region);
    const [updatedQuality, setUpdatedQuality] = useState(quality);
    const [updatedStatus, setUpdatedStatus] = useState(productStatus);
    const [updatedQuantity, setUpdatedQuantity] = useState(quantity);
    const [updatedAddedTime, setUpdatedAddedTime] = useState(addedTime);
    const [updatedOrderNotes, setUpdatedOrderNotes] = useState(orderNotes);
    const [updatedIsTopRated, setUpdatedIsTopRated] = useState(isTopRated);
    const [updatedIsTopSelling, setUpdatedIsTopSelling] = useState(isTopSelling);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedProduct = {
            productName: updatedProductName,
            selectedCat: updatedSelectedCat,
            price: updatedPrice,
            region: updatedRegion,
            quality: updatedQuality,
            status: updatedStatus,
            quantity: updatedQuantity,
            addedTime: updatedAddedTime,
            orderNotes: updatedOrderNotes,
            isTopRated: updatedIsTopRated,
            isTopSelling: updatedIsTopSelling
        };

        console.log(updatedProduct);

        try {
            const res = await axios.put(`http://localhost:5000/api/update-product/${product._id}`, updatedProduct);
            console.log(res.data);
            if (res.data) {
                closeModal()
                toast.success('Product updated successfully!!!');
            }
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const [cats, setCat] = useState([])
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

    const handleDelete = async () => {
        setIsDeleting(true);
        try {
            const res = await axios.delete(`http://localhost:5000/api/delete-product/${product._id}`);
            if (res.data) {
                toast.success('Product deleted successfully!!!');
            }
        } catch (error) {
            console.error('Error deleting product:', error);
            toast.error('Error deleting product. Please try again later.');
        } finally {
            setIsDeleting(false);
        }
    };



    return (
        <div className="flex bg-white shadow-md rounded-lg h-32">
            <img
                src={`http://localhost:5000/image/${image}`}
                className="w-32 h-32 object-cover rounded-tl-lg rounded-bl-lg"
            />
            <div className="flex flex-col w-full">
                <div className="px-4 ">
                    <h5 className="text-lg font-bold">{name}</h5>
                    <p className="text-gray-600 text-xs py-[2px]">{cat}</p>
                    <p className="text-gray-600 text-xs py-[2px]">Here is some fruits details</p>
                    <div className='flex justify-between items-center text-sm font-bold py-[2px]'>
                        <h1 className=''>{price}</h1>
                        <h1>{status}</h1>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-2 px-4">
                    <button onClick={() => openModal(product)} className="py-2 mr-2">
                        <h1 className='text-xs hover:text-red-500'>Update</h1>
                    </button>
                    <button onClick={handleDelete} className="py-2 mr-2">
                        <h1 className='text-xs hover:text-green-500'>Delete</h1>
                    </button>
                    <button className="py-2">
                        <h1 className='text-xs hover:text-green-500'>Disable</h1>
                    </button>
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
                        <div>
                            <div className="grid p-4 grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                                <div className="lg:col-span-3">
                                    <div className='lg:w-full mx-auto px-10'>
                                        <form onSubmit={handleUpdate}>
                                            <div className='space-y-8'>
                                                <div className='grid grid-cols-2 items-center gap-5 w-full'>
                                                    <div className='relative'>
                                                        <input value={updatedProductName} onChange={(e) => setUpdatedProductName(e.target.value)} required type="text" name='name' placeholder='Product Name' className='border border-black py-3 px-5 w-full' />
                                                        <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Product Name</h1>
                                                    </div>
                                                    <div className='relative'>
                                                        <select
                                                            value={updatedSelectedCat}
                                                            required
                                                            onChange={(e) => setUpdatedSelectedCat(e.target.value)}
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
                                                        <input value={updatedPrice} required onChange={(e) => setUpdatedPrice(e.target.value)} type="number" placeholder='price (tk)' className='border border-black py-3 px-5 w-full' />
                                                        <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Price</h1>
                                                    </div>
                                                    <div className='relative'>
                                                        <input value={region} type="text" onChange={(e) => setUpdatedRegion(e.target.value)} placeholder='region for this product' className='border border-black py-3 px-5 w-full' />
                                                        <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Region</h1>
                                                    </div>
                                                </div>

                                                <div className='grid grid-cols-2 gap-5 justify-center items-center'>
                                                    <div className='relative'>
                                                        <select
                                                            value={updatedQuality}
                                                            className='border border-black bg-transparent py-3 px-5 w-full'
                                                            onChange={(e) => setUpdatedQuality(e.target.value)}
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
                                                            value={updatedStatus}
                                                            className='border border-black bg-transparent py-3 px-5 w-full'
                                                            onChange={(e) => setUpdatedStatus(e.target.value)}
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
                                                    <select
                                                        value={updatedIsTopRated}
                                                        className='border border-black bg-transparent py-3 px-5 w-full'
                                                        onChange={(e) => setUpdatedIsTopRated(e.target.value)}
                                                    >
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </select>
                                                    <div className='relative'>
                                                        <select
                                                            value={updatedIsTopSelling}
                                                            className='border border-black bg-transparent py-3 px-5 w-full'
                                                            onChange={(e) => setUpdatedIsTopSelling(e.target.value)}
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
                                                        <input value={updatedQuantity} onChange={(e) => setUpdatedQuantity(e.target.value)} type="text" required placeholder='quantity' className='border border-black py-3 px-5 w-full' />
                                                        <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Quantity</h1>
                                                    </div>
                                                    <div className='relative'>
                                                        <input value={updatedAddedTime} onChange={(e) => setUpdatedAddedTime(e.target.value)} type="date" required placeholder='Addeded Time' className='border border-black py-3 px-5 w-full' />
                                                        <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Addeded Time</h1>
                                                    </div>
                                                </div>
                                                <div className='relative'>
                                                    <textarea
                                                        id="OrderNotes"
                                                        required
                                                        value={updatedOrderNotes}
                                                        className="mt-2 p-4 w-full border-black border align-top shadow-sm sm:text-sm"
                                                        rows="4"
                                                        onChange={(e) => setUpdatedOrderNotes(e.target.value)}
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
                    </div>
                </div>
            )}
        </div>
    );
};

export default MediaControlCard;
