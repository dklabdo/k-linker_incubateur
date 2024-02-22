import React from "react";
import icon from "../assets/quote.svg";
import img1 from "../assets/profile1.jpg";
function Comments() {
  return (
    <div className="container my-16  w-full gap-3  h-fit flex flex-col justify-between relative md:flex-row">
      <Card
        profile={img1}
        name="Diab Mohamed"
        comment="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,"
      />
      <Card
        profile={img1}
        name="Diab Mohamed"
        comment="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,"
      />
    </div>
  );
}

function Card({ profile, comment, name }) {
  return (
    <div className="w-[90%] mx-4  md:w-1/2  flex flex-col">
      <img src={icon} className="size-14 md:size-16 lg:size-20 xl:size-24 " />
      <div className="flex items-center gap-4 my-4">
        <img src={profile} className="size-16 rounded-full" />
        <h3 className="text-white font-medium ">{name} </h3>
      </div>
      <p className="text-white text-justify text-sm">{comment}</p>
    </div>
  );
}

export default Comments;
