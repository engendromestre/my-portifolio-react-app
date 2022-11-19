/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import ReactGA from "react-ga4";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => {
          ReactGA.send({ hitType: "pageview", page: "#" });
          setActiveNav("#");
        }}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => {
          ReactGA.send({ hitType: "pageview", page: "#about" });
          setActiveNav("#about");
        }}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => {
          ReactGA.send({ hitType: "pageview", page: "#experience" });
          setActiveNav("#experience");
        }}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBookBookmark />
      </a>
      <a
        href="#services"
        onClick={() => {
          ReactGA.send({ hitType: "pageview", page: "#services" });
          setActiveNav("#services");
        }}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => {
          ReactGA.send({ hitType: "pageview", page: "#contact" });
          setActiveNav("#contact");
        }}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
