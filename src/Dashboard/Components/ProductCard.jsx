import React from 'react';

const MediaControlCard = ({ image }) => {
    return (
        <div className="flex bg-white shadow-md rounded-lg h-32">
            <img
                src={image}
                alt="Live from space album cover"
                className="w-32 h-32 object-cover rounded-tl-lg rounded-bl-lg"
            />
            <div className="flex flex-col w-full">
                <div className="px-4 ">
                    <h5 className="text-lg font-bold">Kashmiri Apple</h5>
                    <p className="text-gray-600 text-xs py-[2px]">Fruites</p>
                    <p className="text-gray-600 text-xs py-[2px]">Here is some fruits details</p>
                    <div className='flex justify-between items-center text-sm font-bold py-[2px]'>
                        <h1 className=''>$50.00</h1>
                        <h1>4.6</h1>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-2 px-4">
                    <button className="py-2 mr-2">
                        <h1 className='text-xs hover:text-red-500'>Update</h1>
                    </button>
                    <button className="py-2 mr-2">
                        <h1 className='text-xs hover:text-green-500'>Delete</h1>
                    </button>
                    <button className="py-2">
                        <h1 className='text-xs hover:text-green-500'>Disable</h1>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MediaControlCard;
