import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const dataCards = [
  {
    id: 1,
    label: "Experiência",
    subLabel: "+15 Anos de Trabalho",
    icon: FaAward,
  },
  {
    id: 2,
    label: "Clientes",
    subLabel: "Satisfeitos",
    icon: FiUsers,
  },
  {
    id: 3,
    label: "Serviços",
    subLabel: "Onsite e Remoto",
    icon: VscFolderLibrary,
  },
];

const dataAbout =
  "Profissional de TI trabalhando em: Montagem e Manutenção de Desktops e Notebooks; Formatação e Configuração de Sistemas Operacionais Windows e Linux. Confira a lista completa das Hard Skills na sessão abaixo.";

const About = () => {
  return (
    <section id="about">
      <h5>Conheça +</h5>
      <h2>Sobre mim</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {dataCards.map(({ id, label, subLabel, icon }) => {
              const Icon = icon;
              return (
                <article key={id} className="about__card">
                  <Icon className="about__icon" />
                  <h5>{label}</h5>
                  <small>{subLabel}</small>
                </article>
              );
            })}
          </div>
          <p>{dataAbout}</p>

          <a href="#contact" className="btn btn_primary">
            Vamos Conversar
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
