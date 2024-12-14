import React, { useState } from 'react';
import './Contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const whatsappNumber = "5493541703012"; // Reemplaza con tu número de WhatsApp
  const whatsappMessage = "Hola, estoy interesado en contactar con ustedes."; 

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="contacto">
      <div className="contacto-container">
        <h1>Contacto</h1>
        <p>Si tienes alguna pregunta, no dudes en escribirnos.</p>
        
        {/* Formulario de contacto */}
        <form onSubmit={handleSubmit} className="formulario-contacto">
          <div className="campo">
            <label htmlFor="nombre">Nombre</label>
            <input 
              type="text" 
              id="nombre" 
              name="nombre" 
              placeholder="Tu nombre" 
              value={formData.nombre} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="campo">
            <label htmlFor="email">Correo electrónico</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Tu correo" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="campo">
            <label htmlFor="asunto">Asunto</label>
            <input 
              type="text" 
              id="asunto" 
              name="asunto" 
              placeholder="Asunto" 
              value={formData.asunto} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="campo">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea 
              id="mensaje" 
              name="mensaje" 
              rows="4" 
              placeholder="Escribe tu mensaje" 
              value={formData.mensaje} 
              onChange={handleChange} 
              required 
            />
          </div>
          <button type="submit" className="btn-submit">Enviar</button>
        </form>

        {/* Sección de WhatsApp */}
        <div className="whatsapp-section">
          <h2>Contacto Rápido por WhatsApp</h2>
          <p>También puedes enviarnos un mensaje directamente por WhatsApp:</p>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-whatsapp"
          >
            Enviar mensaje a WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
