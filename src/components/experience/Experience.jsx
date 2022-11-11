import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  const dataFrontEnd = [
    {
      id: 1,
      avatar: BsPatchCheckFill,
      label: "HTML",
      level: "Avançado",
    },
    {
      id: 2,
      avatar: BsPatchCheckFill,
      label: "CSS",
      level: "Intermediário",
    },
    {
      id: 3,
      avatar: BsPatchCheckFill,
      label: "JavaScript",
      level: "Intermediário",
    },
    {
      id: 4,
      avatar: BsPatchCheckFill,
      label: "Boostrap",
      level: "Intermediário",
    },
    {
      id: 5,
      avatar: BsPatchCheckFill,
      label: "Tailwind",
      level: "Básico",
    },
    {
      id: 6,
      avatar: BsPatchCheckFill,
      label: "React",
      level: "Básico",
    },
    {
      id: 7,
      avatar: BsPatchCheckFill,
      label: "Vue",
      level: "Básico",
    },
  ];

  const dataBackEnd = [
    { id: 1, avatar: BsPatchCheckFill, label: "Node JS", level: "Básico" },
    { id: 2, avatar: BsPatchCheckFill, label: "MongoDB", level: "Básico" },
    { id: 3, avatar: BsPatchCheckFill, label: "PHP", level: "Avançado" },
    { id: 4, avatar: BsPatchCheckFill, label: "Mysql", level: "Intermediário" },
    { id: 5, avatar: BsPatchCheckFill, label: "Neo4J", level: "Básico" },
  ];

  return (
    <section id="experience">
      <h5>Hard Skills</h5>
      <h2>Minha Experiência</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desenvolvimento Frontend</h3>
          <div className="experience__content">
            {dataFrontEnd.map(({ id, avatar, label, level }) => {
              const Icon = avatar;
              return (
                <article key={id} className="experience__details">
                  <Icon className="experience__details-icons" />
                  <div>
                    <h4>{label}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Desenvolvimento Backend</h3>
          <div className="experience__content">
            {dataBackEnd.map(({ id, avatar, label, level }) => {
              const Icon = avatar;
              return (
                <article key={id} className="experience__details">
                  <Icon className="experience__details-icons" />
                  <div>
                    <h4>{label}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
