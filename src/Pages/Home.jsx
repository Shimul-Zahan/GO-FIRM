import React from 'react'
import SlideNavbar from '../components/Navbar/SlideNavbar'
import TopNav from '../components/Navbar/TopNav'
import Navbar from '../components/Navbar/Navbar'
import SellOfTheWeek from '../components/SellOfTheWeek/SellOfTheWeek'
import AppAdd from '../components/AppAdd/appAdd'
import TopSelling from '../components/TopSelling/TopSelling'
import FirstShop from '../components/FirstShop/FirstShop'
import Slider from '../Shared/Slider'
import WhyChooseUS from '../components/WhyChooseUs/WhyChooseUs'
import BannerSlider from '../Shared/BannerSlider'

const Home = () => {
    return (
        <div>
            <SlideNavbar />
            <TopNav />
            <Navbar />
            {/* <Banner /> */}
            <BannerSlider />
            <WhyChooseUS />
            {/* <ResetPassword /> */}
            <Slider />
            <FirstShop />
            <TopSelling />
            <AppAdd />
            <SellOfTheWeek />
            {/* <SignUP />
            <Footer />
            <Login /> */}
            {/* <Home /> */}
            {/* <ShopPage /> */}
            {/* <ProductDetails /> */}
            {/* <ShopCategory /> */}
        </div>
    )
}

export default Home