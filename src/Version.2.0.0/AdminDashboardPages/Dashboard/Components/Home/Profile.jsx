import React from 'react'

const Profile = () => {
    return (
        <div className='space-y-3'>
            <div className='flex justify-start items-center gap-5 p-1 rounded-lg'>
                <div className="relative">
                    <img
                        width={500}
                        height={500}
                        className="size-10 rounded-full bg-slate-500 object-cover"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                        alt="avatar navigate ui"
                    />
                    <span className="absolute bottom-[2px] right-0 size-3 rounded-full border-[2px] border-white bg-green-500"></span>
                </div>
                <div>
                    <h1 className='text-lg font-semibold'>Dr. Shimul Zahan</h1>
                    <h1 className='text-xs'>Regular Checkup</h1>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-2'>
                <div className='text-sm'>
                    <h1 className='text-black font-semibold'>D.O.B</h1>
                    <p className='text-gray-500'>15/01/01</p>
                </div>
                <div className='text-sm'>
                    <h1 className='text-black font-semibold'>Sex</h1>
                    <p className='text-gray-500'>Male</p>
                </div>
                <div className='text-sm'>
                    <h1 className='text-black font-semibold'>Weight</h1>
                    <p className='text-gray-500'>69 Kg</p>
                </div>
                <div className='text-sm'>
                    <h1 className='text-black font-semibold'>Last Appoint.</h1>
                    <p className='text-gray-500'>22/10/24</p>
                </div>
                <div className='text-sm'>
                    <h1 className='text-black font-semibold'>Height</h1>
                    <p className='text-gray-500'>172 cm</p>
                </div>
                <div className='text-sm'>
                    <h1 className='text-black font-semibold'>Reg. Date</h1>
                    <p className='text-gray-500'>20/11/2022</p>
                </div>
            </div>
            <div>
                <h1 className='text-black font-semibold'>Patient History</h1>
                <div className='flex justify-start items-center gap-5 pt-3'>
                    <h1 className='bg-yellow-200 text-yellow-600 px-3 rounded-sm'>Asthma</h1>
                    <h1 className='bg-blue-200 text-blue-600 px-3 rounded-sm'>Hypertension</h1>
                    <h1 className='bg-violet-400 text-violet-600 px-3 rounded-sm'>Fever</h1>
                </div>
            </div>
        </div>
    )
}

export default Profile