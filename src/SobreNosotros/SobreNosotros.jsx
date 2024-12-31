import React from 'react';
import './SobreNosotros.css';  // Importamos el archivo de estilos

const SobreNosotros = () => {
    return (
        <section id="sobrenosotros" className="sobre-nosotros">
            <div className="sobre-nosotros-container">
                <h1>Sobre Nosotros</h1>
                <p className="descripcion">
                    En <strong>Mi Empresa</strong>, nos dedicamos a ofrecer soluciones innovadoras para mejorar los procesos de nuestros clientes. Fundada en 2010, nuestra misión es proporcionar productos y servicios de alta calidad que impulsen el éxito empresarial a través de la tecnología.
                </p>
                <div className="mision">
                    <h2>Misión</h2>
                    <p>
                        Nuestra misión es ayudar a las empresas a transformarse digitalmente mediante soluciones efectivas y personalizadas que optimicen sus operaciones, aumenten la productividad y fomenten el crecimiento sostenible.
                    </p>
                </div>
                <div className="vision">
                    <h2>Visión</h2>
                    <p>
                        Ser una empresa líder en innovación tecnológica, destacándonos por la calidad y efectividad de nuestras soluciones. Buscamos expandir nuestra presencia a nivel global, ofreciendo un impacto positivo en cada cliente que servimos.
                    </p>
                </div>
                <div className="valores">
                    <h2>Valores</h2>
                    <ul>
                        <li>Integridad</li>
                        <li>Compromiso con la calidad</li>
                        <li>Innovación constante</li>
                        <li>Responsabilidad social</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default SobreNosotros;
