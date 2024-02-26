import React from "react";
import img from "../assets/profile1.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import { useEffect } from "react";
import img1 from '../assets/team/img1.jpg'
import img2 from '../assets/team/img2.jpg'
import img3 from '../assets/team/img3.jpg'
import img4 from '../assets/team/img4.jpg'
import img5 from '../assets/team/img5.jpg'
import img6 from '../assets/team/img6.jpg'
import img7 from '../assets/team/img7.jpg'
import img8 from '../assets/team/img8.jpg'
import img9 from '../assets/team/img9.jpg'
function Team() {
  useEffect(()=>{Aos.init()},[])

  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className="mb-4 md:mb-32">
      <h2 className="">Our team</h2>
      <div className="hidden md:grid relative mx-auto md:grid-cols-2 lg:grid-cols-3   grid-cols-1   overflow-y-hidden h-fit ">
        <ProfileCard
          img={img1}
          name="Sayah Abdel-ilah"
          post="Club president"
          job="front-end web developer"
        />
        <ProfileCard
          img={img6}
          name="Bouanani rania"
          post="vice-president"
          job="Back-end developer"
        />
        <ProfileCard
          img={img9}
          name="Dib Abdelkarim"
          post="Externel relation"
          
        />
        <ProfileCard
          img={img2}
          name="Moumine Rayane"
          post="Dev team leader"
          job="Mobile developer"
        />
        <ProfileCard img={img3} name="Chiali mouad" post="Mobile Developer" />
        <ProfileCard
          img={img4}
          name="Benmansnour imad"
          post="Back-and developer"
        />
        <ProfileCard
          img={img5}
          name="Amrani heithem"
          post="Back-end developer"
        />
        
        <ProfileCard
          img={img7}
          name="Benharrat walid"
          post="HR leader"
          job="3d artist"
        />
       
        <ProfileCard
          img={img8}
          name="Mehamdi soufiane"
          post="Production"
          job="Photographer"
        />
      </div>
      <MobileSlider/>
    </div>
  );
}

function ProfileCard({ img, name, job, post }) {
  return (
    <div className="mb-12 cursor-pointer md:mb-0 mx-auto w-full px-2 flex-col md:flex-row  gap-6 group transition md:hover:bg-white rounded-xl flex items-center  py-6 my-4 ">
      <img
        className="w-28 object-cover h-28 md:w-20 md:h-20 rounded-full"
        src={img}
        alt="..."
      />
      <div className="">
        <h3 className="text-center md:text-start md:text-lg text-xl text-main">{name} </h3>
        <p className="text-white md:text-start text-center text-lg md:text-base md:group-hover:text-black">
          {post} <br />
          {job}{" "}
        </p>
      </div>
    </div>
  );
}

function MobileSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
    
  };
  return (
    <div className="w-full px-4 md:hidden h-[500px] ">
      <Slider {...settings}>
        <ProfileCard
          
          img={img1}
          name="Sayah Abdel-ilah"
          post="Club president"
          job="front-end web developer"
        />
        <ProfileCard
          img={img6}
          name="Bouanani rania"
          post="vice-president"
          job="Back-end developer"
        />
        <ProfileCard
          img={img9}
          name="Dib Abdelkarim"
          post="Externel relation"
          
        />
        <ProfileCard
          img={img2}
          name="Moumine Rayane"
          post="Dev team leader"
          job="Mobile developer"
        />
        <ProfileCard img={img3} name="Chiali mouad" post="Mobile Developer" />
        <ProfileCard
          img={img4}
          name="Benmansnour imad"
          post="Back-and developer"
        />
        <ProfileCard
          img={img5}
          name="Amrani heithem"
          post="Back-end developer"
        />
        
        <ProfileCard
          img={img7}
          name="Benharrat walid"
          post="HR leader"
          job="3d artist"
        />
        
        <ProfileCard
          img={img8}
          name="Mehamdi soufiane"
          post="Production"
          job="Photographe"
        />
      </Slider>
    </div>
  );
}

export default Team;
