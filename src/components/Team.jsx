import React from "react";
import img from "../assets/profile1.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import { useEffect } from "react";
function Team() {
  useEffect(()=>{Aos.init()},[])

  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className="mb-48">
      <h2 className="">Our team</h2>
      <div className="hidden md:grid relative mx-auto md:grid-cols-2 lg:grid-cols-3   grid-cols-1   overflow-y-hidden h-fit ">
        <ProfileCard
          img={img}
          name="Sayah Abdel-ilah"
          post="Club president"
          job="front-end web developer"
        />
        <ProfileCard
          img={img}
          name="Moumine Rayane"
          post="Dev team leader"
          job="Mobile developer"
        />
        <ProfileCard img={img} name="Chiali mouad" post="Mobile Developer" />
        <ProfileCard
          img={img}
          name="Benmansnour imad"
          post="Back-and developer"
        />
        <ProfileCard
          img={img}
          name="Amrani heithem"
          post="Back-end developer"
        />
        <ProfileCard
          img={img}
          name="Bouanani rania"
          post="vice-president"
          job="ui/ux designer"
        />
        <ProfileCard
          img={img}
          name="Benharrat walid"
          post="HR leader"
          job="3d artist"
        />
        <ProfileCard
          img={img}
          name="Sebti yamena"
          post="Production leader"
          job="ui/ux designer"
        />
        <ProfileCard
          img={img}
          name="Mehamdi soufiane"
          post="Production"
          job="Photographe"
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
        className="w-28 h-28 md:w-20 md:h-20 rounded-full"
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
          
          img={img}
          name="Sayah Abdel-ilah"
          post="Club president"
          job="front-end web developer"
        />
        <ProfileCard
          img={img}
          name="Moumine Rayane"
          post="Dev team leader"
          job="Mobile developer"
        />
        <ProfileCard img={img} name="Chiali mouad" post="Mobile Developer" />
        <ProfileCard
          img={img}
          name="Benmansnour imad"
          post="Back-and developer"
        />
        <ProfileCard
          img={img}
          name="Amrani heithem"
          post="Back-end developer"
        />
        <ProfileCard
          img={img}
          name="Bouanani rania"
          post="vice-president"
          job="ui/ux designer"
        />
        <ProfileCard
          img={img}
          name="Benharrat walid"
          post="HR leader"
          job="3d artist"
        />
        <ProfileCard
          img={img}
          name="Sebti yamena"
          post="Production leader"
          job="ui/ux designer"
        />
        <ProfileCard
          img={img}
          name="Mehamdi soufiane"
          post="Production"
          job="Photographe"
        />
        <ProfileCard img={img} name="Diab mohamed" post="Event animator & HR" />
      </Slider>
    </div>
  );
}

export default Team;
