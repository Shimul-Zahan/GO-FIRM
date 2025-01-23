import React from 'react'

const UserProfile = ({ user }) => {
    return (
        <div className="rounded-lg shadow-xl bg-white lg:col-span-2 p-4 space-y-10">
            <div className="flex justify-between items-center">
                {/* User Info */}
                <div className="flex justify-start items-center gap-5">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMdBuvbsYu7WYAAUY2AqSQRGNESsYdkucDkQ&s" className='h-56 w-56 rounded-full' />
                    <div>
                        <h1 className="text-4xl font-bold py-1">Welcome Mr. John Doe!</h1>
                        <p className="text-sm">You have 08 notifications</p>
                    </div>
                </div>
                {/* Logout Button */}
                <div className="border border-black px-10 py-3">
                    <button>Log Out</button>
                </div>
            </div>

            {/* UserProfile Photos Section */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
                <div className="h-56 rounded-lg bg-gray-200">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMdBuvbsYu7WYAAUY2AqSQRGNESsYdkucDkQ&s" alt="" className="w-full h-full flex justify-center items-center" />
                </div>
                <div className="h-56 rounded-lg bg-gray-200">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMdBuvbsYu7WYAAUY2AqSQRGNESsYdkucDkQ&s" alt="" className="w-full h-full flex justify-center items-center" />
                </div>
                <div className="h-56 rounded-lg bg-gray-200">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMdBuvbsYu7WYAAUY2AqSQRGNESsYdkucDkQ&s" alt="" className="w-full h-full flex justify-center items-center" />
                </div>
                <div className="h-56 rounded-lg bg-gray-200">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMdBuvbsYu7WYAAUY2AqSQRGNESsYdkucDkQ&s" alt="" className="w-full h-full flex justify-center items-center" />
                </div>
            </div>
        </div>
    )
}

export default UserProfile