import React, { useState } from "react";
import "./navBar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUserDelete } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { MdMiscellaneousServices } from "react-icons/md";
import { BsLightbulb } from "react-icons/bs";
import DarkMode from "../darkMode/DarkMode";

function NavBar() {
  const [activeNavbar, setActiveNavbar] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNavbar("#")}
        className={activeNavbar === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNavbar("#about")}
        className={activeNavbar === "#about" ? "active" : ""}
      >
        <AiOutlineUserDelete />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNavbar("#services")}
        className={activeNavbar === "#services" ? "active" : ""}
      >
        <MdMiscellaneousServices />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNavbar("#experience")}
        className={activeNavbar === "#experience" ? "active" : ""}
      >
        <GiSkills />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNavbar("#contact")}
        className={activeNavbar === "#contact" ? "active" : ""}
      >
        <AiOutlineContacts />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNavbar("#portfolio")}
        className={activeNavbar === "#portfolio" ? "active" : ""}
      >
        <BsLightbulb onClick={DarkMode} />
      </a>
    </nav>
  );
}

export default NavBar;
