import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import Modal from "./Modal";

const Projects = ({ projects }) => {
  // set modal
  const [openModal, setOpenModal] = useState(false);
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
  // handle click modal
  // const handleModalClick = (e) => {
  //   const projectId = Number(e.target.id);
  //   if (projectId === selectedId) {
  //     setSelectedId("");
  //   } else {
  //     setSelectedId(projectId);
  //   }
  // };

  useEffect(() => {
    let filteredData = filterCategory(projects);
    filteredData = filterCategory(filteredData);
    setFilterProject(filteredData);
  }, [selectCategory]);

  // toggle modal
  // function toggleModal() {
  //   setOpenModal(!openModal);
  // }
  return (
    <motion.div
      className="project-container"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, X: -100 }}
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
                      {/* <a href="#" onClick={toggleModal} key={index}></a> */}
                      <img src={item.image} alt="" />
                      {/* {openModal && (
                        <div className="modal" onClick={handleModalClick}>
                          <div className="overlay">
                            <div
                              className={
                                selectedId === 1
                                  ? "active-option"
                                  : "filter-option"
                              }
                              id="1"
                            >
                              {item.name}

                              <button onClick={toggleModal}>Close</button>
                            </div>
                          </div>
                        </div>
                      )} */}
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
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
