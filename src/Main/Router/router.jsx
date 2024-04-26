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
        ]
    }
])

export default router