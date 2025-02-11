"use-client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { assets } from "../../assets/assets";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 opacity-60 translate-y-[-50%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 py-3 lg:px-8 xl:px-[8%] flex items-center justify-between z-50 ${
          isScroll
            ? "dark:bg-darkTheme/50 dark:shadow-white/20 bg-white bg-opacity-50 backdrop-blur-lg shadow-sm"
            : ""
        } `}
      >
        <a href="#top" className="text-6xl font-Ovo">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-36"
            alt="logo"
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full
          px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent "
          } `}
        >
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contact me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-3 border border-gray-500 rounded-full font-Ovo dark:border-white/50 
       ml-4"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt="contact"
            />
          </a>
          <button className="block md:hidden">
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              onClick={openMenu}
              alt=""
              className="w-6"
            />
          </button>
        </div>

        {/*================ Mobile Menu ====================== */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-10 px-10 fixed -right-64 h-screen w-64 z-50 bg-gray-50 transition duration-700 bottom-0 top-0 dark:bg-darkHover "
        >
          <div
            className="absolute right-6 top-6 hover:opacity-60 duration-75 transition-opacity"
            onClick={closeMenu}
          >
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-3 cursor-pointer"
            />
          </div>
          <li className="">
            <a
              className="font-Ovo hover:text-slate-400 duration-100"
              onClick={closeMenu}
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="font-Ovo hover:text-slate-400 duration-100"
              onClick={closeMenu}
              href="#about"
            >
              About me
            </a>
          </li>

          <li>
            <a
              className="font-Ovo hover:text-slate-400 duration-100"
              onClick={closeMenu}
              href="#work"
            >
              My Work
            </a>
          </li>
          <li>
            <a
              className="font-Ovo hover:text-slate-400 duration-100"
              onClick={closeMenu}
              href="#contact"
            >
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
