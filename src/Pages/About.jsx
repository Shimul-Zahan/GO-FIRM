import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import image1 from '../assets/about/01.png'
import image2 from '../assets/about/02.png'
import image3 from '../assets/about/03.png'
import image4 from '../assets/about/04.png'
import image5 from '../assets/about/05.png'
import image6 from '../assets/about/06.png'
import image7 from '../assets/about/07.png'
import image8 from '../assets/about/08.png'
import cover from '../assets/about/banner.png'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className='px-2 lg:px-0'>
        <div className='max-w-7xl mx-auto'>
          <h1 className='pt-10 pb-5 lg:text-7xl font-bold'>About Our GoFirm</h1>
          <img src="https://shofi-grocery.vercel.app/images/about/about-big-1.jpg" className='w-full' alt="team-image" />
          <p className='lg:text-lg font-medium max-w-6xl mx-auto py-10'>We are thrilled to offer you a wide range of products that you won't find anywhere else. Whether you're shopping for clothing, accessories, gadgets, or home decor, we have something for everyone.
            <br /><br />
            Our commitment to quality is reflected in every product we offer. We work with top suppliers and manufacturers to ensure that every item we sell meets our high standards for durability, performance, and style. And with a user-friendly interface and intuitive navigation, shopping on our site is a breeze. We understand that security is a top concern for online shoppers, which is why we employ the latest encryption technologies and follow industry best practices to keep your personal information safe. And with fast, reliable shipping options, you can enjoy your purchases in no time.</p>
        </div>

        <div className='grid lg:grid-cols-4 justify-center items-center lg:py-20 max-w-6xl mx-auto'>
          <div className='flex justify-normal items-start gap-2'>
            <img src={image1} className='w-10 h-10' alt="" />
            <div>
              <h1 className='text-4xl font-bold'>750+</h1>
              <p className='text-base font-thin'>Happy Customers</p>
            </div>
          </div>
          <div className='flex justify-normal items-start gap-2'>
            <img src={image2} className='w-10 h-10' alt="" />
            <div>
              <h1 className='text-4xl font-bold'>2016</h1>
              <p className='text-base font-thin'>Founding Year</p>
            </div>
          </div>
          <div className='flex justify-normal items-start gap-2'>
            <img src={image3} className='w-10 h-10' alt="" />
            <div>
              <h1 className='text-4xl font-bold'>120+</h1>
              <p className='text-base font-thin'>Product Orders</p>
            </div>
          </div>
          <div className='flex justify-normal items-start gap-2'>
            <img src={image4} className='w-10 h-10' alt="" />
            <div>
              <h1 className='text-4xl font-bold'>69+</h1>
              <p className='text-base font-thin'>Quality Products</p>
            </div>
          </div>
        </div>

        <div className='bg-gray-100 py-20'>
          <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                <div className="">
                  <h2 className="text-4xl font-bold sm:text-4xl">About our <br />
                    Online Store</h2>

                  <p className="mt-4 text-gray-600 text-lg">
                    At our eCommerce site, we are passionate about providing our customers with the best possible shopping experience. From our extensive product selection to our exceptional customer service, we are committed to exceeding your expectations.
                    <br /><br />
                    So start browsing today and find the perfect products to suit your needs!
                  </p>

                  <p className='text-[180px] text-gray-300'>2016</p>
                </div>
              </div>
            </div>
          </section>
          <div>

            <div className="hidden sm:block">
              <div className="border-t border-gray-400 max-w-7xl mx-auto">
                <nav className="-mb-px grid grid-cols-4 justify-center items-center gap-6">
                  <li className="shrink-0 flex justify-center items-center list-none border-t-2 pt-4 border-sky-500 px-1 pb-4 text-2xl font-bold hover:border-gray-300 hover:text-gray-700" >2016 </li>

                  <li className="shrink-0 flex justify-center items-center list-none border-t-2 pt-4 px-1 pb-4 text-2xl font-bold hover:border-gray-300 hover:text-gray-700">2017 </li>

                  <li className="shrink-0 flex justify-center items-center list-none border-t-2 pt-4 px-1 pb-4 text-2xl font-bold hover:border-gray-300 hover:text-gray-700">2018</li>

                  <li className="shrink-0 flex justify-center items-center list-none border-t-2 pt-4 px-1 pb-4 text-2xl font-bold hover:border-gray-300 hover:text-gray-700" aria-current="page">2019</li>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-7xl mx-auto py-20'>
          <h1 className='text-6xl font-bold text-center py-10'>Take a Look at our <br /> Team's Work</h1>
          <div className='grid grid-cols-4 justify-center items-center gap-8'>
            <div className='border border-green-500 p-14 flex flex-col justify-center items-center'>
              <img src={image5} alt="" className='w-14 h-14' />
              <p className='text-lg text-center'>We have something <br />
                for everyone.</p>
            </div>
            <div className='border border-green-500 p-14 flex flex-col justify-center items-center'>
              <img src={image6} alt="" className='w-14 h-14' />
              <p className='text-lg text-center'>We be glad to work <br />
                with you!</p>
            </div>
            <div className='border border-green-500 p-14 flex flex-col justify-center items-center'>
              <img src={image7} alt="" className='w-14 h-14' />
              <p className='text-lg font-thin text-center'>Whether you're <br />
                shopping for clothing</p>
            </div>
            <div className='border border-green-500 p-14 flex flex-col justify-center items-center'>
              <img src={image8} alt="" className='w-14 h-14' />
              <p className='text-lg text-center'>We work with top <br />
                suppliers</p>
            </div>
          </div>
        </div>

        <h1 className='text-base text-center font-mono'>Stay With Us. <br /> Happy Shopping.</h1>
        
        <div className='max-w-7xl mx-auto py-10'>
          <img src={cover} alt="" />
        </div>
        
      </div>
    </div>
  )
}

export default About