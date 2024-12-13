import React from 'react';
import './CuandoLlamarAReventor.css';
import 'font-awesome/css/font-awesome.min.css';  // Asegúrate de importar los iconos de Font Awesome

const CuandoLlamarAReventor = () => {
  const razones = [
    {
      texto: "No me alcanza el tiempo, me cuesta delegar.",
      icono: "fa-cogs"  // Icono de tuerca
    },
    {
      texto: "Los procesos en mi empresa no son claros",
      icono: "fa-handshake-o"  // Icono de choque

    },
    {
      texto: "Quiero dar un buen servicio posventa.",
      icono: "fa-user-o "  // Icono de teléfono
    },
    {
      texto: "Me siento solo en la toma de desiciones.",
      icono: "fa-thermometer-half"  // Icono de termómetro
    },
    {
      texto: "Mi empresa esta quedada en el tiempo, necesitamos innovar",
      icono: "fa-battery-empty"  // Icono de batería
    },
    {
      texto: "Necesito aumetar mis ventas",
      icono: "fa-plug"  // Icono de enchufe
    },
    {
      texto: "Quiero lograr un equipo mas comprometido",
      icono: "fa-bug "  // Icono de checklist
    },
    {
      texto: "Tengo muchas ideas pero el dia a dia no me deja",
      icono: "fa-volume-up"  // Icono de sonido
    }
  ];

  return (
    <div className="container">
      <h2 id='titulo-cuando-llamar'>¿Cuándo llamar a Fortica?</h2>
      <p id='descrip-cuando-llamar'>Todo negocio debe tener como punto de partida una buena
planificación y una gestión efectiva. <br />
La realidad de hoy en día nos demuestra que tener un buen
producto o servicio no alcanza.</p>
      <div className="grid">
        {razones.map((razon, index) => (
          <div className="grid-item" key={index}>
            <i className={`fa ${razon.icono} icon`}></i>
            <p>{razon.texto}</p>
          </div>
        ))}
      </div>
      <div>
      <a href="/contacto">
        <button className="contact-button">Ir a Contacto</button>
      </a>
    </div>
    </div>
  );
};

export default CuandoLlamarAReventor;
