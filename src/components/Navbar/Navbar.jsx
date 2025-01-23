import logo from '../../assets/logo/logo.png'
import { FaBarsStaggered } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import SearchNav from './SearchNav';
import { Link } from 'react-router-dom'
import './style.css'
import { useContext } from 'react';
import { MyContext } from '../../Auth/AuthProvide';

const Navbar = () => {

  const { login_user } = useContext(MyContext)

  const menus = [
    {
      menu: 'Home',
      link: '/',
    },
    {
      menu: 'Shops',
      extra: true,
      extranMenu: [
        { menu: 'Shop', link: '/shop' },
        { menu: 'Shop Details', link: '/shop-details' },
        { menu: 'Shop Category', link: '/shop-cat' },
        { menu: 'Cart', link: '/cart' },
        { menu: 'Wishlist', link: '/wishlist' },
        { menu: 'Compare', link: '/compare' }
      ]
    },
    {
      menu: 'Pages',
      extra: true,
      extranMenu: [
        { menu: 'About', link: '/about' },
        { menu: 'Login', link: '/login' },
        { menu: 'Register', link: '/reg' },
        { menu: 'Forgot', link: '/reset-pass' },
        { menu: 'Profile', link: '/user/dashboard' },
        { menu: 'Invoice', link: '/invoice' },
        { menu: 'Order', link: '/order' },
        { menu: 'Checkout', link: '/checkout' }
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
    {
      menu: 'Blogs',
      link: '/blog',
    },
    login_user?.role === 'admin' && {
      menu: 'Dashboard',
      link: '/dashboard',
    },
  ]

  return (
    <div className='bg-[#23403d] px-10 py-8 sticky top-0 z-50 duration-300 shadow'>
      <div className='flex justify-between items-center gap-20'>
        <div className='flex justify-start items-center gap-10'>
          <div className='flex justify-normal items-center gap-2'>
            <div className='bg-[#7d9e77] p-2 flex justify-center items-center mr-4 rounded-md cursor-pointer'>
              <FaBarsStaggered className='text-2xl text-white' />
            </div>
            {/* <img src={logo} className='h-10' />
            <h1 className='text-4xl font-medium text-white'>GOFIRM</h1> */}
          </div>
          <div className='flex justify-center items-center gap-5 text-white'>
            {
              menus && (
                menus.map((menu, index) =>
                  <div key={index} className='nav-item'>
                    <div className='group duration-500 relative'>
                      <Link to={menu?.link} key={index} className='flex justify-center items-center'>
                        {menu?.menu} {menu?.extra && <RiArrowDropDownLine className='text-lg' />}
                      </Link>

                      {
                        menu?.extra && <div>
                          <div>
                            <div className='absolute -top-[500px] -z-10 pt-7 duration-500 delay-200 group-hover:duration-500 group-hover:md:top-10 group-hover:z-50 hover:md:block'>
                              <div className='px-5 space-y-2 py-2 bg-white shadow text-black w-[170px]'>
                                {
                                  menu?.extranMenu.map((subMenuItem, index) =>
                                    <Link to={subMenuItem?.link} key={index}
                                      className='flex capitalize cursor-pointer hover:text-[#678e61] list-none'>
                                      {subMenuItem?.menu}</Link>
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
        <div className='hidden lg:block'>
          <Link to='/' className='flex justify-center items-center gap-2'>
            <svg id="logo-16" width="109" height="43" viewBox="0 0 109 43" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M64.9315 11.4284C62.1883 8.6852 58.9316 6.5091 55.3475 5.0245C51.7633 3.5399 47.9219 2.7758 44.0424 2.7758C40.1629 2.7758 36.3215 3.5399 32.7373 5.0245C29.1532 6.5091 25.8965 8.6852 23.1533 11.4284L44.0424 32.3174L64.9315 11.4284Z" class="ccompli1" fill="#FFD200"></path> <path d="M44.0686 32.3475C46.8118 35.0907 50.0684 37.2667 53.6526 38.7513C57.2367 40.2359 61.0782 41 64.9577 41C68.837 41 72.679 40.2359 76.263 38.7513C79.847 37.2667 83.104 35.0907 85.847 32.3475L64.9577 11.4584L44.0686 32.3475Z" class="ccompli2" fill="#06E07F"></path> <path d="M44.017 32.3429C41.2738 35.0861 38.0171 37.2621 34.433 38.7467C30.8488 40.2313 27.0074 40.9954 23.1279 40.9954C19.2484 40.9954 15.407 40.2313 11.8228 38.7467C8.2387 37.2621 4.982 35.0861 2.2388 32.3429L23.1279 11.4538L44.017 32.3429Z" class="ccustom" fill="#E3073C"></path> <path d="M64.9831 11.433C67.726 8.6898 70.983 6.5138 74.567 5.0292C78.151 3.5446 81.993 2.7805 85.872 2.7805C89.752 2.7805 93.593 3.5446 97.177 5.0292C100.761 6.5138 104.018 8.6898 106.761 11.433L85.872 32.3221L64.9831 11.433Z" class="ccustom" fill="#1F84EF"></path> </svg>
            {/* <img src={logoDark} alt="" className='h-10 w-w-full' /> */}
            <h1 className='text-white text-center text-3xl font-bold'>GO FIRM</h1>
          </Link>
        </div>
        <SearchNav />
      </div>
    </div>
  )
}

export default Navbar