import { useState } from "react";

function Modal({ projects }) {
  console.log(projects);

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="modal-container">
        <button onClick={toggleModal}>Open</button>

        {modal && (
          <div className="modal">
            <div className="overlay">
              <div className="modal-content">
                <h2>Modal</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Explicabo corporis voluptate odit tempore eligendi aperiam ea
                  cum illum nesciunt, possimus maiores qui perferendis quasi
                  laborum, sunt voluptatem mollitia. Facilis, cumque.
                </p>
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
