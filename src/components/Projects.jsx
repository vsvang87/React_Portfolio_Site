import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Projects = ({ projects }) => {
  // setting state
  const [filterProject, setFilterProject] = useState(projects);
  const [selectCategory, setSelectCategory] = useState("");
  // const [selectedId, setSelectedId] = useState();

  const filterCategory = (filterData) => {
    if (!selectCategory) {
      return filterData;
    }
    const filterTech = filterData.filter(
      (project) => project.category.split(" ").indexOf(selectCategory) !== -1
    );
    return filterTech;
  };
  // handle filter change
  const handleCategoryChange = (e) => {
    setSelectCategory(e.target.value);
  };

  useEffect(() => {
    let filteredData = filterCategory(projects);
    filteredData = filterCategory(filteredData);
    setFilterProject(filteredData);
  }, [selectCategory]);

  return (
    <motion.div
      className="project-container"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", duration: 1, bounce: 0.1 }}
    >
      <div className="wrapper">
        <div className="project-content">
          <h1>
            Projects <span className="line"></span>
          </h1>
          <div className="project-inner-content">
            <div className="tech-filter">
              <h4>Filter by Tech:</h4>
              <select
                id="tech-input"
                value={selectCategory}
                onChange={handleCategoryChange}
              >
                <option value="">All</option>
                <option value="JavaScript">JavaScript</option>
                <option value="React">React</option>
                <option value="Full-Stack">Full-Stack</option>
              </select>
            </div>

            <div className="card-container">
              {filterProject.map((item, index) => {
                return (
                  <div className="project-card active" key={index}>
                    <div className="img-div">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="links-container">
                      <h4>{item.name}</h4>
                      <p>
                        <small>{item.tech}</small>
                      </p>
                      <p>{item.description}</p>
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
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
