import logo from '../assets/images/logo.png'
import close from '../assets/images/close.svg'
import menu from '../assets/images/menu.svg'

import {navLinks} from '../constants'

import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [toggle, setToggle] = useState(false)

  const activeNavLink = window.location.pathname
  const home = activeNavLink === '/' ? true : false

  window.onscroll = () => {
    var top = window.scrollY;
    if (top > 100) {
        document.querySelector('header').classList.add('headerScroll')
  } else {
        document.querySelector('header').classList.remove('headerScroll')
    }
}

  return (
    <header className={`w-full sticky top-0 h-[72px] py-2 px-4 md:px-6 flex items-center justify-between z-[9999] ${!home ? 'bg-white' : ''}`}>
      <div className="h-16 w-16">
        <Link to='/'>
          <img src={logo} alt='PG-11 Logo' className='w-full h-full object-contain' />
        </Link>
      </div>

      <div className='md:hidden flex justify-end'>
        <img src={toggle ? close : menu} alt='menu' className='w-[24px] h-[24px] object-contain inline-block' onClick={() => setToggle((prev) => !prev)} />

        <div className={`${toggle ? 'flex' : 'hidden'} flex-col fixed top-0 right-0 w-2/3 h-full min-h-[100vh] bg-cyan-700 p-4 items-center`}>
          <div className='w-full flex justify-end pr-2 pt-2'>
            <img src={close} alt='close' className='w-[24px] h-[24px] object-contain' onClick={() => setToggle((prev) => !prev)} />
          </div>
          <nav className='h-full flex justify-center items-center'>
            <ul className='flex flex-col items-center gap-4'>
              {navLinks.map((navLink) => (
                <li key={navLink.title}>
                  <Link to={navLink.link} className={`${navLink.link === activeNavLink ? 'text-logo2' : ''} text-white text-[22px] hover:text-logo2 p-2 px-4 transition-all duration-200`}>{navLink.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className='hidden md:flex items-center'>
        <nav className='flex items-center'>
          <ul className='flex items-center'>
              {navLinks.map((navLink) => (
                <li key={navLink.title}>
                  <Link to={navLink.link} className={`${navLink.link === activeNavLink ? 'text-logo2 hover:text-logo2' : 'hover:text-logo1'} text-black text-[18px] p-2 px-4 transition-all duration-200`}>{navLink.title}</Link>
                </li>
              ))}
          </ul>
        </nav>

      </div>
    </header>
  )
}
