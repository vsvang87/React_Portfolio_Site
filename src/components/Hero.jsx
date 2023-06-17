import React from "react";
import img1 from "./../../public/image/visay2.jpg";
import resume from "../Resume/frontend.pdf";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="wrapper">
        <div className="hero-content">
          <div className="hero-intro">
            <img src={img1} alt="" />
            <h1>Visay Vang</h1>
            <p>Frontend Developer</p>
            <p>Available for work.</p>
            <div className="social-links">
              <div className="github">
                <a href="https://github.com/vsvang87">
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
              <div className="linkedin">
                <a href="https://www.linkedin.com/in/vsvang/">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="resume-div">
              <a href={resume} target="_blank">
                <i class="fa-solid fa-download"></i>
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
