import React from "react";
import { useEffect } from "react";
import Aos from "aos";
function About() {
  useEffect(()=>{Aos.init()},[])
  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className="my-8">
      <h2>Start-up linker</h2>
      <p className="text-white text-lg text-center">
        Our Club lance a thrilling program, linking
        university developers with startups, catalyzing innovation and
        real-world project development at lightning speed. Together, they forge
        a dynamic synergy, propelling ambitious ideas into tangible success
        stories.
      </p>
    </div>
  );
}

export default About;
