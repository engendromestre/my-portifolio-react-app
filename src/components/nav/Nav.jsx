/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import useAnalyticsEventTracker from "../../api/useAnalyticsEventTracker";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const gaEventTracker = useAnalyticsEventTracker("#contact");

  const getActiveNav = (section) => {
    gaEventTracker(section);
    setActiveNav(section);
  };

  useEffect(() => {
    getActiveNav();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav>
      <a
        href="#"
        onClick={() => getActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => getActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => getActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBookBookmark />
      </a>
      <a
        href="#services"
        onClick={() => getActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => getActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
