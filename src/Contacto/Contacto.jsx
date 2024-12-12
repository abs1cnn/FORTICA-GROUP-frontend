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
    // Aquí puedes hacer el envío del formulario, por ejemplo, usando fetch o Axios
    console.log(formData);
  };

  return (
    <section className="contacto">
      <div className="contacto-container">
        <h1>Contacto</h1>
        <p>Si tienes alguna pregunta, no dudes en escribirnos.</p>
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
      </div>
    </section>
  );
};

export default Contacto;
