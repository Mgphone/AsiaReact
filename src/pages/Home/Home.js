import React, { useState } from "react";
import HomeCards from "./HomeCards";
import Nav from "../../Component/NavBar/Nav";
import Footer from "../../Component/footer/Footer";
import Welcome from "../../Component/welcome/Welcome";
import item from "../../assets/Images/PHOTO-2021-10-26-11-35-13 (1).jpg";
import HomePopUp from "./HomePopUp";
import "./home.css";
import { useEffect } from "react";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(true);
  }, []);
  const handlePopClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Nav />
      <Welcome
        containerClassName="home-menu-container"
        imageUrl={item}
        className="home_welcome"
        alt="home-alt"
      />
      <HomePopUp
        onclose={handlePopClose}
        isOpen={isOpen}
        clickOutside={true}
        setIsOpen={setIsOpen}
      />
      <div className="home-overlay-text">
        <h1>"Discover the Riches of Asian Cuisine"</h1>
      </div>
      <div className="homelogo">
        <img src="/Photos/Asia Villa-1.png" alt="homelogo" />
      </div>
      <div className="home-description">
        <h2>Delicious Food from Thailand, Burma, Japan, Malaysia & Vietnam</h2>
      </div>
      <HomeCards />
      <div className="our-story" id="our-story">
        <h1>Our Story</h1>
        <div className="storryteller">
          <div className="story-context">
            <q>
              <span className="story-red">BACK IN 1991</span> OUR FOUNDER & HEAD
              CHEF, SAYA KYI RIN, CREATED OUR REVOLUNTINORY MENU OFFERNG DICHES
              FROM THE REGION OF THAILAND, BURMA, JAPAN, MALAYSIA & VIETNAM.
              THESE LEMONGRASS GROWING COUNTRIES SHARE MANY COMMON FRESH HERBS &
              SPICES ALLOWING THESE CUISINES TO HAPPILY MINGLE & FUSE WITH EACH
              OTHER ON THE SAME DINING TABLE
            </q>
          </div>
          <div className="story-image">
            <img
              src={require("../../assets/Images/ourstory.jpg")}
              alt="our story display"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
