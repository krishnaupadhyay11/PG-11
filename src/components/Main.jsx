import '../../src/App.css'

export default function Main() {
  return (
    <div className="w-full h-full min-h-[100vh] absolute top-0 flex items-center hero">
        <div className="flex flex-col items-center justify-center w-full md:max-w-[fit-content] md:ml-[15%] md:mb-[36px] gap-3">
            <h1 className="text-[36px] font-berkshire">Affordable and Efficient</h1>
            <h4 className='text-[24px] font-poppins'>Paying Guest Stay</h4>

            <a href='#contact-us' className='bg-logo1 hover:bg-black transition-all duration-300 ease-in-out rounded-3xl text-white max-w-[fit-content] py-3 px-4 mt-4'>
              <h2>Enquire Now</h2>
            </a>
        </div>
    </div>
  )
}
