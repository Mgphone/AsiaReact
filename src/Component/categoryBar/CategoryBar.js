// import React, { useEffect, useState, useRef } from "react";
// import "./CategoryBar.css";

// function CategoryBar({ groupedMenu }) {
//   const categoryBarRef = useRef([]);
//   categoryBarRef.current = Object.keys(groupedMenu);

//   const [activeSection, setActiveSection] = useState("");

//   const scrollToElement = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//     setActiveSection(id);
//   };

//   const handleScroll = () => {
//     const categoryBar = categoryBarRef.current;

//     for (const item of categoryBar) {
//       const section = document.getElementById(item);
//       if (section) {
//         const rect = section.getBoundingClientRect();
//         if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
//           setActiveSection((prevActiveSection) => {
//             console.log("Active Section:", item);
//             return item;
//           });
//           break;
//         }
//       }
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       <div className="categories">
//         <div className="button-container">
//           {categoryBarRef.current.map((item) => (
//             <button
//               key={item}
//               onClick={() => scrollToElement(item)}
//               style={{
//                 backgroundColor: activeSection === item ? "#e5007e" : "",
//               }}
//             >
//               {item}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CategoryBar;
import React, { useState, useEffect } from "react";
import "./CategoryBar.css";
import { Link, animateScroll as scroll } from "react-scroll";
function CategoryBar({ groupedMenu }) {
  const categoryBar = Object.keys(groupedMenu);
  const [activeButton, setAciveButton] = useState("");
  const handleButtonActive = (to) => {
    setAciveButton(to);
  };

  useEffect(() => {
    // When the active button changes, scroll to ensure it's in view
    if (activeButton) {
      const container = document.querySelector(".button-container");
      // const activeButtonElement = document.querySelector(
      //   `[to='${activeButton}']`
      // );
      const activeButtonElement = document.querySelector(".button-active");
      if (container && activeButtonElement) {
        const containerWidth = container.clientWidth;
        const activeButtonLeft = activeButtonElement.offsetLeft;
        const activeButtonWidth = activeButtonElement.offsetWidth;

        // Calculate the scroll position to center the active button
        const scrollLeft =
          activeButtonLeft - containerWidth / 2 + activeButtonWidth / 2;

        // Scroll to the calculated position
        container.scrollLeft = scrollLeft;
      }
    }
  }, [activeButton]);

  return (
    <div>
      <div className="categories">
        <div className="button-container">
          {categoryBar.map((item) => (
            <button
              key={item}
              className={`button-default ${
                item === activeButton ? "button-active" : ""
              }`}
            >
              {/* {item} */}
              <Link
                activeClass="active"
                to={item}
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onSetActive={handleButtonActive}
              >
                {item}
              </Link>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryBar;
