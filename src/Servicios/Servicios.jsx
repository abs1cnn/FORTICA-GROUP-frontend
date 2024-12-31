import React from 'react';
import './Servicios.css';
import 'font-awesome/css/font-awesome.min.css';  // Asegúrate de importar los iconos de Font Awesome

const Servicios = () => {
  return (
    <section id="servicios" className="servicios">
      <div className="servicios-container">
        <div className="servicio">
          <div className="icono">
            <i className="fas fa-cogs"></i>
          </div>
          <h3>Desarrollo de Software a Medida</h3>
          <p>
            Creación de aplicaciones personalizadas adaptadas a las necesidades específicas de cada cliente, utilizando tecnologías modernas y metodologías ágiles.
          </p>
        </div>
        <div className="servicio">
          <div className="icono">
            <i className="fas fa-rocket"></i>
          </div>
          <h3>Consultoría en Transformación Digital</h3>
          <p>
            Asesoramiento para empresas que buscan digitalizar y optimizar sus procesos, adaptandose a las demandas del mercado digital actual.
          </p>
        </div>
        <div className="servicio">
          <div className="icono">
            <i className="fa fa-check-circle"></i>
          </div>
          <h3>Integración de Sistemas y APIs</h3>
          <p>
            Implementación de herramientas que faciliten la integración entre distintos sistemas y APIs, permitiendo un flujo de información continuo y mejorando la productividad organizacional.
          </p>
        </div>
        <div className="servicio">
          <div className="icono">
            <i className="fas fa-users"></i>
          </div>
          <h3>Soporte Técnico y Evolutivo</h3>
          <p>
            Servicios dedicados a mantener y actualizar soluciones tecnológicas, asegurando su óptimo rendimiento y adaptabilidad a las nuevas demandas del entorno empresarial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
