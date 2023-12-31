import React from "react";
import "./order.css";
import Nav from "../../Component/NavBar/Nav";
import Footer from "../../Component/footer/Footer";
import store from "../../data/store";
// import { Link } from "react-router-dom";
function Order() {
  const handleLinkClick = (link) => {
    window.location.href = `${link}`;
  };

  const storeSorted = [...store].sort((a, b) => a.No - b.No);

  return (
    <>
      <Nav />
      <div className="order">
        <div className="image-container">
          {/* <img
            className="image1"
            src="/Photos/Asia Villa-1.png"
            alt="Background"
          /> */}
          <img
            className="image2"
            src="/Photos/deliveroo-brought.png"
            alt="Background"
          />
        </div>
        {storeSorted.map((item, index) => (
          <div
            key={index}
            className="linkContainerStyle"
            onClick={() => handleLinkClick(item.Link)}
          >
            <p>{item.Name}</p>
            <p>{item.Address}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Order;
