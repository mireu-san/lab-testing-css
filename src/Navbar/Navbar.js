import React from "react";
import { Link } from "react-router-dom";
// import Home from "../pages/Home/Home";

// import NightMode from "./NightMode";
import "./Navbar.css";

import { FaHome } from "react-icons/fa";
import { BsBookmarkStarFill, BsLinkedin } from "react-icons/bs";
import { SiFuturelearn, SiMicrodotblog } from "react-icons/si";
import { ImLab } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";

import { slide as Menu } from "react-burger-menu";
import "./Burger.css";

function Navbar() {
  return (
    <Menu>
      <div className="wrapper">
        <div className="sidebar_left">
          <Link to="/">
            <h2>Jongwan Kim</h2>
          </Link>
          <ul>
            <li>
              <Link to="/">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/experience">
                <BsBookmarkStarFill /> Experience
              </Link>
            </li>
            <li>
              <Link to="/education">
                <SiFuturelearn /> Education
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <ImLab /> Side Projects
              </Link>
            </li>
            <li>
              <a href="#">
                <SiMicrodotblog /> Blog
              </a>
            </li>
            <li>
              <a href="#">
                <BsLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillGithub /> Github
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="main_content_right">
          <div className="header">
            <NightMode />
          </div>
        </div> */}
      </div>
    </Menu>
  );
}

export default Navbar;
