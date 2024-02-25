import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import Aos from "aos";
import { useEffect } from "react";
function Activity() {
  useEffect(()=>{Aos.init()},[])
  return (
    <div id="about" className="w-full flex flex-col p-4">
      <Sectioon
        title="Dev Team"
        img={img1}
        text="Our Team consist of the brightest and sharpest minds that will lead to a lot of tomorrow breakthroughs and that will get you to a higher rank in the tech industry.
"
      />
      <Sectioon
        title="Game Dev"
        img={img2}
        text="
        In this fusion of creativity and code, we're revolutionizing gaming experiences, unlocking the doors to boundless possibilities in the visual industry landscape. Together, we redefine immersion and engagement, setting new standards for interactive entertainment."
      />
      <Sectioon
        title="Explore AI"
        img={img3}
        text="AI community within our computer science club consiste of Passionate minds pushing the borders of artificial intelligence, sharing knowledge, and shaping the future of technology

        "
      />
    </div>
  );
}

function Sectioon({ title, text, img }) {
  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className="flex flex-col md:flex-row-reverse my-8 justify-between md:odd:flex-row items-center gap-16">
      <div className="flex flex-col gap-4">
        <h3 className="text-main text-4xl ">{title} </h3>
        <p className="text-justify text-white">{text} </p>
      </div>
      <img
        className="size-96 w-full md:w-[40%] rounded-3xl object-cover"
        src={img}
      />
    </div>
  );
}

export default Activity;
