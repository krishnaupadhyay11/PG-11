import { images } from "../constants"

import PrimaryButton from "./PrimaryButton"

export default function GalleryTrailer() {
  return (
    <div className="w-full max-w-7xl p-4 mt-12 flex flex-col items-center">
        <h1 className="text-[36px] font-berkshire font-bold text-center">Gallery</h1>

        <div className="w-full flex flex-wrap justify-center gap-6 md:gap-12 mt-12">
            {images.slice(0,3).map((image, index) => (
                <div className="w-[310px] h-[310px] rounded-2xl overflow-hidden" key={index}>
                    <img src={image.image} alt="PG-11 Images" className="w-full h-full object-cover" />
                </div>
            ))}
        </div>

        <PrimaryButton link='/gallery' title='View More' />
    </div>
  )
}
