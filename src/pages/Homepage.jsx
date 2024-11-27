import SubHeader from '../components/SubHeader';
import Header from '../components/Header';
import Main from '../components/Main';
import RoomsTrailer from '../components/RoomsTrailer';
import ServicesTrailer from '../components/ServicesTrailer';
import AboutTrailer from '../components/AboutTrailer';
import GalleryTrailer from '../components/GalleryTrailer';
import Testimonials from '../components/Testimonials';
import Suggestions from '../components/Suggestions';
import Maps from '../components/Maps';
import Address from '../components/Address';
import Footer from '../components/Footer';

export default function Homepage() {
  return (
    <div className='w-full h-full flex flex-col items-center'>
        <SubHeader />
        <Header />
        <Main />
        <div className='relative top-[90vh] flex flex-col w-full items-center'>
          <RoomsTrailer />
          <ServicesTrailer />
          <AboutTrailer />
          <GalleryTrailer />
          <Testimonials />
          <Suggestions />
          <Address />
          <Maps />
          <Footer />
        </div>
    </div>
  )
}
