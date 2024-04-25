import logo from '../../assets/logo/logo.png'
import { FaBarsStaggered } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import SearchNav from './SearchNav';
import {Link} from 'react-router-dom'

const Navbar = () => {

  const menus = [
    {
      menu: 'Home',
      link: '/',
    },
    {
      menu: 'Shops',
      link: '/shops',
      extra: true,
      extranMenu: [
        { menu: 'Shop', link: '/shop' },
        { menu: 'Shop Details', link: '/shop-details' },
        { menu: 'Shop Category', link: '/shop-category' },
        { menu: 'Cart', link: '/cart' },
        { menu: 'Wishlist', link: '/wishlist' },
        { menu: 'Compare', link: '/compare' }
      ]
    },
    {
      menu: 'Pages',
      link: '/pages',
      extra: true,
      extranMenu: [
        { menu: 'About', link: '/about' },
        { menu: 'Login', link: '/login' },
        { menu: 'Register', link: '/shop-category' },
        { menu: 'Forgot', link: '/cart' },
        { menu: 'Profile', link: '/wishlist' },
        { menu: 'Invoice', link: '/compare' },
        { menu: 'Order', link: '/compare' },
        { menu: 'Checkout', link: '/compare' }
      ]
    },
    {
      menu: 'Coupons',
      link: '/coupons',
    },
    {
      menu: 'Blog',
      link: '/blog',
    },
    {
      menu: 'Contact',
      link: '/contact',
    },
  ]

  return (
    <div className='bg-[#23403d] px-10 py-5 sticky top-0 z-50 duration-300 shadow'>
      <div className='flex justify-between items-center gap-20'>
        <div className='flex justify-start items-center gap-20'>
          <div className='flex justify-normal items-center gap-2'>
            <div className='bg-[#7d9e77] p-2 flex justify-center items-center mr-4 rounded-md cursor-pointer'>
              <FaBarsStaggered className='text-2xl text-white' />
            </div>
            <img src={logo} className='h-10' />
            <h1 className='text-4xl font-medium text-white'>FreshCart</h1>
          </div>
          <div className='flex justify-center items-center gap-5 text-white'>
            {
              menus && (
                menus.map((menu, index) =>
                  <div key={index}>
                    <div className='group duration-500 relative'>
                      <li key={index} className='flex justify-center items-center'>
                        {menu?.menu} {menu?.extra && <RiArrowDropDownLine className='text-lg' />}
                      </li>

                      {
                        menu?.extra && <div>
                          <div>
                            <div className='absolute hidden pt-7 duration-500 delay-200 group-hover:md:block hover:md:block'>
                              <div className='px-5 space-y-2 py-2 bg-white shadow text-black z-50 w-[170px]'>
                                {
                                  menu?.extranMenu.map((subMenuItem, index) =>
                                    <li key={index} className='capitalize cursor-pointer hover:text-[#678e61] list-none'>{subMenuItem?.menu}</li>
                                  )
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                      }

                    </div>
                  </div>
                )
              )
            }
          </div>
        </div>
        <SearchNav />
      </div>
    </div>
  )
}

export default Navbar