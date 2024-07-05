import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


function Header() {
  const navMenu = [
    { name: "Contact Us", slug: "/contact" },
    { name: "Placements", slug: "/placement" },
    { name: "Notice", slug: "/notice", newImg: "/images/new.gif" },
    { name: "Admission Now", slug: "/admission" },
    { name: "Admin Login", slug: "/admin" },
  ]
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false);

  const stickyScroll = () => {
    if (window.scrollY > 150) {
      setIsSticky(true)
    }
    else {
      setIsSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", stickyScroll)
    return () => {
      window.removeEventListener("scroll", stickyScroll);

    }
  }, [])

  return (
    <>
      <div className="w-full bg-blue-900 ">
        <div className="max-w-full mx-auto flex justify-center ">
          <div className="w-full bg-blue-900 text-white text-center">
            <marquee width="90%" height="33px" behavior="alternate" className="py-5 flex items-center justify-center">
              Admission started for the academic year 2024-25.
              <span className='inline-block'><img src="/images/new.gif" alt="New" /></span>
            </marquee>
          </div>
          <div className=" bg-yellow-500 w-1/4 md:flex justify-center items-center hidden">
            +91 9734369670
          </div>
          <div className="bg-red-800 text-white w-1/3 md:flex space-x-4 justify-center items-center hidden ">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
        </div>
      </div >
      <div className={`w-full text-white transition-all duration-300 ${isSticky ? "bg-black fixed top-0 left-0 z-50 opacity-100" : "bg-blue-500 opacity-100"}`}>
        <div className="flex justify-between items-center py-3 md:px-8 px-2">
          <div>
            <a href="/" className="flex gap-2 justify-center items-center">
              <img
                src="/dpLogo.png"
                alt="Dumkal Polytechnic Logo"
                className="h-10 w-auto rounded-full"
              />
              <p>DUMKAL POLYTECHNIC</p>
            </a>
          </div>
          {/* mobile screen view */}
          <div className={`w-7 h-7 absolute right-2  ${isSticky ? "top-6" : "top-18"} cursor-pointer md:hidden text-white`} onClick={() => setIsNavOpen(!isNavOpen)}>
            {isNavOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
          </div>

          {/* Desktop View */}
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[99] left-0 w-full md:w-auto pl-9 md:pl-0  transition-all md:bg-transparent bg-gray-50 md:text-white text-gray-600 duration-500 ease-in py-14 md:py-0  ${isNavOpen ? "top-16" : "top-[-490px] "
              }`}
          >   {navMenu.map((menu, index) => (
            <li key={index} className="text-sm my-7 md:my-0 md:ml-8 cursor-pointer uppercase" >
              <NavLink to={menu.slug} className={({ isActive }) => `${isActive ? "text-red-800 font-semibold" :
                "md:text-white text-black "
                }`}>{menu.name} {menu.newImg && <img className="inline text-center" src={menu.newImg} alt="New" />}</NavLink>

            </li>
          ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
