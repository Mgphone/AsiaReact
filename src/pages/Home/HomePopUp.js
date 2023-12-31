import { useEffect } from "react";
import React from "react";

function HomePopUp({ isOpen, onclose, clickOutside, setIsOpen }) {
  useEffect(() => {
    const currentDate = new Date();
    const checkDate = new Date("2023-10-30");
    if (checkDate < currentDate) {
      setIsOpen(false);
    }
  });
  useEffect(() => {
    const keyPress = (e) => {
      if (e.key === "Escape" && isOpen) {
        onclose();
      }
    };
    window.addEventListener("keydown", keyPress);
    return () => {
      window.removeEventListener("keydown", keyPress);
    };
  }, [isOpen, onclose]);
  const handleClose = () => {
    if (clickOutside) {
      onclose();
    }
  };
  return (
    <>
      {isOpen && (
        <div className="homepopup" onClick={handleClose}>
          <div className="homeimagecontainer">
            <img
              src={require("../../assets/Images/30102023.jpg")}
              alt="discount display"
            />
            <button className="homeclosebutton" onClick={onclose}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default HomePopUp;
