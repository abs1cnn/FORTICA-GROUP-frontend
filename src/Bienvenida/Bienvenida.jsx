import React from 'react';
import './Bienvenida.css';

const Bienvenida = () => {
  return (
    <section className="bienvenida">
      <div className="bienvenida-container">
        <h1>Bienvenido a Nuestra Empresa</h1>
        <p>
          Nos complace tenerte con nosotros. En nuestra empresa, nos dedicamos a ofrecer
          soluciones innovadoras que transforman el futuro. Estamos comprometidos con tu éxito.
        </p>
        <button className="btn-bienvenida">Descubre Más</button>
      </div>
    </section>
  );
};

export default Bienvenida;
