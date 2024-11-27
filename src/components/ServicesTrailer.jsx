import {services} from '../constants'
import PrimaryButton from './PrimaryButton'

export default function ServicesTrailer() {
  return (
    <div className="w-full max-w-7xl p-4 flex flex-col items-center">
        <h1 className="font-berkshire text-[36px] text-center">Services</h1>

        <div className="w-full flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-12">
            {services.slice(0,3).map((service, index) => (
                <div className='flex flex-col items-center gap-2 max-w-[320px]' key={index}>
                    <div className='w-[310px] h-[310px] rounded-2xl overflow-hidden'>
                        <img src={service.image} alt='Room Image' className='w-full h-full object-cover'/>                         
                    </div>

                    <h2 className='text-[20px] font-bold'>{service.title}</h2>

                    <p className='text-[16px] text-gray-700 text-center'>{service.desc}</p>
                </div>
            ))}
        </div>

        <PrimaryButton link='/services' title="Services" />
    </div>
  )
}
