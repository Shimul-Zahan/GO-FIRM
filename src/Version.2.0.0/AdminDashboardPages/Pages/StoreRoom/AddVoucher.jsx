import React, { useState } from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';

const AddCouponComponent = () => {
    const [voucherData, setVoucherData] = useState({
        name: 'August Gift Voucher',
        discount: 14,
        expiryDate: '',
        description: '',
        isActive: true,
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setVoucherData({
            ...voucherData,
            [id]: value,
        });
    };

    const formatExpiryDate = (date) => {
        if (!date) return 'Not Set';
        const [year, month, day] = date.split('-');
        return `${day}/${month}/${year.slice(-2)}`; // Convert to dd/mm/yy format
    };

    return (
        <div className="p-6 grid grid-cols-2 justify-center items-start gap-5">
            {/* Add Voucher Form */}
            <div className="mb-6 bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-4">Add Voucher</h1>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                            Voucher Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={voucherData.name}
                            onChange={handleInputChange}
                            placeholder="Enter voucher name"
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="discount" className="block text-gray-700 font-medium mb-1">
                            Discount Percentage
                        </label>
                        <input
                            type="number"
                            id="discount"
                            value={voucherData.discount}
                            onChange={handleInputChange}
                            placeholder="Enter discount percentage"
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="expiryDate" className="block text-gray-700 font-medium mb-1">
                            Expiry Date
                        </label>
                        <input
                            type="date"
                            id="expiryDate"
                            value={voucherData.expiryDate}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-gray-700 font-medium mb-1">
                            Description
                        </label>
                        <textarea
                            id="description"
                            value={voucherData.description}
                            onChange={handleInputChange}
                            placeholder="Enter voucher description"
                            rows="3"
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                </form>
            </div>

            {/* Existing Voucher Preview */}
            <div>
                <h1 className="text-2xl font-bold mb-4">Preview Voucher</h1>
                <div className="flex justify-start items-center">
                    <div className="flex justify-start items-center gap-10 border p-4 h-44 border-gray-300 border-r-0 border-dashed rounded-md bg-red-100">
                        <div>
                            <img
                                src="https://shofi-grocery.vercel.app/images/product/product-1.jpg"
                                alt="Voucher"
                                className="h-36 w-36 rounded-sm"
                            />
                        </div>
                        <div className="lg:px-10">
                            <div className="flex flex-col justify-center items-start gap-1">
                                <h1>{voucherData.name}</h1>
                                <h1 className="text-xl">
                                    <span className="text-red-500">{voucherData.discount}%</span> Off
                                </h1>
                                <p className="text-gray-600 text-xs">{voucherData.description}</p>
                                <p className="text-gray-600 font-semibold text-xs">
                                    Expiry Date: {formatExpiryDate(voucherData.expiryDate)}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-l border-b border-r border-gray-300 border-dashed h-44 w-52 flex flex-col justify-center items-start bg-white rounded-md">
                        <div className="flex flex-col justify-center items-start gap-1 p-4">
                            <div className="flex gap-1 items-center">
                                <h1>
                                    {voucherData.name} <span className="text-green-400">{voucherData.isActive ? 'Active' : 'Inactive'}</span>
                                </h1>
                                <RiErrorWarningLine className="text-gray-300" />
                            </div>
                            <button className="border border-dashed p-2 bg-red-200 border-red-500 my-1">
                                Publish Voucher
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCouponComponent;
