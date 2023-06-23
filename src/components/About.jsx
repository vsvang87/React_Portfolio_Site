import React from "react";
import img from "/image/visay2.jpg";
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
import { MdFamilyRestroom } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsEnvelopeAt } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
function About() {
  return (
    <>
      <section className="about-section">
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
                  I'm a Software Developer base in Anderson, SC. Prior to
                  software development I worked as a CNC Machinist for 5+ years
                  working with low level code. With my eagerness to learn and
                  grow at my workplace I found code.
                </p>

                <p>
                  I enjoy turning ideas into beautiful and intuitive designs. My
                  aim is to bring across your message and identity in the most
                  creative way.
                </p>

                <div className="contact-container">
                  <h2>Personal Info</h2>
                  <p>
                    <AiOutlinePhone className="a-icon" /> 414-243-4862
                  </p>
                  <p>
                    <BsEnvelopeAt className="a-icon" /> vsvang@gmail.com
                  </p>
                  <p>
                    <HiOutlineLocationMarker className="a-icon" /> Anderson, SC
                  </p>
                  <p>
                    <MdFamilyRestroom className="a-icon" /> Family Man
                  </p>
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
                  <SiJinja className="icon" />
                  <p>Jinja</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
