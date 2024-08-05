import { useState } from "react";

import logo from "../../assets/images/Navbar/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled((previousState) => !previousState);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-20 ${
        isToggled && "backdrop-blur-sm bg-secondary bg-opacity-40 h-screen"
      }`}
    >
      <div className="flex justify-between py-4 px-10 md:px-20">
        <a href="#hero" className="h-14 w-auto">
          <img
            src={logo}
            alt="logo"
            className="h-full hover:scale-105 transition-transform duration-300 drop-shadow-[1px_1px_2px_rgb(0,0,0)]"
            onClick={() => {
              isToggled && handleClick();
            }}
          />
        </a>
        {/* main navbar */}
        <ul className="text-white lg:flex uppercase gap-12 xl:gap-16 items-center font-manjari hidden">
          <li className="cursor-pointer hover:text-primary hover:scale-105 transition-transform duration-300 drop-shadow-[1px_1px_2px_rgb(0,0,0)]">
            <a href="#hero">Home</a>
          </li>
          <li className="cursor-pointer hover:text-primary hover:scale-105 transition-transform duration-300 drop-shadow-[1px_1px_2px_rgb(0,0,0)]">
            <a href="#menu">Menu</a>
          </li>
          <li className="cursor-pointer hover:text-primary hover:scale-105 transition-transform duration-300 drop-shadow-[1px_1px_2px_rgb(0,0,0)]">
            <a href="#locations">Locations</a>
          </li>
          <li className="cursor-pointer hover:text-primary hover:scale-105 transition-transform duration-300 drop-shadow-[1px_1px_2px_rgb(0,0,0)]">
            <a href="#about">About</a>
          </li>
          <li className="cursor-pointer hover:text-primary hover:scale-105 transition-transform duration-300 drop-shadow-[1px_1px_2px_rgb(0,0,0)]">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button
          id="hamburger-button"
          onClick={handleClick}
          className={`relative h-8 w-8 text-3xl lg:hidden mt-4 drop-shadow-[1px_1px_2px_rgb(0,0,0)] ${
            isToggled && "toggle"
          }`}
        >
          <div className="content-[''] h-[2px] w-8 rounded bg-white absolute before:content-[''] before:h-[2px] before:w-8 before:rounded before:bg-white before:absolute before:top-0 before:left-0 before:-mt-2 after:content-[''] after:h-[2px] after:w-8 after:rounded after:bg-white after:absolute after:top-0 after:left-0 after:mt-2 "></div>
        </button>
      </div>
      {/* mobile navbar */}
      <ul
        className={`lg:hidden animate-open-menu origin-top text-white flex-col uppercase xl:gap-16 items-center font-manjari gap-y-8 pt-5 px-20 ${
          isToggled ? "flex" : "hidden"
        }`}
        onClick={handleClick}
      >
        <li className="cursor-pointer hover:text-primary w-full text-left hover:scale-105 transition-transform duration-300 drop-shadow-[1px_1px_2px_rgb(0,0,0)]">
          <a href="#hero">Home</a>
          <hr className="opacity-10" />
        </li>
        <li className="cursor-pointer hover:text-primary w-full text-left mx-10 hover:scale-105 transition-transform duration-300 drop-shadow-[1px_1px_2px_rgb(0,0,0)]">
          <a href="#menu">Menu</a>
          <hr className="opacity-10" />
        </li>
        <li className="cursor-pointer hover:text-primary w-full text-left mx-10 hover:scale-105 transition-transform duration-300 drop-shadow-[1px_1px_2px_rgb(0,0,0)]">
          <a href="#locations">Locations</a>
          <hr className="opacity-10" />
        </li>
        <li className="cursor-pointer hover:text-primary w-full text-left mx-10 hover:scale-105 transition-transform duration-300 drop-shadow-[1px_1px_2px_rgb(0,0,0)]">
          <a href="#about">About</a>
          <hr className="opacity-10" />
        </li>
        <li className="cursor-pointer hover:text-primary w-full text-left mx-10 hover:scale-105 transition-transform duration-300 drop-shadow-[1px_1px_2px_rgb(0,0,0)]">
          <a href="#contact">Contact</a>
          <hr className="opacity-10" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
