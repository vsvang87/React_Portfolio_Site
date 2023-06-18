import React from "react";
import img1 from "/image/visay2.jpg";
import resume from "../Resume/frontend.pdf";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="hero-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      // initial={{ width: 0 }}
      // animate={{ width: "100%" }}
      // exit={{ x: window.innerWidth, transition: { duration: 0.7 } }}
    >
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
    </motion.div>
  );
};

export default Hero;
