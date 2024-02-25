import React, { useEffect } from "react";
import "animate.css";
import { useNavigate } from "react-router-dom";
import Aos from "aos";

function Hero() {
  const navigate = useNavigate();
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div id="home" className="bgimg bg-cover w-full  bg-center h-[600px] rounded-br-[20px] rounded-bl-[20px]  left-0 my-2 relative -top-24">
          <div  className="bg-black/60 h-full flex flex-col justify-center items-center">
            <h1 data-aos="zoom-in" data-aos-duration="1000" className="text-center">Kickstarter linker</h1>
            <h3 data-aos="zoom-in" data-aos-duration="1000" className="md:text-xl text-base font-mono text-center text-white">
              <q>It's time for your ideas to meet actions</q>
            </h3>
            <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" className="flex flex-col sm:flex-row gap-4 sm:gap-10 my-6">
              <button  onClick={()=>navigate("/registration")} className=" border-2 border-main px-12 py-2 text-base shadow-md  hover:bg-main hover:text-black transition shadow-black text-main rounded-full font-bold">
                Join k-linker
              </button>
            </div>
          </div>
        </div>
  );
}

export default Hero;
