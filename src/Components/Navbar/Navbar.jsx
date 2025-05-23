import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import drop_icon from "../../assets/caret_icon.svg";
import { logout } from "../../firebase";

const Navbar = () => {
  const navbarRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navbarRef.current?.classList.add("nav-dark");
      } else {
        navbarRef.current?.classList.remove("nav-dark");
      }
    });
  }, []);
  return (
    <div ref={navbarRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="netflix-logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img className="icons" src={search_icon} alt="search-icon" />
        <p>Children</p>
        <img className="icons" src={bell_icon} alt="bill-icon" />
        <div className="user-profile">
          <img className="profile-img" src={profile_img} alt="profile-img" />
          <img src={drop_icon} alt="drop-icon" />
          <div className="drop-down">
            <p
              onClick={() => {
                logout();
              }}
            >
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
