import React, { useState } from "react";
import logo from "../assets/k-linker_logo.svg";
import menu from "../assets/menu.svg";
import { useContext } from "react";
import { AppContext } from "../AppProvider";
function NavBar() {
  const [selected, setselected] = useState(1);
  const { open, HandleOpenMobileNav } = useContext(AppContext);
  return (
    <nav className="p-2 flex justify-between items-center">
      <img
        src={logo}
        className="w-14 p-2 sm:w-16 m-2 cursor-pointer"
        onClick={() => window.location.reload()}
      />

      {!open && (
        <img
          src={menu}
          className="sm:hidden w-12 cursor-pointer"
          onClick={() => HandleOpenMobileNav()}
        />
      )}

      <ul className="hidden sm:flex sm:w-[75%] md:w-2/3 justify-around  items-center ">
        <a
          className={selected == 1 ? "navlinks active" : "navlinks"}
          onClick={() => setselected(1)}
        >
          Home
        </a>
        <a
          className={selected == 2 ? "navlinks active" : "navlinks"}
          onClick={() => setselected(2)}
        >
          About us
        </a>
        <a
          className={selected == 3 ? "navlinks active" : "navlinks"}
          onClick={() => setselected(3)}
        >
          Contact us
        </a>
        <a
          className={selected == 4 ? "navlinks active" : "navlinks"}
          onClick={() => setselected(4)}
        >
          News
        </a>
      </ul>
    </nav>
  );
}

export default NavBar;
