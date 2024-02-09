import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import MobileNav from "../components/MobileNav";
import { AppContext } from "../AppProvider";
import Hero from "../components/Hero";
import Section1 from "../components/Section1";
import Comments from "../components/Comments";
import Comunity from "../components/Comunity";
import Activity from "../components/Activity";

function Landing() {
  const { open, HandleOpenMobileNav } = useContext(AppContext);
  return (
    <>
      <div className="bgimg bg-cover bg-center mb-14">
        <NavBar />   
        <Hero />
      </div>
      <div className="h-screen mx-auto px-6"> 
        
        {open && <MobileNav />}
        <Comunity/>
        <Section1 />
        

        <Activity/>
      </div>
    </>
  );
}

export default Landing;
