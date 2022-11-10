/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        ENGENDRANDO
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portifolio">Portifolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/prbo.btu" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        <a href="https://www.instagram.com/_opaulo_oliveira" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://twitter.com/paulo_btu" target="_blank" rel="noreferrer"><FaTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Engendrando.dev - All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
