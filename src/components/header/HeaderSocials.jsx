import React from "react";
import { BsLinkedin } from "react-icons/bs"
import { ImGithub } from "react-icons/im"
import { FiDribbble }  from "react-icons/fi"
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="http://linkedin.com" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="http://linkedin.com" target="_blank" rel="noreferrer">
        <ImGithub />
      </a>
      <a href="http://linkedin.com" target="_blank" rel="noreferrer">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
