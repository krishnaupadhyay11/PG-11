import SubHeader from "../components/SubHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { rooms } from "../constants";

import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Rooms() {
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
          <h1 className="font-berkshire font-bold text-[48px]" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Rooms</h1>
          <p className="text-lg text-gray-900 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Check out rooms available at PG-11</p>
        </div>
      </div>

      <div className="w-full h-full relative top-[120px] flex flex-col items-center">
        <div className="w-full flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-12">
            {rooms.map((room, index) => (
                <div className='flex flex-col items-center gap-2 max-w-[320px]' key={index} data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <div className='w-[310px] h-[310px] rounded-2xl overflow-hidden'>
                        <img src={room.image} alt='Room Image' className='w-full h-full object-cover'/>                         
                    </div>

                    <h2 className='text-[20px] font-bold'>{room.title}</h2>

                    <p className='text-[18px] text-gray-700'>{room.feature}</p>
                </div>
            ))}
        </div>
        <Footer />
      </div>
    </div>
  )
}