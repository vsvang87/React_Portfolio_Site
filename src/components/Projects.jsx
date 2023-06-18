import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Projects = ({ projects }) => {
  // setting state
  const [search, setSearch] = useState([]);

  // filter out projects base on category
  const filterByProject = (project) => {
    setSearch(
      projects.filter((project) => {
        return project.category === "javascript";
      })
    );
  };
  const moreProjects = Array.from(
    new Set(projects.map((project) => project.category))
  );
  return (
    <div className="project-container">
      <div className="wrapper">
        <div className="project-content">
          <h1>
            Projects <span className="line"></span>
          </h1>
          <div className="project-inner-content">
            <ul className="project-links">
              <li>
                <a href="#" onChange={(e) => filterByProject(e.target.value)}>
                  All
                </a>
              </li>
              <li>
                <a href="#">Landing Page</a>
              </li>
              <li>
                <a href="#">JavaScript</a>
              </li>
              <li>
                <a href="#">React</a>
              </li>
              <li>
                <a href="#">Full-Stack</a>
              </li>
            </ul>
            <div className="card-container">
              {projects.map((item) => {
                return (
                  <div className="project-card" key={item.id}>
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
          <Modal projects={projects} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
