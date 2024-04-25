import Banner from "./Shared/Banner"
import BannerSlider from "./Shared/BannerSlider"
import Slider from "./Shared/Slider"
import AppAdd from "./components/AppAdd/appAdd"
// import Navbar from "./UI/Home/Navbar"
import FirstShop from "./components/FirstShop/FirstShop"
import Footer from "./components/Footer/Footer"
import Login from "./components/Login/Login"
import Navbar from "./components/Navbar/Navbar"
import SlideNavbar from "./components/Navbar/SlideNavbar"
import TopNav from "./components/Navbar/TopNav"
import SignUP from "./components/Register/Register"
import SellOfTheWeek from "./components/SellOfTheWeek/SellOfTheWeek"
import TopSelling from "./components/TopSelling/TopSelling"
import WhyChooseUS from "./components/WhyChooseUs/WhyChooseUs"

function App() {

  return (
    <div>
      <SlideNavbar />
      <TopNav />
      <Navbar />
      {/* <Banner /> */}
      <BannerSlider />
      <WhyChooseUS />
      <Slider />
      <FirstShop />
      <TopSelling />
      <AppAdd />
      <SellOfTheWeek />
      <SignUP />
      <Footer />
      <Login />
    </div>
  )
}

export default App
