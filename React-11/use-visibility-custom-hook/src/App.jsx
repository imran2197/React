import React from "react";
import Modal from "./components/Modal";
import { useVisibility } from "./hooks/useVisibility";

// Problem Statement
// You need to create a custom hook in React that manages the visibility of an element, such as a modal or dropdown. This custom hook, useVisibility, should provide a simple interface(functions etc) to show and hide the element and should be reusable across different components.

// Features Required

// Initial Visibility State: The custom hook should allow setting an initial visibility state.
// Toggle Visibility: The hook should provide a method to toggle the visibility state.
// Show and Hide Methods: The hook should provide methods to explicitly show or hide the element.
// Visibility State: The hook should return the current visibility state.

const App = () => {
  const {
    visiblity: isModalVisible,
    show: showModal,
    hide: hideModal,
  } = useVisibility();
  return (
    <div>
      <h1>Use Visiblility Custom Hook</h1>
      <button onClick={showModal}>Show Modal</button>
      {isModalVisible && <Modal closeModal={hideModal} />}
    </div>
  );
};

export default App;
