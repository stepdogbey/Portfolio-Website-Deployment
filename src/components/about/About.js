import { Link } from "react-router-dom";
import { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import React from "react";
import Image from "../../images/me.png";
import CV from "../../documents/Doc1.pdf";
import "./about.css";

const About = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <section className="about-section section" id="about">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-heading="main info">About me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-img">
            <div className="img-box inner-shadow">
              <img src={Image} className="outer-shadow" alt="profile-pic" />
            </div>
            <div className="social-links">
              <a
                href="https://facebook.com"
                className="outer-shadow hover-in-shadow"
                target="_blank"
              >
                <BsFacebook />
              </a>
              <a
                href="https://twitter.com"
                className="outer-shadow hover-in-shadow"
                target="_blank"
              >
                <BsTwitter />
              </a>
              <a
                href="https:/instagram.com"
                className="outer-shadow hover-in-shadow"
                target="_blank"
              >
                <BsInstagram />
              </a>
              <a
                href="https://linkedin.com"
                className="outer-shadow hover-in-shadow"
                target="_blank"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>
          <div class="about-info">
            <p>
              <p>
                <span>Hi, am Steve. </span>Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Itaque temporibus autem recusandae
                tenetur vero dolor! Ipsam neque esse laboriosam corporis
                perspiciatis soluta odit debitis, veniam consectetur omnis eaque
                consequuntur praesentium reiciendis illo velit alias? Quos quasi
                saepe pariatur doloribus labore vitae! Autem cum maxime, modi
                recusandae molestiae at excepturi quo.
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Illo, harum consequuntur vero blanditiis modi nam. Et
                  cupiditate aspernatur maxime magni!
                </p>
              </p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// import React from "react";
// import "./about.css";
// import Image from "../../images/me.png";
// import { FiAward } from "react-icons/fi";
// import { AiOutlineUserAdd } from "react-icons/ai";
// import { AiFillFolderOpen } from "react-icons/ai";

// const About = () => {
//   return (
//     <section id="about">
//       <h5>Get to know me</h5>
//       <h2>About me</h2>
//       <div className="container about__container">
//         <div className="about__me">
//           <div className="about__me-image">
//             <img src={Image} alt=" About me" />
//           </div>
//           <div className="about__content">
//             <div className="about__cards">
//               <article className="about__card">
//                 <FiAward className="about__icon" />
//                 <h5>Experience</h5>
//                 <small>3+ Years Working</small>
//               </article>
//               <article className="about__card">
//                 <AiOutlineUserAdd className="about__icon" />
//                 <h5>Client</h5>
//                 <small>20+ Worldwide</small>
//               </article>
//               <article className="about__card">
//                 <AiFillFolderOpen className="about__icon" />
//                 <h5>Projects</h5>
//                 <small>30+ Projects</small>
//               </article>
//             </div>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
//               alias perspiciatis itaque reiciendis tempora asperiores natus sint
//               deleniti corporis id delectus? Molestiae natus perferendis soluta
//             </p>
//             <a href="#contact" className="btn btn-primary">
//               Contact
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
