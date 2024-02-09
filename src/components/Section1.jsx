import React from "react";
import "animate.css";

import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.svg";
import img4 from "../assets/image4.svg";
function Section1() {
  return (
    <div className="container md:flex-row xl:flex xl:h-fit xl:bg-white  bg-transparent w-[100%] animate__animated animate__zoomIn animate__fast animate__delay-4s  rounded-3xl items-center  justify-evenly">
      <div className="md:flex  md:justify-evenly ">
        <Card
          image={img1}
          title="Productive"
          desc="Boost your Productivity and  team work"
        />
        <Card
          image={img2}
          title="creative"
          desc="Explose your creativity and imagination"
        />
      </div>
      <div className="md:flex md:justify-evenly">
        <Card
          image={img3}
          title="DEV"
          desc="Upgrade your developper skils with us"
        />
        <Card
          image={img4}
          title="gaming"
          desc="Developpe and don't forget to have fun"
        />
      </div>
    </div>
  );
}

function Card({ image, title, desc }) {
  return (
    <div className=" m-4 md:w-[50%]  flex flex-col xs:h-fit h-44 md:h-56 items-center px-2 md:px-4 py-6 bg-white text-center  rounded-3xl">
      <img
        className="w-18 xs:size-12 size-16 lg:size-20"
        src={image}
        alt="..."
      />
      <h3 className="md:text-lg  font-semibold uppercase xl:text-lg text-base">
        {title}{" "}
      </h3>
      <p className="  xl:text-base   sm:block  font-light text-sm">{desc} </p>
    </div>
  );
}

export default Section1;
