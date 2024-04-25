import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Navlinks from './Navlinks';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <nav className='flex justify-between items-center md:px-10 bg-[#4caa3d] text-white py-5'>
                <div className='w-full z-50 md:w-auto px-4 py-5 flex justify-between items-center'>
                    <h1 className='text-xl font-bold'>LOGO</h1>
                    <div onClick={() => setOpen(!open)} className='text-2xl md:hidden cursor-pointer'>
                        {open ? <IoClose /> : <GiHamburgerMenu />}
                    </div>
                </div>
                <ul className='md:flex hidden justify-center items-center gap-10 py-5 uppercase'>
                    <Navlinks />
                </ul>
                <button className='md:block hidden px-6 py-2 bg-red-500 rounded-full'>
                    Get Startered
                </button>


                {/* mobile navbar */}
                <ul className={`md:hidden bg-green-500 absolute w-full h-full space-y-5 bottom-0 top-20 left-0 pl-4
                duration-700 ${open ? 'left-0' : 'left-[-100%]'}
                `}>
                    <Navlinks />
                    <button className='px-6 py-2 bg-red-500 rounded-full'>
                        Get Startered
                    </button>
                </ul>

            </nav>
        </div>
    )
}

export default Navbar