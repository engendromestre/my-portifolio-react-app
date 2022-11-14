import React from "react";
import "./portifolio.css";
import IMG1 from "../../assets/portifolio_1.jpg";
import IMG2 from "../../assets/portifolio_2.jpg";
import IMG3 from "../../assets/portifolio_3.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Calendário Pleiadiano",
    github: "https://github.com/engendromestre/calendariopleiadiano-app",
    demo: "https://dribbble.com/shots/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Repositório Acadêmico Galileu Botucatu",
    github: "https://gitbub.com",
    demo: "https://dribbble.com/shots/",
  }
];

const Portifolio = () => {
  return (
    <section id="portifolio">
      <h5>My Recent Work</h5>
      <h2>Portifolio</h2>

      <div className="container portifolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portifolio__item">
              <div className="portifolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portifolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live a Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portifolio;
