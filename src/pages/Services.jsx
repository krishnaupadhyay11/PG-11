import SubHeader from "../components/SubHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { services } from "../constants";

export default function Services() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <SubHeader />
      <Header />
      <hr className='block w-full p-2 bg-logo2' />

      <div className="w-full max-w-7xl p-4 flex flex-col items-center mt-6">
        <h1 className="font-berkshire text-[48px] font-bold text-center">Services We Provide</h1>
        <p className="text-lg text-gray-900">A look into the facilities at your service in PG-11</p>

        <div className="w-full flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-12">
            {services.map((service, index) => (
                <div className='flex flex-col items-center gap-2 max-w-[320px]' key={index}>
                    <div className='w-[310px] h-[310px] rounded-2xl overflow-hidden'>
                        <img src={service.image} alt='Room Image' className='w-full h-full object-cover'/>                         
                    </div>

                    <h2 className='text-[20px] font-bold'>{service.title}</h2>

                    <p className='text-[16px] text-gray-700 text-center'>{service.desc}</p>
                </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
