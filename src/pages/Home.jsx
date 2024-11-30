import React from "react";
import { motion } from "framer-motion";
import "./Home.css"; // Certifique-se de criar este arquivo para os estilos.

const skills = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚙️" },
  { name: "React", icon: "⚛️" },
  { name: "Git", icon: "🔧" },
];

const Home = () => {
  return (
    <div className="home-container">
      {/* Seção de Apresentação */}
      <motion.div
        className="intro"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://steamuserimages-a.akamaihd.net/ugc/1826783377633780988/76B8FD7C2E2BC915F766C848726C7ACF9C24EDFD/"
          alt="Avatar"
          className="avatar"
        />
        <h1>Olá, eu sou o Caio!</h1>
        <p>
          Sou desenvolvedor apaixonado por criar experiências digitais incríveis.
          Com foco em tecnologias modernas, adoro resolver problemas e trazer ideias à vida.
        </p>
      </motion.div>

      {/* Seção de Habilidades */}
      <motion.div
        className="skills"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2>Minhas Habilidades</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="skill-icon">{skill.icon}</span>
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Seção de Chamada para Ação */}
      <motion.div
        className="cta"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2>Quer saber mais?</h2>
        <p>
          Explore meu portfólio e entre em contato! Estou sempre em busca de novos desafios.
        </p>
        <a href="/portfolio" className="cta-button">
          Veja Meu Portfólio
        </a>
      </motion.div>
    </div>
  );
};

export default Home;
