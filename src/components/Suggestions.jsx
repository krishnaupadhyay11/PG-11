export default function Suggestions() {
  return (
    <div className="w-full max-w-7xl p-4 flex flex-col items-center">
        <h1 className="font-berkshire text-[36px] font-bold">Suggestions</h1>
        <p>We welcome your advice or queries</p>

        <form className='flex flex-col gap-2 w-full max-w-[750px] mt-8 items-center'>
            <div className="flex flex-col md:flex-row w-full justify-between gap-4">
                <input type='text' placeholder='Name' required className='form-element md:w-1/3'/>
                <input type="number" maxLength={10} placeholder='Mobile No' required className='form-element md:w-1/3'/>
                <input type='email' placeholder='E-mail' className='form-element md:w-1/3'/>

            </div>
            <textarea placeholder='Your message or queries' rows={4} className='form-element w-full'></textarea>
            <button type='submit' className='p-2 px-3 bg-primary primary-button max-w-[350px] mt-4' id="contact-us">Submit</button>
        </form>
    </div>
  )
}
