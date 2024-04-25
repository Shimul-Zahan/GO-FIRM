import Banner from "./Shared/Banner"
// import Navbar from "./UI/Home/Navbar"
import FirstShop from "./components/FirstShop/FirstShop"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import SlideNavbar from "./components/Navbar/SlideNavbar"
import TopNav from "./components/Navbar/TopNav"

function App() {

  return (
    <div>
      <SlideNavbar />
      <TopNav />
      <Navbar />
      <Banner />
      <FirstShop />
      <Footer />
    </div>
  )
}

export default App
