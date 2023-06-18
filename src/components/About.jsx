import React from "react";
import img from "/image/visay3.jpg";
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
                  I'm a Software Developer with an eye for responsive UI design.
                  I enjoy turning ideas into beautiful and intuitive designs.
                </p>
                <p>
                  My aim is to bring across your message and identity in the
                  most creative way.
                </p>

                <div className="contact-container">
                  <h2>Personal Info</h2>
                  <p>
                    <i class="fa-solid fa-phone"></i> 414-243-4862
                  </p>
                  <p>
                    <i class="fa-solid fa-envelope"></i> vsvang@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="skills-container">
              <h2>Tech Stack</h2>
              <ul className="skills-content">
                <li>HTML</li>
                <li>Sass</li>
                <li>Python</li>
                <li>Flask</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>PostgreSQL</li>
                <li>SQL Alchemy</li>
                <li>Bootstrap</li>
                <li>React</li>
                <li>Jinja</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
