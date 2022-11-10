import React from "react";
import "./services.css";
import { BsCheck2 } from "react-icons/bs";

const data = [
  {
    id: 1,
    avatar: BsCheck2,
    label: "Blog",
    type: "web development"
  },
  {
    id: 2,
    avatar: BsCheck2,
    label: "Site Vitrine",
    type: "web development"
  },
  {
    id: 3,
    avatar: BsCheck2,
    label: "Site Vitrine + Blog",
    type: "web development"
  },
  {
    id: 4,
    avatar: BsCheck2,
    label: "Sistema Gerencial",
    type: "web development"
  },
  {
    id: 5,
    avatar: BsCheck2,
    label: "Plataforma WEB",
    type: "web development"
  },
  {
    id: 6,
    avatar: BsCheck2,
    label: "Tarefas (Funcionalidades)",
    type: "web development"
  },
  {
    id: 7,
    avatar: BsCheck2,
    label: "Formatação Avulsa",
    type: "computer maintenance"
  },
  {
    id: 8,
    avatar: BsCheck2,
    label: "Instalação de Programas",
    type: "computer maintenance"
  },
  {
    id: 9,
    avatar: BsCheck2,
    label: "Otimização de Computadores",
    type: "computer maintenance"
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
            <h3>Montagem e Manutenção</h3>
          </div>

          <ul className="service__list">
            { data.map(({ id, avatar, label, type }) => {
                const Icon = avatar;
                return ( type === "computer maintenance" ?
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
