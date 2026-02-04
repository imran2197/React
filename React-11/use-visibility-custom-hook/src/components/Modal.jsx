import React from "react";
import "../App.css";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>This is a modal heading</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
          architecto harum neque quidem aperiam delectus est tenetur odit
          dolorum ullam sint. Ad repellat iusto quasi temporibus tempora ipsa
          impedit dolorem.
        </p>
        <button onClick={closeModal}>close</button>
      </div>
    </div>
  );
};

export default Modal;
