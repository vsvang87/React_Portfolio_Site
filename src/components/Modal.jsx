import { useState } from "react";

function Modal({ projects }) {
  console.log(projects);
  const [projectModal, setProjectModal] = useState(projects);
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const handleModalChange = (e) => {
    setProjectModal(e.target.value);
  };

  return (
    <>
      <div className="modal-container">
        <button onClick={toggleModal} onChange={handleModalChange}>
          Open
        </button>

        {modal && (
          <div className="modal">
            <div className="overlay">
              <div className="modal-content">
                {projectModal.map((pop) => {
                  return (
                    <div>
                      <p>{pop.tech}</p>
                    </div>
                  );
                })}
                <button onClick={toggleModal}>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Modal;
