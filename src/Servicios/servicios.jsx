import React from 'react';
import './Servicios.css';

const Servicios = () => {
  return (
    <section className="servicios">
      <div className="servicios-container">
        <div className="servicio">
          <div className="icono">
            {/* Aquí puedes agregar íconos o imágenes */}
            <i className="fas fa-cogs"></i>
          </div>
          <h3>Servicio 1</h3>
          <p>Descripción del servicio 1. Explicación breve sobre lo que ofrece este servicio.</p>
        </div>
        <div className="servicio">
          <div className="icono">
            <i className="fas fa-rocket"></i>
          </div>
          <h3>Servicio 2</h3>
          <p>Descripción del servicio 2. Explicación breve sobre lo que ofrece este servicio.</p>
        </div>
        <div className="servicio">
          <div className="icono">
            <i className="fas fa-heart"></i>
          </div>
          <h3>Servicio 3</h3>
          <p>Descripción del servicio 3. Explicación breve sobre lo que ofrece este servicio.</p>
        </div>
        <div className="servicio">
          <div className="icono">
            <i className="fas fa-users"></i>
          </div>
          <h3>Servicio 4</h3>
          <p>Descripción del servicio 4. Explicación breve sobre lo que ofrece este servicio.</p>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
