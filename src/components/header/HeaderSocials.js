import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";
import { SiFiverr } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="social__links">
      <a href="https://linkedin.com">
        <BsLinkedin />
      </a>
      <a href="https://fiver.com">
        <SiFiverr />
      </a>
      <a href="https://upwork.com">
        <SiUpwork />
      </a>
    </div>
  );
};

export default HeaderSocials;
