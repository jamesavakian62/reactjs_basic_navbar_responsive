import React, { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";
import { Box } from "@material-ui/core";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <Box className="logo">
          <h2>
            <span>J</span>ames L.
            <span>A</span>vakian
          </h2>
        </Box>

        {/* 2nd menu part  */}
        <Box
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/service">services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </Box>

        {/* 3rd social media links */}
        <Box className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="www.facebook.com/gyanishanurag" target="_gyanish">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/gyanishd/" target="_gyanish">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a href="/" target="_gyanish">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <Box className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </Box>
        </Box>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;
