import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import '../../src/App.css'

import background from '../assets/images/COVER.jpg'

export default function Main() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className="w-full h-full min-h-[100vh] absolute top-0 flex items-center" style={{backgroundImage:`url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="flex flex-col items-center justify-center w-full md:max-w-[fit-content] md:ml-[15%] md:mb-[36px] gap-3">
          <div className='flex flex-col items-center' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <h1 className="text-[36px] font-berkshire">Affordable and Efficient</h1>
              <h4 className='text-[24px] font-poppins'>Paying Guest Stay</h4>
          </div>

            <a href='#contact-us' className='bg-logo1 hover:bg-black transition-all duration-300 ease-in-out rounded-3xl text-white max-w-[fit-content] py-3 px-4 mt-4' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
              <h2>Enquire Now</h2>
            </a>
        </div>
    </div>
  )
}
