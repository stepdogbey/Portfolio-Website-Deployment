import React from "react";
import CV from "../../documents/Doc1.pdf";

const DCBtn = () => {
  return (
    <div className="dcbtn">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-1">
        Contact Me
      </a>
    </div>
  );
};

export default DCBtn;
