import React from "react";
import "animate.css";
import Section1 from "./Section1";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  return (
    <div className="bgimg bg-cover w-full  bg-center h-[600px] rounded-br-[20px] rounded-bl-[20px]  left-0 my-2 relative -top-24">
          <div className="bg-black/60 h-full flex flex-col justify-center items-center">
            <h1 className="text-center">Kickstarter linker</h1>
            <h3 className="md:text-xl text-base font-mono text-center text-white">
              <q>It's time for your ideas to meet actions</q>
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 my-6">
              <button onClick={()=>navigate("/registration")} className="bg-main px-4 py-2 text-base rounded-full font-medium">
                Join k-linker
              </button>
              <button className="border-2 border-main px-4 text-base py-2 font-medium rounded-full text-main">Our events</button>
            </div>
          </div>
        </div>
  );
}

export default Hero;
