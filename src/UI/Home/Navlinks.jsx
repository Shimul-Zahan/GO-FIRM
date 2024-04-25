import  { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

const Navlinks = () => {

    const [heading, setHeading] = useState('');

    const menuItem = [
        {
            nav: 'home',
            link: '/',
            submenu: true,
            submenuItem: [
                { name: 'Apple', link: '/apple' },
                { name: 'Komla', link: '/apple' },
                { name: 'Kola', link: '/apple' },
                { name: 'Pineapple', link: '/apple' },
                { name: 'Guava', link: '/apple' }
            ]
        },
        {
            nav: 'about',
            link: '/about'
        },
        {
            nav: 'contact',
            link: '/contact',
            submenu: true,
            submenuItem: [
                { name: 'Apple', link: '/apple' },
                { name: 'Komla', link: '/apple' },
                { name: 'Kola', link: '/apple' },
                { name: 'Pineapple', link: '/apple' },
                { name: 'Guava', link: '/apple' }
            ]
        },
        {
            nav: 'login',
            link: '/login',
        },
        {
            nav: 'registration',
            link: '/registration',
            submenu: true,
            submenuItem: [
                { name: 'Apple', link: '/apple' },
                { name: 'Komla', link: '/apple' },
                { name: 'Kola', link: '/apple' },
                { name: 'Pineapple', link: '/apple' },
                { name: 'Guava', link: '/apple' }
            ]
        }
    ]

    return (
        <>
            {
                menuItem.map(item =>
                    <div key={item.id}>
                        <div className='group cursor-pointer'>
                            <li onClick={() => heading !== item.nav ? setHeading(item.nav) : setHeading('') }
                                className='flex justify-between md:justify-center items-center gap-1 pr-4'>
                                {item.nav} {item.submenu && <RiArrowDropDownLine className='text-xl' />}
                            </li>
                            {
                                item?.submenu && (
                                    <div>
                                        <div className='absolute mt-0 hidden duration-200 group-hover:md:block hover:md:block'>
                                            <div className='py-3'>
                                                <div className='w-4 h-4 absolute left-3 mt-1 bg-green-500 rotate-45'></div>
                                            </div>
                                            <div className='px-5 space-y-2 py-2 bg-green-500 z-10 '>
                                                {
                                                    item?.submenuItem.map(subMenuItem =>
                                                        <li key={subMenuItem.id} className='capitalize cursor-pointer hover:text-yellow-500'>{subMenuItem.name}</li>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div>
                            {/* mobile view bro */}
                            <div className={` pt-2 ${heading === item.nav ? 'md:hidden' :'hidden' } `}>
                                {
                                    item.submenu && (
                                        <div>
                                            {
                                                item?.submenuItem.map(subMenuItem => 
                                                    <li key={subMenuItem.id}>{ subMenuItem.name }</li>
                                                )
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Navlinks