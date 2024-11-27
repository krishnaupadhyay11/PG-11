import { images } from "../constants"

import SubHeader from "../components/SubHeader"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Gallery() {
  return (
    <div>
      <SubHeader />
      <Header />
      <div className="w-full max-w-7xl p-4 mt-12">
          <h1 className="text-[36px] font-berkshire font-bold text-center">Gallery</h1>

          <div className="w-full flex flex-wrap justify-center gap-6 md:gap-12 mt-12">
              {images.map((image, index) => (
                  <div className="w-[310px] h-[310px] rounded-2xl overflow-hidden" key={index}>
                      <img src={image.image} alt="PG-11 Images" className="w-full h-full object-cover" />
                  </div>
              ))}
          </div>
      </div>
      <Footer />
    </div>
  )
}
