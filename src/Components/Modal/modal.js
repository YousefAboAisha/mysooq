import React from "react";

const Modal = ({ setIsOpen, open }) => {
  return (
    <div
      onClick={() => setIsOpen(false)}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgb(0,0,0,0.3)",
        top: 0,
        left: 0,
        zIndex: "10",
        visibility: open ? "1" : "0",
        transition: "all 1s linear",
        overflowY: "hidden",
      }}
    ></div>
  );
};

export default Modal;
