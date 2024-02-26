import React from "react";
import icon from "../assets/quote.svg";
import img1 from "../assets/profile1.jpg";
import img2 from "../assets/profile2.jpg";
import Aos from "aos";
import { useEffect } from "react";
function Comments() {
  useEffect(()=>{Aos.init()},[])
  return (
    <div className="container my-16  w-full gap-3  h-fit flex flex-col justify-between relative md:flex-row">
      <Card
        profile={img1}
        name="Diab Mohamed"
        comment="K Linker  fuels the intellectual growth and hones the coding skills, and cultivates an innovative community"
      />
      <Card
        profile={img2}
        name="Belhimer Ali"
        comment="K-linker is the family that accompanies you towards developing your skills in your study and work"
      />
    </div>
  );
}

function Card({ profile, comment, name }) {
  return (
    <div data-aos="fade-right" data-aos-duration="1000" className="w-[90%] mx-4  md:w-1/2  flex flex-col">
      <img src={icon} className="size-14 md:size-16 lg:size-20 xl:size-24 " />
      <div className="flex items-center gap-4 my-4">
        <img src={profile} className="size-16 object-cover rounded-full" />
        <h3 className="text-white font-medium ">{name} </h3>
      </div>
      <p className="text-white text-justify text-base lg:text-lg">{comment}</p>
    </div>
  );
}

export default Comments;
