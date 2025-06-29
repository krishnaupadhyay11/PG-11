import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { socials } from '../constants'
import { navLinks } from '../constants'

export default function Footer() {
  return (
    <footer className="w-full h-full bg-[#F0F0F0] mt-12 flex flex-col">
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-4 p-8 pb-16 justify-around">
            <div className="flex flex-col gap-2 items-center">
                <div className="w-[64px] h-[64px]">
                    <img src={logo} alt="PG-11's Logo" className="w-full h-full object-contain" />
                </div>

                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-[24px] font-bold mb-2'>Contact Us</h1>

                    <h2 className='text-center text-[18px]'>Vikram Sharma</h2>

                    <a href="tel:+919873089523" className="flex items-center gap-1">
                        <i className="uil uil-phone-alt text-[18px] text-gray-900"></i>
                        <h2>+91 9873089523</h2>
                    </a>

                    <a href="mailto:vik19692005@yahoo.co.in" className="flex items-center gap-1">
                        <i className="uil uil-envelope-alt text-[18px]"></i>
                        <h2>vik19692005@yahoo.co.in</h2>
                    </a>

                    <ul className="flex text-[20px] gap-2 md:ml-2 text-gray-950">
                        {socials.map((social) => (
                            <li key={social.name}>
                                <a href={social.link} className="" target="_blank">
                                    <i className={`uil uil-${social.icon.toLowerCase()}`}></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='flex flex-col items-center gap-2'>
                <h1 className='text-[24px] font-bold mb-2'>Address</h1>

                <p className="text-center">
                    1110/11 (3rd Floor), Street No. 11,<br />
                    Vikram Interiors, Govindpuri, Kalkaji<br />
                    New Delhi - 110019
                </p>
            </div>

            <div className='flex flex-col gap-2 items-center'>
                <h1 className='text-[24px] font-bold mb-2'>Useful Links</h1>

                <ul className='flex flex-col gap-2 items-center'>
                    {navLinks.map((navLink) => (
                        <li key={navLink.title}>
                            <Link to={navLink.link}>{navLink.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        <div className='w-full px-4 py-1 bg-logo1 flex justify-center items-center'>
            <h1 className='text-center'>&#169; 2025 Vikram Interiors. Designed and Developed by <Link to='https://krishnaupadhyay.vercel.app' className='text-logo2' target='_blank'>
                    Krishna.
                </Link>
            </h1>
        </div>
    </footer>
  )
}
