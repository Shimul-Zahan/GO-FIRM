import React from 'react'
import Navbar from '../Navbar/Navbar'

const Blogs = () => {
    return (
        <div>
            <Navbar />
            <div
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '60vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <h1 className='text-4xl font-bold text-white'>Blogs Here</h1>
            </div>
            <div className='max-w-7xl mx-auto grid grid-cols-5 py-20'>
                <div className='col-span-4'>
                    <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D" className='w-full lg:h-[500px]' alt="" />
                    <h1>hello</h1>
                </div>
                <div className='col-span-1'>

                </div>
            </div>
        </div>
    )
}

export default Blogs