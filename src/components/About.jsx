import React from "react";
import img from "/image/coder.svg";
import img2 from "/image/secure.svg";
import { SiFlask } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiJinja } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BiCoinStack } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsEnvelopeAt } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { BsGit } from "react-icons/bs";
import { motion } from "framer-motion";
import { LuSoup } from "react-icons/lu";
function About() {
  return (
    <>
      <motion.section
        className="about-section"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 1.2, bounce: 0.0 }}
      >
        <div className="wrapper">
          <div className="about-container">
            <h1>
              About Me <span className="line"></span>
            </h1>
            <div className="about-content">
              <div className="about-img about-col">
                <img src={img} alt="" />
              </div>
              <div className="about-info about-col">
                <h2>Who Am I?</h2>
                <p>
                  I'm a Software Developer based in Anderson, SC. I've developed
                  full-stack and frontend projects free for family members and
                  local churches. I love helping others and making an impact
                  where ever I can.
                </p>

                <p>
                  Frontend development is my strong suit but I am experienced
                  working in a full-stack environment. I regularly work with
                  JavaScript and React. I am always eager to learn new things
                  and grow as a developer. Outside from code I enjoy spending
                  time with my family and hanging out with friends. I also enjoy
                  playing soccer and basketball.
                </p>

                <div className="contact-container">
                  <h2>Personal Info</h2>
                  <div className="contact-grid-content">
                    <p>
                      <AiOutlinePhone className="a-icon" /> 414-243-4862
                    </p>
                    <p>
                      <HiOutlineLocationMarker className="a-icon" /> Anderson,
                      SC
                    </p>
                    <p>
                      <BsEnvelopeAt className="a-icon" /> vsvang@gmail.com
                    </p>
                    <p>
                      <LuSoup className="a-icon" /> Pho
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="skills-container">
              <h2>Tech Stack</h2>
              <div className="skills-content">
                <div className="skills-icon">
                  <AiFillHtml5 className="icon" />
                  <p>HTML</p>
                </div>
                <div className="skills-icon">
                  <DiCss3Full className="icon" />
                  <p>CSS</p>
                </div>
                <div className="skills-icon">
                  <FaSass className="icon" />
                  <p>Sass</p>
                </div>
                <div className="skills-icon">
                  <FaBootstrap className="icon" />
                  <p>Bootstrap</p>
                </div>
                <div className="skills-icon">
                  <DiJavascript1 className="icon" />
                  <p>JavaScript</p>
                </div>
                <div className="skills-icon">
                  <FaReact className="icon" />
                  <p>React</p>
                </div>
                <div className="skills-icon">
                  <DiPython className="icon" />
                  <p>Python</p>
                </div>
                <div className="skills-icon">
                  <SiFlask className="icon" />
                  <p>Flask</p>
                </div>

                <div className="skills-icon">
                  <SiPostgresql className="icon" />
                  <p>PostgreSQL</p>
                </div>
                <div className="skills-icon">
                  <BiCoinStack className="icon" />
                  <p>SQL Alchemy</p>
                </div>
                <div className="skills-icon">
                  <BsGit className="icon" />
                  <p>Git</p>
                </div>

                <div className="skills-icon">
                  <SiJinja className="icon" />
                  <p>Jinja</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default About;
