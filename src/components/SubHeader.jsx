import { socials } from "../constants"

import { Link } from "react-router-dom"

export default function SubHeader() {
  return (
    <div className="w-full bg-transparent relative top-0 py-1 px-2 md:px-6 flex items-center justify-between z-[9999]">
        <div className="flex items-center">
            <ul className="flex text-[20px] gap-2 md:ml-2">
                {socials.map((social) => (
                    <li key={social.name}>
                        <a href={social.link} className="" target={`${social.link !== '/' ? '_blank' : ''}`}>
                            <i className={`uil uil-${social.icon.toLowerCase()}`}></i>
                        </a>
                    </li>
                ))}
            </ul>

            <div className="hidden md:flex ml-2">
                <div className="flex items-center gap-2">
                    <a href="tel:+919873089523" className="flex items-center gap-1">
                        <i className="uil uil-phone-alt text-[18px] text-gray-900"></i>
                        <h2>+91 9873089523</h2>
                    </a>

                    <a href="mailto:vik19692005@yahoo.co.in" className="flex items-center gap-1">
                        <i className="uil uil-envelope-alt text-[18px]"></i>
                        <h2>vik19692005@yahoo.co.in</h2>
                    </a>

                    <Link to='https://pg11.in' className="flex items-center gap-1">
                        <i className="uil uil-globe text-[18px] font-thin"></i>
                        <h2>pg11.in</h2>
                    </Link>
                </div>
            </div>

            
        </div>

        <div className="flex items-center gap-1 md:mr-4">
            <i className="uil uil-map-marker"></i>
            <h4>Govindpuri, New Delhi</h4>
        </div>

    </div>
  )
}