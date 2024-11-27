import SubHeader from '../components/SubHeader'
import Header from '../components/Header'
import Footer from '../components/Footer'

import aboutImg1 from '../assets/images/Room1.jpeg'

export default function About() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <SubHeader />
      <Header />

      <div className='max-w-7xl flex flex-col items-center mt-12'>
        <h1 className='font-berkshire text-[36px] text-center'>About Us</h1>

        <div className='w-full flex flex-col md:flex-row items-center gap-8 mt-12'>
          <div className='w-[300px] h-[300px]'>
            <img src={aboutImg1} alt='PG-11 Image' className='w-full h-full object-cover' />
          </div>

          <p className='text-center max-w-[600px] p-4'>
            At PG-11, we provide the most comfortable and quality accomodation that is eqipped with fully-furnished kitchens, washrooms and furniture. So, you focus on what you're here for and let us take care of your housing.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
