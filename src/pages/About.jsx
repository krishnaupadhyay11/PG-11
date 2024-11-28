import SubHeader from '../components/SubHeader'
import Header from '../components/Header'
import Footer from '../components/Footer'

import aboutImg1 from '../assets/images/Room1.jpeg'

import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function About() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className="w-full h-full flex flex-col items-center">
      <SubHeader />
      <Header />
      <hr className='block w-full p-2 bg-logo2 z-10' />

      <div className="w-full flex flex-col items-center relative">
        <div className="absolute w-full bg-[#f0f0f0] flex flex-col items-center p-2">
          <h1 className="font-berkshire font-bold text-[48px]" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">About Us</h1>
          <p className="text-lg text-gray-900" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Little description about us</p>
        </div>
      </div>

      <div className="w-full h-full relative top-[120px] flex flex-col items-center">
        <div className='w-full flex flex-col md:flex-row items-center justify-center gap-8 mt-12' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
          <div className='w-[300px] h-[300px]'>
            <img src={aboutImg1} alt='PG-11 Image' className='w-full h-full object-cover' />
          </div>

          <p className='text-center max-w-[600px] p-4'>
            At PG-11, we provide the most comfortable and quality accomodation that is eqipped with fully-furnished kitchens, washrooms and furniture. So, you focus on what you're here for and let us take care of your housing.
          </p>
        </div>
        <Footer />
      </div>
    </div>
  )
}
