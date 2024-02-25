import React from "react";
import Comments from "./Comments";
import icon1 from "../assets/discord.svg";
import icon2 from "../assets/telegram.svg";
import img from "../assets/comment.svg";
import Aos from "aos";
import { useEffect } from "react";

function Comunity() {
  useEffect(()=>{Aos.init()},[])
  return (
    <div className="container my-16 mx-auto flex flex-col">
      <h2>Our comunity</h2>
      <Comments />
      <div data-aos="flip-left" data-aos-duration="1500" className=" w-full flex flex-col justify-center items-center">
        
  
        <div className="bgimg2 my-14  h-96 w-full flex flex-col items-center justify-center bg-center brightness-75 rounded-2xl bg-cover">
          <h4 className="text-2xl my-2 xs:text-lg uppercase text-center font-extrabold mt-8 text-main/100 shadow-2xl">
            enjoy your academic life
          </h4>
        </div>
      </div>
    </div>
  );
}

function Button({ icon, text }) {
  return (
    <div className="flex m-3  md:w-1/2 bg-white  cursor-pointer transition hover:scale-105  px-4 items-center   rounded-3xl">
      <img src={icon} className="size-10 px-1 lg:p-0 " />
      <h4 className="mx-auto text-sm text-nowrap uppercase font-semibold">
        {text}
      </h4>
    </div>
  );
}

export default Comunity;
