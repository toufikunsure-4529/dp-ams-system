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
          <div className="w-7 h-7 absolute right-2 top-6 cursor-pointer md:hidden text-white" onClick={() => setIsNavOpen(!isNavOpen)}>
            {isNavOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
          </div>

          {/* Desktop View */}
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[99] left-0 w-full md:w-auto pl-9 md:pl-0  transition-all md:bg-transparent bg-gray-50 md:text-white text-gray-600 duration-500 ease-in py-14 md:py-0 ${isNavOpen ? "top-16" : "top-[-490px] "
              }`}
          >           {navMenu.map((menu, index) => (
            <li key={index} className="text-sm my-7 md:my-0 md:ml-8 cursor-pointer uppercase" >
              <NavLink to={menu.slug} className={({ isActive }) => `${isActive ? "text-red-800 font-semibold" :
                "md:text-white text-black"
                }`}>{menu.name}</NavLink>

            </li>
          ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
