import React from 'react';
import './Wsp-button.css'; // Asegúrate de crear un archivo CSS para el estilo

const WspButton = () => {
  const whatsappNumber = "5493541703012"; // Reemplaza con tu número de WhatsApp
  const whatsappMessage = "Hola, estoy interesado en contactar con ustedes."; 

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WspButton;
