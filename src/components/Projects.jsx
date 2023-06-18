import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import Modal from "./Modal";

const Projects = ({ projects }) => {
  // setting state
  // const [filterProject, setFilterProject] = useState(projects);

  // filter out projects base on category
  // const filterByProject = (project) => {
  //   setSearch(
  //     projects.filter((project) => {
  //       return project.category === "javascript";
  //     })
  //   );
  // };
  //filter project by category, by grabbing the category key from data.js
  // const filterByCategory = (category) => {
  //   setFilterProject(
  //     projects.filter((project) => {
  //       return project.category === category;
  //     })
  //   );
  // };
  // Using Set to filter unique values
  // const categories = Array.from(
  //   new Set(projects.map((project) => project.category))
  // );

  return (
    <motion.div
      className="project-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      // exit={{ x: window.innerWidth, transition: { duration: 0.7 } }}
    >
      <div className="wrapper">
        <div className="project-content">
          <h1>
            Projects <span className="line"></span>
          </h1>
          <div className="project-inner-content">
            {/* <ul className="project-links">
              <li onChange={(e) => filterByCategory(e.target.value)}>
                {categories.map((category) => {
                  return (
                    <a href="" key={category}>
                      {category}
                    </a>
                  );
                })}
              </li>
            </ul> */}
            <div className="card-container">
              {projects.map((item) => {
                return (
                  <div className="project-card active" key={item.id}>
                    <div className="img-div">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="links-container">
                      <h4>{item.name}</h4>

                      <div className="links">
                        <div className="video link-col">
                          {item.video ? (
                            <a href={item.video} target="_black">
                              <i class="fa-solid fa-play"></i>
                              video
                            </a>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="github link-col">
                          <a href={item.github} target="_blank">
                            <i class="fa-brands fa-square-github"></i>
                            github
                          </a>
                        </div>
                        <div className="site link-col">
                          {item.site ? (
                            <a href={item.site} target="_blank">
                              <i class="fa-solid fa-globe"></i>
                              site
                            </a>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <Modal projects={projects} /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
