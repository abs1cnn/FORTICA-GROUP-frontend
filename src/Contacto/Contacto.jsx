import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contacto.css';

const Contacto = () => {
  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Enviar el correo con los datos del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Datos que se enviarán al template de EmailJS
    const { nombre, email, asunto, mensaje } = formData;
    const templateParams = {
      from_name: nombre,
      from_email: email,
      subject: asunto,
      message: mensaje
    };

    // Enviar el correo a través de EmailJS
    emailjs
      .send(
        'service_nyl5nbr',  // Reemplaza con tu Service ID
        'template_yb6c9u2',  // Reemplaza con tu Template ID
        templateParams,      // Los datos del formulario
        'XXyYyLbAlFXMxaYoH'  // Reemplaza con tu User ID
      )
      .then(
        (response) => {
          console.log('Correo enviado con éxito:', response);
          alert('Correo enviado con éxito');
          // Limpiar el formulario después de enviar el correo
          setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
        },
        (error) => {
          console.error('Error al enviar el correo:', error);
          alert('Hubo un error al enviar el correo');
        }
      );
  };

  // Datos de WhatsApp
  const whatsappNumber = "5493541703012"; // Número de WhatsApp
  const whatsappMessage = "Hola, estoy interesado en contactar con ustedes.";

  // Link para abrir WhatsApp con un mensaje predefinido
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contacto" className="contact-section">
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
