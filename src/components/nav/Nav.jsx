/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import useAnalyticsEventTracker from "../../api/useAnalyticsEventTracker";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const gaEventTracker = useAnalyticsEventTracker("#");

  const getActiveNav = (_category,_action,_label) => {
    gaEventTracker(_category);
    setActiveNav(_category);
  };

  useEffect(() => {
    getActiveNav();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav>
      <a
        href="#"
        onClick={() => getActiveNav("#","Home","Home Section")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => getActiveNav("#about","About","About Section")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => getActiveNav("#experience","Experience","Experience Section")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBookBookmark />
      </a>
      <a
        href="#services"
        onClick={() => getActiveNav("#services","Services","Services Section")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => getActiveNav("#contact","Contact","Contact Section")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
