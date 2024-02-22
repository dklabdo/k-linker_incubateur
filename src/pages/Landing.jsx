import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import MobileNav from "../components/MobileNav";
import { AppContext } from "../AppProvider";
import Hero from "../components/Hero";
import Section1 from "../components/Section1";
import Comments from "../components/Comments";
import Comunity from "../components/Comunity";
import Activity from "../components/Activity";
import About from "../components/About";
import Team from "../components/Team";
import Media from "../components/Media";
function Landing() {
  const { open, HandleOpenMobileNav } = useContext(AppContext);
  return (
    <>
      <div className="w-full">
        <NavBar />
        <Hero/>
        <div className="container py-2 px-4 md:px-8  mx-auto">
          <Section1 />
          <Comunity />
          <Activity />
          <Team/>
          <Media/>
        </div>

        {open && <MobileNav />}
      </div>
    </>
  );
}

export default Landing;
