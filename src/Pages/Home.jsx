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
import CustomerReview from '../components/CustomerReview/CustomerReview'
import BestDeal from '../components/BestDeal/BestDeal'

const Home = () => {
    return (
        <div>
            <SlideNavbar />
            <TopNav />
            <Navbar />
            <BannerSlider />
            <WhyChooseUS />
            <Slider />
            <FirstShop />
            <BestDeal />
            <TopSelling />
            <AppAdd />
            <SellOfTheWeek />
            <CustomerReview />
        </div>
    )
}

export default Home