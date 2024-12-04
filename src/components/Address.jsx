import WhatsApp from '../assets/images/WhatsAppButton.png'

export default function Address() {
  return (
    <div className="w-full max-w-7xl p-4 flex flex-col md:flex-row justify-between gap-4 items-center text-gray-800 mt-8 flex-wrap">
        <p className="text-center">
            1110/11 (3rd Floor), Street No. 11,<br />
            Vikram Interiors, Govindpuri, Kalkaji<br />
            New Delhi - 110019
        </p>
        <div className="md:h-[64px] md:w-[1px] h-[1px] w-[64px] bg-gray-500 sprinkle" />
        <p className="text-center">
            vik19692005@yahoo.co.in
        </p>
        <div className="md:h-[64px] md:w-[1px] h-[1px] w-[64px] bg-gray-500 sprinkle" />
        <p className="text-center">
            Vikram Sharma <br />
            +91-9873089523
        </p>
        <div className="md:h-[64px] md:w-[1px] h-[1px] w-[64px] bg-gray-500 sprinkle" />
        <p className="text-center">
            Mon - Sun: 10:00 AM - 7:00 PM
        </p>
        <div className="w-full max-w-[650px] mx-auto flex flex-basis-1 flex-col md:flex-row items-center justify-between gap-4">
            <a href="https://pg11.in" className="flex items-center gap-1">
                <i className="uil uil-globe text-[18px] font-thin"></i>
                <p className="text-center">
                    pg11.in
                </p>
            </a>
            <div className="md:h-[64px] md:w-[1px] h-[1px] w-[64px] bg-gray-500 sprinkle" />
            <a aria-label="Chat on WhatsApp" href="https://wa.me/919873089523">
                <img alt="Chat on WhatsApp" src={WhatsApp} width={300}/>
            </a>
        </div>
    </div>
  )
}
