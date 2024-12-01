import SubHeader from "../components/SubHeader"
import Header from "../components/Header"
import Maps from '../components/Maps'
import Footer from "../components/Footer"

import WhatsApp from '../assets/images/WhatsAppButton.png'

import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function ContactUs() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className="w-full h-full flex flex-col items-center">
      <SubHeader />
      <Header />
      <hr className='block w-full p-2 bg-logo2' />

      <div className="w-full flex flex-col items-center relative">
        <div className="absolute w-full bg-[#f0f0f0] flex flex-col items-center p-2">
          <h1 className="font-berkshire font-bold text-[48px]" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Contact Us</h1>
          <p className="text-lg text-gray-900 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">We Welcome Your Queries and Suggestions</p>
        </div>
      </div>

      <div className="w-full h-full relative top-[120px] flex flex-col items-center">
        <div className="w-full max-w-7xl p-10 flex flex-col justify-between gap-4 items-center mt-8 relative">
          <div className="w-full max-w-[650px] flex justify-between items-center gap-8 md:gap-12 mb-4" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <h1 className="text-[36px] font-berkshire font-bold">Address</h1>
            <p className="text-center text-gray-800 sm:w-full sm:max-w-[400px]">
              1110/11 (IIIrd Floor), Street No. 11,<br className="hidden md:block"/><span className="md:hidden"> </span>
              Near Hanuman Mandir, Govindpuri, Kalkaji<br className="hidden md:block"/><span className="md:hidden"> </span>
              New Delhi - 110019
            </p>
          </div>
          <div className="h-[1px] w-[64px] bg-gray-500 sprinkle mb-4" />
          <div className="w-full max-w-[650px] flex justify-between items-center gap-8 md:gap-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <h1 className="text-[36px] font-berkshire font-bold">Mail Us</h1>
            <p className="text-center text-gray-800 sm:w-full sm:max-w-[400px]">
                vik19692005@yahoo.co.in
            </p>
          </div>
          <div className="h-[1px] w-[64px] bg-gray-500 sprinkle mb-4" />
          <div className="w-full max-w-[650px] flex justify-between items-center gap-8 md:gap-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <h1 className="text-[36px] font-berkshire font-bold">Phone No.</h1>
            <p className="text-center text-gray-800 sm:w-full sm:max-w-[400px]">
                +91-9873089523
            </p>
          </div>
          <div className="h-[1px] w-[64px] bg-gray-500 sprinkle mb-4" />
          <div className="w-full max-w-[650px] flex justify-between items-center gap-8 md:gap-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <h1 className="text-[36px] font-berkshire font-bold">Hours</h1>
            <p className="text-center text-gray-800 sm:w-full sm:max-w-[400px]">
                Mon - Sun: 10:00 AM - 7:00 PM
            </p>
          </div>
          <div className="h-[1px] w-[64px] bg-gray-500 sprinkle mb-4" />
          <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <a aria-label="Chat on WhatsApp" href="https://wa.me/919873089523">
                <img alt="Chat on WhatsApp" src={WhatsApp} width={300}/>
            </a>
          </div>
        </div>
        <Maps />
        <Footer />
      </div>

    </div>
  )
}
