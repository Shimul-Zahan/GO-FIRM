import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layouts/MainLayout/Layout'
import Home from '../../Pages/Home'
import About from '../../Pages/About'
import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'
import Error from '../../Pages/Error'
import ResetPassword from '../../components/ResetPassword/ResetPassword'
import ShopPage from '../../components/Products/Product/Product'
import ShopCategory from '../../components/ShopCategory/ShopCategory'
import ProductDetails from '../../components/ProductDetails/ProductDetails'
import CartItem from '../../components/Cart/cart'
import CouponCard from '../../components/Coupons/Coupons'
import Contact from '../../components/Contact/Contact'
import TrackOrder from '../../components/TrackOrder/TrackOrder'
import Whitelist from '../../components/WhiteList/Whitelist'
import Compare from '../../components/Compare/Compare'
import Sidebard from '../../Dashboard/Sidebard'
import { Dashboard } from '../../Dashboard/Dashboard'
import Profile from '../../Dashboard/Pages/AdminProfile'
import AllProducts from '../../Dashboard/Pages/AllProducts'
import AddProducts from '../../Dashboard/Pages/AddProducts'
import Blogs from '../../components/Blogs/Blogs'
import AllCat from '../../Dashboard/Pages/AllCat'
import AddCat from '../../Dashboard/Pages/AddCat'
import Private from '../../Auth/PrivateRoute'
import DasPrivate from '../../Auth/DashPrivate'
import AdminOrderTable from '../../Version.2.0.0/AdminDashboardPages/Pages/PaymentAndOrders/AllOrders'
import PendingOrders from '../../Version.2.0.0/AdminDashboardPages/Pages/PaymentAndOrders/PendingOrders'
import CancelOrders from '../../Version.2.0.0/AdminDashboardPages/Pages/PaymentAndOrders/CancelOrders'
import AllPaymentTable from '../../Version.2.0.0/AdminDashboardPages/Pages/PaymentAndOrders/AllPayments'
import AddCouponComponent from '../../Version.2.0.0/AdminDashboardPages/Pages/StoreRoom/AddVoucher'
import UserDashboardLayout from '../../components/Profile/Home/Home'
import UserProfile from '../../Version.2.0.0/UserDashBoardPages/Profile'
import BillingDetails from '../../Version.2.0.0/UserDashBoardPages/BillingDetails'


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
            // {
            //     path: '/profile',
            //     element: <HomeProfile />,
            // },
            {
                path: '/shop',
                element: <ShopPage />,
            },
            {
                path: '/shop-cat',
                element: <ShopCategory />,
            },
            {
                path: '/details/:id',
                element: <ProductDetails />,
            },
            {
                path: '/shop-details',
                element: <ProductDetails />,
            },
            {
                path: '/cart',
                element: <Private><CartItem /></Private>,
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
                element: <Private><BillingDetails /></Private>,
            },
            {
                path: '/order',
                element: <Private><TrackOrder /></Private>,
            },
            {
                path: '/wishlist',
                element: <Private><Whitelist /></Private>,
            },
            {
                path: '/compare',
                element: <Compare />,
            },
            {
                path: '/blog',
                element: <Blogs />,
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Sidebard />,
        children: [
            // heres all the store route
            {
                path: '/dashboard',
                element: <DasPrivate><Dashboard /></DasPrivate>
            },
            {
                path: '/dashboard/admin-profile',
                element: <DasPrivate><Profile /></DasPrivate>
            },
            {
                path: '/dashboard/all-products',
                element: <DasPrivate><AllProducts /></DasPrivate>
            },
            {
                path: '/dashboard/all-cat',
                element: <DasPrivate><AllCat /></DasPrivate>
            },
            {
                path: '/dashboard/add-cat',
                element: <DasPrivate><AddCat /></DasPrivate>
            },
            {
                path: '/dashboard/add-products',
                element: <DasPrivate><AddProducts /></DasPrivate>
            },
            {
                path: '/dashboard/add-discount',
                element: <DasPrivate><AddProducts /></DasPrivate>
            },
            // {
            //     path: '/dashboard/add-voucher',
            //     element: <DasPrivate><AddProducts /></DasPrivate>
            // },
            // voucher and discount
            {
                path: '/dashboard/add-voucher',
                element: <DasPrivate><AddCouponComponent /></DasPrivate>
            },
            // for orders and payments route
            {
                path: '/dashboard/all-orders',
                element: <DasPrivate><AdminOrderTable /></DasPrivate>
            },
            {
                path: '/dashboard/pending-orders',
                element: <DasPrivate><PendingOrders /></DasPrivate>
            },
            {
                path: '/dashboard/cancel-orders',
                element: <DasPrivate><CancelOrders /></DasPrivate>
            },
            {
                path: '/dashboard/all-payments',
                element: <DasPrivate><AllPaymentTable /></DasPrivate>
            },

        ]
    },
    {
        path: '/user/dashboard',
        element: <UserDashboardLayout />,
        children: [
            {
                path: '/user/dashboard',
                element: <UserProfile />
            },
            {
                path: '/user/dashboard/billing-details',
                element: <BillingDetails />
            },
        ]
    }
])

export default router