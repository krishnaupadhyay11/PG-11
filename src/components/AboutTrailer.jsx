import { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

export default function AboutTrailer() {
  const width = window.innerWidth

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className=" w-full max-w-7xl flex flex-col md:flex-row mt-6 p-4 gap-16 items-center justify-center font-sans">
      {width > 768 ? (
        <>
          <h2 className="text-[36px] font-bold text-center font-berkshire" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">About Us</h2>
          <div className="hidden h-[0px] w-[0px] md:block md:h-[64px] md:w-[2px] bg-black" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" />
          <p className="p-4 md:text-[18px] font-medium text-gray-900 text-center md:text-left mt-[-32px] md:mt-0 text-text2 max-w-[680px]" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000" data-aos-offset='100'>
          At PG-11, we provide the most comfortable and quality accomodation that is eqipped with fully-furnished kitchens, washrooms and furniture. So, you focus on what you're here for and let us take care of your housing.
        </p>
        </>
      ) : (
        <>
          <h2 className="text-[36px] font-bold text-center font-berkshire">About Us</h2>
          <p className="p-4 text-[18px] font-medium text-center md:text-left mt-[-32px] md:mt-0 md:max-w-[680px]">
          At PG-11, we provide the most comfortable and quality accomodation that is eqipped with fully-furnished kitchens, washrooms and furniture. So, you focus on what you're here for and let us take care of your housing.
          </p>
        </>
      )}
        
    </div>
  )
}
