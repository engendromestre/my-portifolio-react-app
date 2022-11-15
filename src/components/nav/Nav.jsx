/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import ReactGA from "react-ga";
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
          ReactGA.event({category:'PAGE_SECTIONS',action: 'CLICK_LINK', label: 'HOME' });
          setActiveNav("#");
        }}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => {
          ReactGA.event({category:'PAGE_SECTIONS',action: 'CLICK_LINK', label: 'ABOUT' });
          setActiveNav("#about");
        }}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => {
          ReactGA.event({category:'PAGE_SECTIONS',action: 'CLICK_LINK', label: 'EXPERIENCE' });
          setActiveNav("#experience");
        }}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBookBookmark />
      </a>
      <a
        href="#services"
        onClick={() => {
          ReactGA.event({category:'PAGE_SECTIONS',action: 'CLICK_LINK', label: 'SERVICES' });
          setActiveNav("#services");
        }}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => {
          ReactGA.event({category:'PAGE_SECTIONS',action: 'CLICK_LINK', label: 'CONTACT' });
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
