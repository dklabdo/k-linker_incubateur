import React from "react";
import img from "../assets/contact.webp";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Aos from "aos";
import { useEffect } from "react";
function Contact() {
    useEffect(()=>{Aos.init()},[])

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3t7mj8i", "template_qj3d7ji", form.current, {
        publicKey: "Hz9iwIrSSlCn3enIF",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact" data-aos="zoom-in" data-aos-duration="1000" className="w-full mb-12">
      <h1 className="text-center mb-12">Contact us</h1>
      <div className="flex flex-col-reverse lg:flex-row  gap-[10%] p-4">
        
        <form
          ref={form}
          onSubmit={(e) => sendEmail(e)}
          className="lg:w-[80%] w-full mx-auto lg:mt-10"
        >
          <input
            className="bg-black py-7 w-full p-2 my-2 h-12 focus:outline-none text-white border-b-2 border-main"
            type="text"
            placeholder="name"
            name="user_name"
          />
          <input
            className="bg-black w-full py-7 p-2 my-2 h-12 focus:outline-none text-white border-b-2 border-main"
            type="text"
            placeholder="email"
            name="user_email"
          />
          <input
            className="bg-black w-full py-7 p-2 my-2 h-12 focus:outline-none text-white border-b-2 border-main"
            type="text"
            placeholder="subject"
            name="subject"
          />
          <textarea
            className="bg-black rounded-none w-full p-2 my-2 h-24 placeholder:absolute placeholder:top-0 focus:outline-none text-white border-b-2 border-main"
            type="text"
            placeholder="your message"
            name="message"
          />
          <button
            className="bg-main py-2 font-semibold  my-4  text-base w-full"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
      <p className="text-lg mx-2 text-white text-center mt-24">
        Our club is always ready for collaboration{" "}
      </p>
    </div>
  );
}

export default Contact;
