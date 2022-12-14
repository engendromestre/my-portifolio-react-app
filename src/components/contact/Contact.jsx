import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const data = [
  {
    id: "Email",
    label: "prbo0417@gmail.com",
    link: "mailto:prbo0417@gmail.com",
    avatar: MdOutlineEmail,
  },
  {
    id: "Messeger",
    label: "Paulo Oliveira",
    link: "https://m.me/prbo.btu",
    avatar: RiMessengerLine,
  },
  {
    id: "Whatsapp",
    label: "(14) 99795-3112",
    link: "https://wa.me/5514997953112?text=Entre+em+contato+comigo",
    avatar: MdOutlineEmail,
  },
];

const Contact = () => {
  const form = useRef();
  const recaptchaRef = React.createRef();

  const sendEmail = (e) => {
    e.preventDefault();
    recaptchaRef.current.execute();
    emailjs
      .sendForm(
        "service_g3v3qen",
        "template_wtrx5hc",
        form.current,
        "M11f6tZE2SQoPC0rc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.error(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Entre em contato</h5>
      <h2>Contate-me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {data.map(({ id, label, link, avatar }) => {
            const Icon = avatar;
            return (
              <article className="contact__option">
                <Icon className="contact__option-icon" />
                <h4>{id}</h4>
                <h5> {label} </h5>
                <a href={link} target="_blank" rel="noreferrer">
                  Enviar Mensagem
                </a>
              </article>
            );
          })}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Nome Completo" required />
          <input type="email" name="email" placeholder="E-mail" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar Mensagem
          </button>
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey="6LeZJh0jAAAAAGt4yKCygikfyDO3Az60wJn15HoQ"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
