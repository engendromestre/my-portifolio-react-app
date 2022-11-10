import React from 'react';
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import { SlArrowDown } from "react-icons/sl";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Seja bem vindo</h5>
        <h1>Paulo Oliveira</h1>
        <h5 className="text-light">Profissional de TI</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a
          href="#contact"
          className="scroll__down"
        >
          <SlArrowDown />
        </a>
      </div>
    </header>
  );
};

export default Header;
