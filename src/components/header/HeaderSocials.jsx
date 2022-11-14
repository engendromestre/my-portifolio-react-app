import React from "react";
import { BsLinkedin } from "react-icons/bs"
import { ImGithub } from "react-icons/im"
import { FiDribbble }  from "react-icons/fi"
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/paulo-oliveira-2b53b338/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/engendromestre" target="_blank" rel="noreferrer">
        <ImGithub />
      </a>
      <a href="https://dribbble.com/Engendro" target="_blank" rel="noreferrer">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
