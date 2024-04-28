import React from 'react';

const MediaControlCard = ({image}) => {
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
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg> */}
                        <h1 className='text-xs hover:text-red-500'>Update</h1>
                    </button>
                    <button className="py-2 mr-2">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15.18V8.82a.6.6 0 01.9-.52l9.19 3.68a.6.6 0 010 .96l-9.19 3.68a.6.6 0 01-.9-.52z" />
                        </svg> */}
                        <h1 className='text-xs hover:text-green-500'>Delete</h1>
                    </button>
                    <button className="py-2">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg> */}
                        <h1 className='text-xs hover:text-green-500'>Disable</h1>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MediaControlCard;
