import React from "react";
import DCBtn from "./DCBtn";
import "./header.css";
import Image from "../../images/me.png";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi</h5>
        <h1>Am Steve</h1>
        <h5 className="text-light"> Software Engineer</h5>
        <DCBtn />
        <HeaderSocials />
        <div className="myself">
          <img src={Image} alt="myself" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
