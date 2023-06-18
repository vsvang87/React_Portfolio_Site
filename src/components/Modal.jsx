import { useState } from "react";

function Modal({ projects }) {
  console.log(projects);

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <button onClick={toggleModal} className="open-btn">
        Open
      </button>
      {modal && (
        <section className="modal-container">
          <div className="overlay">
            <div className="modal-content">
              {projects.map((item) => {
                return (
                  <div className="modal-card" key={item.id}>
                    <h3>{item.name}</h3>
                    <div className="modal-inner-content">
                      <div className="modal-tech-stack">
                        <h3>Tech Stack:</h3>
                        <p>{item.tech}</p>
                      </div>
                      <div className="modal-project-info">
                        <p>{item.description}</p>
                      </div>
                      <div className="modal-project-img">
                        <img src={item.image} alt="" />
                      </div>
                    </div>
                  </div>
                );
              })}

              <button onClick={toggleModal} className="close-btn">
                Close
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Modal;
