import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Portfolio.css"; // Certifique-se de criar este arquivo.

const projects = [
    {
      name: "Pokedex ",
      description: "Criação de uma pokedex via react",
      image: "data:image/png;base64,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",
      link: "https://github.com/CaiowRG/Pokedex",
    },
    {
      name: "Lista de tarefas",
      description: "Lista de tarefas ultilizando vitejs-react",
      image: "https://cdn-icons-png.flaticon.com/512/1612/1612656.png",
      link: "https://github.com/CaiowRG/Lista-de-tarefas",
    },
  ];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="portfolio-container">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Portfólio</h1>
        <p>Confira alguns dos projetos que já desenvolvi.</p>
      </motion.div>

      {/* Filtros */}
      <div className="filters">
        {["All"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid de Projetos */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Ver no GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
