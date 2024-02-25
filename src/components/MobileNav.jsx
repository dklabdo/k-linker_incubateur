import React, { useContext } from "react";
import arrow from "../assets/left.svg";
import { AppContext } from "../AppProvider";
import icon1 from '../assets/facebook.svg'
import icon2 from '../assets/insta.svg'
import icon3 from '../assets/linkedin.svg'
function MobileNav() {
  const { open, HandleOpenMobileNav } = useContext(AppContext);
  return (
    <div
      onBlur={() => HandleOpenMobileNav()}
      className="w-[70%] animate-drawera h-screen sm:hidden absolute right-0 top-0 z-10 bg-black/50 backdrop-blur-lg flex flex-col items-center gap-4 py-16 rounded-tl-3xl rounded-bl-3xl shadow-2xl"
    >
      <img
        src={arrow}
        onClick={() => HandleOpenMobileNav()}
        className="rotate-180 absolute top-0 left-0 p-4 w-16 cursor-pointer"
      />
      <a href="#home" className="text-lg cursor-pointer text-white mt-10">Home</a>
      <a href="#about" className="text-lg cursor-pointer text-white">About us</a>
      <a href="#contact" className="text-lg cursor-pointer text-white">Contact us</a>
      <div className="h-[1px] bg-white my-32 w-[70%] "></div>
    </div>
  );
}

export default MobileNav;
