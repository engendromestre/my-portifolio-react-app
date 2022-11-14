import React from "react";
import "./services.css";
import { BsCheck2 } from "react-icons/bs";

const data = [
  {
    id: 11,
    avatar: BsCheck2,
    label: "Blog",
    type: "web development"
  },
  {
    id: 12,
    avatar: BsCheck2,
    label: "Site Vitrine",
    type: "web development"
  },
  {
    id: 13,
    avatar: BsCheck2,
    label: "Site Vitrine + Blog",
    type: "web development"
  },
  {
    id: 14,
    avatar: BsCheck2,
    label: "Sistema Gerencial",
    type: "web development"
  },
  {
    id: 15,
    avatar: BsCheck2,
    label: "Plataforma WEB",
    type: "web development"
  },
  {
    id: 16,
    avatar: BsCheck2,
    label: "Tarefas (Funcionalidades)",
    type: "web development"
  },
  {
    id: 21,
    avatar: BsCheck2,
    label: "De onde vem os seus visitantes?",
    type: "google_analytics"
  },
  {
    id: 22,
    avatar: BsCheck2,
    label: "Quais são as páginas mais visualizadas?",
    type: "google_analytics"
  },
  {
    id: 23,
    avatar: BsCheck2,
    label: "O que as pessoas fazem no site?",
    type: "google_analytics"
  },
  {
    id: 24,
    avatar: BsCheck2,
    label: "Como está a eficiência das landing pages?",
    type: "google_analytics"
  },
  {
    id: 25,
    avatar: BsCheck2,
    label: "Quais palavras-chave pagas deram mais conversões?",
    type: "google_analytics"
  },
  {
    id: 26,
    avatar: BsCheck2,
    label: "Quais segmentos de clientes são mais lucrativos?",
    type: "google_analytics"
  },
  {
    id: 10,
    avatar: BsCheck2,
    label: "Pagina de mídias Sociais",
    type: "ui-ux"
  },
  {
    id: 11,
    avatar: BsCheck2,
    label: "Landing Pages",
    type: "ui-ux"
  },
  {
    id: 12,
    avatar: BsCheck2,
    label: "Prototipagem",
    type: "ui-ux"
  },
  {
    id: 13,
    avatar: BsCheck2,
    label: "Modificação e Testes de interface",
    type: "ui-ux"
  },
];

const Services = () => {
  return (
    <section id="services">
      <h5>Venha conhecer os</h5>
      <h2>Serviços</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Design de UI/UX</h3>
          </div>

          <ul className="service__list">
            { data.map(({ id, avatar, label, type }) => {
                const Icon = avatar;
                return ( type === "ui-ux" ?
                  <li key={id}>
                    <Icon className="service__list-icon" />
                    <p>{ label }</p>
                  </li>
                  : 
                  null
                )
            }) }
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Desenvolvimento WEB</h3>
          </div>

          <ul className="service__list">
            { data.map(({ id, avatar, label, type }) => {
                const Icon = avatar;
                return ( type === "web development" ?
                  <li key={id}>
                    <Icon className="service__list-icon" />
                    <p>{ label }</p>
                  </li>
                  : 
                  null
                )
            }) }
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Google Analytics</h3>
          </div>

          <ul className="service__list">
            { data.map(({ id, avatar, label, type }) => {
                const Icon = avatar;
                return ( type === "google_analytics" ?
                  <li key={id}>
                    <Icon className="service__list-icon" />
                    <p>{ label }</p>
                  </li>
                  : 
                  null
                )
            }) }
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
