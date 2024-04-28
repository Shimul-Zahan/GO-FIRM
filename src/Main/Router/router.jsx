import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layouts/MainLayout/Layout'
import Home from '../../Pages/Home'
import About from '../../Pages/About'
import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'
import Error from '../../Pages/Error'
import ResetPassword from '../../components/ResetPassword/ResetPassword'
import HomeProfile from '../../components/Profile/Home/Home'
import ShopPage from '../../components/Products/Product/Product'
import ShopCategory from '../../components/ShopCategory/ShopCategory'
import ProductDetails from '../../components/ProductDetails/ProductDetails'
import CartItem from '../../components/Cart/cart'
import CouponCard from '../../components/Coupons/Coupons'
import Contact from '../../components/Contact/Contact'
import BillingDetails from '../../components/BillingDetails/BillingDetails'
import TrackOrder from '../../components/TrackOrder/TrackOrder'
import Whitelist from '../../components/WhiteList/Whitelist'
import Compare from '../../components/Compare/Compare'
import Sidebard from '../../Dashboard/Sidebard'
import { Dashboard } from '../../Dashboard/Dashboard'
import Profile from '../../Dashboard/Pages/AdminProfile'
import AllProducts from '../../Dashboard/Pages/AllProducts'
import AddProducts from '../../Dashboard/Pages/AddProducts'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/reg',
                element: <Register />,
            },
            {
                path: '/reset-pass',
                element: <ResetPassword />,
            },
            {
                path: '/profile',
                element: <HomeProfile />,
            },
            {
                path: '/shop',
                element: <ShopPage />,
            },
            {
                path: '/shop-cat',
                element: <ShopCategory />,
            },
            {
                path: '/prod-details',
                element: <ProductDetails />,
            },
            {
                path: '/shop-details',
                element: <ProductDetails />,
            },
            {
                path: '/cart',
                element: <CartItem />,
            },
            {
                path: '/coupons',
                element: <CouponCard />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/checkout',
                element: <BillingDetails />,
            },
            {
                path: '/order',
                element: <TrackOrder />,
            },
            {
                path: '/wishlist',
                element: <Whitelist />,
            },
            {
                path: '/compare',
                element: <Compare />,
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Sidebard />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/dashboard/admin-profile',
                element: <Profile />
            },
            {
                path: '/dashboard/all-products',
                element: <AllProducts />
            },
            {
                path: '/dashboard/add-products',
                element: <AddProducts />
            },
        ]
    }
])

export default router