import SubHeader from "../components/SubHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { rooms } from "../constants";

export default function Rooms() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <SubHeader />
      <Header />
      
      <div className="w-full max-w-7xl p-4 flex flex-col items-center mt-12">
        <h1 className="font-berkshire text-[36px] text-center">Our Rooms</h1>
        <p>Check out rooms available at PG-11</p>

        <div className="w-full flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-12">
            {rooms.map((room, index) => (
                <div className='flex flex-col items-center gap-2 max-w-[320px]' key={index}>
                    <div className='w-[310px] h-[310px] rounded-2xl overflow-hidden'>
                        <img src={room.image} alt='Room Image' className='w-full h-full object-cover'/>                         
                    </div>

                    <h2 className='text-[20px] font-bold'>{room.title}</h2>

                    <p className='text-[18px] text-gray-700'>{room.feature}</p>
                </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}