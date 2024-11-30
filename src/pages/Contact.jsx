import React, { useState } from "react";
import "./Contact.css"; // Certifique-se de criar e estilizar este arquivo.

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Validação simples dos campos
  const validate = () => {
    let tempErrors = {};
    if (!form.name.trim()) tempErrors.name = "O nome é obrigatório.";
    if (!form.email.trim()) tempErrors.email = "O e-mail é obrigatório.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) tempErrors.email = "E-mail inválido.";
    if (!form.message.trim()) tempErrors.message = "A mensagem é obrigatória.";
    return tempErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Limpa erros ao editar o campo
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setSuccessMessage("Sua mensagem foi enviada com sucesso!");
      setForm({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 2000); // Simula um tempo de envio
  };

  return (
    <div className="contact-container">
      <h1>Entre em Contato</h1>
      <p>Fique à vontade para enviar uma mensagem. Retornarei o mais breve possível!</p>
      <form onSubmit={handleSubmit} className="contact-form">
        {/* Nome */}
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={errors.name ? "input-error" : ""}
            placeholder="Digite seu nome"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        {/* E-mail */}
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? "input-error" : ""}
            placeholder="Digite seu e-mail"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        {/* Mensagem */}
        <div className="form-group">
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            className={errors.message ? "input-error" : ""}
            placeholder="Escreva sua mensagem"
          />
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>

        {/* Botão */}
        <button type="submit" disabled={isSubmitting} className="submit-button">
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {/* Mensagem de sucesso */}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default Contact;
