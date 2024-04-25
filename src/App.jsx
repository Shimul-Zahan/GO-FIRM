import Banner from "./Shared/Banner"
import BannerSlider from "./Shared/BannerSlider"
import Slider from "./Shared/Slider"
import AppAdd from "./components/AppAdd/appAdd"
// import Navbar from "./UI/Home/Navbar"
import FirstShop from "./components/FirstShop/FirstShop"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import SlideNavbar from "./components/Navbar/SlideNavbar"
import TopNav from "./components/Navbar/TopNav"
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
      <AppAdd />
      <Footer />
    </div>
  )
}

export default App
