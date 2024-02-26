import React from "react";
import univ from "../assets/univ.png";
import icon1 from "../assets/call.svg";
import icon2 from "../assets/mail.svg";
import icon3 from "../assets/map.svg";
function Footer() {
  return (
    <div className="h-[570px] sm:h-[400px] rounded-tr-3xl rounded-tl-3xl px-6 w-full bg-white flex bottom-0 flex-col justify-between items-center">
      <div className="flex w-full flex-col-reverse lg:w-2/3 sm:flex-row sm:gap-24 md:gap-44 my-6">
        
        <div className="flex w-full  flex-col  sm:my-2 justify-center px-6">
        <p className="text-center sm:text-start my-4" >k-linker agreed by university djilali liabes 2024</p>
          <div className="flex text-nowrap text-center gap-2 self-center sm:self-start">
            <img src={icon1} alt="..." />
            <p>+213699542392</p>
          </div>
          <div className="flex text-nowrap gap-2 self-center sm:self-start">
            <img src={icon2} alt="..." />
            <p>k-linkersc22@gmail.com</p>
          </div>
          <div className="flex text-nowrap self-center gap-2  sm:mb-0 sm:self-start">
            <img src={icon3} alt="..." />
            <a href="https://maps.app.goo.gl/w396pRvhgamTyuq88" className="underline">CS department CPR</a>
          </div>
        </div>
        <div className="sm:w-1/2 flex  justify-center items-center">
          <img className="w-40 my-2" src={univ} alt="..." />
        </div>
      </div>
      <p className="text-center text-sm mb-4 font-thin">
        &copy;k-linker all right reserved 2024 <br />
        by sayah Abdel-ilah & Moumine rayane & Mouad chiali
      </p>
    </div>
  );
}

export default Footer;
