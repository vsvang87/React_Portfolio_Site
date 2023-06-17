import { useState } from "react";
import { Link } from "react-router-dom";

const Projects = ({ projects }) => {
  const [search, setSearch] = useState([]);
  console.log(projects);
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
                <a href="#">All</a>
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
                    <h4>{item.name}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
