import React, { useState, useRef } from "react";
import img from "../assets/k-linker_logo.svg";
import cancel from "../assets/close.svg";
import axios from "axios";
import { CorsRequest } from "cors";
function Register() {
  const s1 = useRef();
  const s2 = useRef();
  const s3 = useRef();
  const s4 = useRef();
  const s5 = useRef();
  const s6 = useRef();
  const s7 = useRef();
  const s8 = useRef();
  const s9 = useRef();
  const s10 = useRef();
  const s11 = useRef();
  const s12 = useRef();
  const s13 = useRef();
  const s14 = useRef();
  const s15 = useRef();
  const [formData, setFormData] = useState({
    fullname: "",
    phonenumber: "",
    email: "",
    idnumber: "",
    grade: "",
    Skills: [],
    desc: "",
  });
  const [skils, setskils] = useState([]);
  const HandleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const HandleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    formData.Skills = skils;
    console.log("Form submitted:", formData);

    const url = "https://versionallami.onrender.com/register";
    const options = {
      method: "POST",
      body: '{\n    "url": "https://versionallami.onrender.com/register",\n    "method": "POST",\n    "body":  formData,\n    }',
    };

    fetch(url, options)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };
  function AddSkils(e, val) {
    e.preventDefault();
    console.log(val);
    e.target.classList.add("active");
    if (!skils.includes(val)) {
      const newSkil = [...skils, val];
      console.log(newSkil);
      setskils(newSkil);
    }
  }

  function HandeleRemove(eleme, rm) {
    eleme.current.classList.remove("active");
    const removeSkils = skils.filter((el) => el !== rm);
    setskils(removeSkils);
  }

  return (
    <div className="bgimg3">
      <div className="container mx-auto px-10 md:p-24 flex justify-center  flex-col">
        <img src={img} className="w-32 self-center my-10" />
        <form onSubmit={(e) => HandleSubmit(e)} className=" flex flex-col">
          <label className="  ">Name</label>
          <div className="w-full flex flex-col  gap-4">
            <input
              onChange={HandleChange}
              id="name"
              name="fullname"
              className="w-full"
              type="text"
              placeholder="your name"
            />
          </div>
          <label onChange={HandleChange}>Information</label>
          <input
            onChange={HandleChange}
            name="phonenumber"
            id="info"
            type="text"
            placeholder="Phone number"
          />
          <input
            onChange={HandleChange}
            name="email"
            type="email"
            placeholder="e-mail"
          />
          <input
            onChange={HandleChange}
            name="idnumber"
            type="text"
            placeholder="student card number"
          />
          <label>Grade</label>
          <select name="grade" onChange={HandleChange} id="grade">
            <option value="ing1">ing 1</option>
            <option value="ing2">ing 2</option>
            <option value="l1">L1</option>
            <option value="l2">L2</option>
            <option value="l3">L3</option>
            <option value="m1">M1</option>
            <option value="m2">M2</option>
          </select>
          <label onChange={HandleChange}>Skils</label>
          <div className="flex flex-wrap">
            <button
              className="skil"
              ref={s1}
              onClick={(e) => {
                AddSkils(e, 1);
              }}
            >
              <span className="bg-transparent">
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s1, 1)}
                  src={cancel}
                />
              </span>{" "}
              front-end web developer
            </button>
            <button className="skil" ref={s2} onClick={(e) => AddSkils(e, 2)}>
              <span>
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s2, 2)}
                  src={cancel}
                />
              </span>{" "}
              back-end web developer
            </button>
            <button className="skil" ref={s3} onClick={(e) => AddSkils(e, 3)}>
              <span>
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s3, 3)}
                  src={cancel}
                />
              </span>{" "}
              full stack web developer
            </button>
            <button className="skil" ref={s4} onClick={(e) => AddSkils(e, 4)}>
              <span>
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s4, 4)}
                  src={cancel}
                />
              </span>{" "}
              Mobile developer
            </button>
            <button className="skil" ref={s5} onClick={(e) => AddSkils(e, 5)}>
              <span>
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s5, 5)}
                  src={cancel}
                />
              </span>{" "}
              DevOps
            </button>
            <button className="skil" ref={s6} onClick={(e) => AddSkils(e, 6)}>
              <span>
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s6, 6)}
                  src={cancel}
                />
              </span>{" "}
              Ui/UX
            </button>
            <button className="skil" ref={s7} onClick={(e) => AddSkils(e, 7)}>
              <span>
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s7, 7)}
                  src={cancel}
                />
              </span>{" "}
              Graphic designer
            </button>
            <button className="skil" ref={s8} onClick={(e) => AddSkils(e, 8)}>
              <span>
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s8, 8)}
                  src={cancel}
                />
              </span>{" "}
              3D modeler
            </button>
            <button className="skil" ref={s9} onClick={(e) => AddSkils(e, 9)}>
              <span>
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s9, 9)}
                  src={cancel}
                />
              </span>{" "}
              Desktop app dev (.NET){" "}
            </button>
            <button className="skil" ref={s10} onClick={(e) => AddSkils(e, 10)}>
              <span>
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s10, 10)}
                  src={cancel}
                />
              </span>
              Natwork ingineer{""}
            </button>
            <button className="skil" ref={s11} onClick={(e) => AddSkils(e, 11)}>
              <span>
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s11, 11)}
                  src={cancel}
                />
              </span>
              Photographe
            </button>
            <button className="skil" ref={s12} onClick={(e) => AddSkils(e, 12)}>
              <span>
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s12, 12)}
                  src={cancel}
                />
              </span>
              Video editer
            </button>
            <button className="skil" ref={s13} onClick={(e) => AddSkils(e, 13)}>
              <span>
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s13, 13)}
                  src={cancel}
                />
              </span>
              Game dev
            </button>
            <button className="skil" ref={s14} onClick={(e) => AddSkils(e, 14)}>
              <span>
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s14, 14)}
                  src={cancel}
                />
              </span>
              Robotic ingineer
            </button>
            <button className="skil" ref={s15} onClick={(e) => AddSkils(e, 15)}>
              <span>
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s15, 15)}
                  src={cancel}
                />
              </span>
              Tech project manager
            </button>
          </div>
          <label>Talk about yourself</label>
          <textarea
            onChange={HandleChange}
            name="desc"
            placeholder="talk about youself in 100 word"
            className=""
          />
          <button
            className="px-4 py-2 text-black text-lg my-10 w-fit mx-auto rounded-full bg-main"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
