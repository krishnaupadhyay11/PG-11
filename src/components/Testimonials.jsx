import { tests } from "../constants"

import { useState } from "react"

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? tests.length-1 : prev-1))
        console.log(currentIndex)
    }

    const goNext = () => {
        setCurrentIndex((prev) => (prev === tests.length-1 ? 0 : prev+1))
        console.log(currentIndex)
    }

    

  return (
    <div className="w-full max-w-7xl p-4 flex flex-col md:flex-row items-center justify-center gap-6">
        <h1 className="text-[36px] font-berkshire font-bold p-2">Testimonials</h1>

        <div className="w-full h-full max-w-[600px] relative flex justify-center">
            <div className="w-full max-w-[180px] md:max-w-[400px] lg:max-w-[450px] overflow-hidden flex flex-nowrap gap-0 md:gap-4">
                {tests.map((test, index) => (
                    <div className=" w-[180px] md:w-[225px] flex flex-col flex-shrink-0 flex-grow-0 gap-2 items-center transition-all duration-300 ease-in-out" key={index} style={{translate:`${-100*currentIndex}%`}}>
                        <h1 className="text-[22px] font-bold">{test.name}</h1>                        
                        <p className="text-[16px] text-center">{test.remark}</p>
                    </div>
                ))}
            </div>

            <div className="absolute top-1/2 translate-y-[-50%] left-1 md:left-4 text-5xl text-black z-10 cursor-pointer" onClick={goPrev}>
                <i className="uil uil-angle-left"></i>
            </div>
            <div className="absolute top-1/2 translate-y-[-50%] right-1 md:right-4 text-5xl text-black z-10 cursor-pointer" onClick={goNext}>
                <i className="uil uil-angle-right"></i>
            </div>

        </div>

    </div>
  )
}
