import React from 'react';
import './Footer.css';  // Importando el archivo de estilos CSS

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; 2024 Mi Empresa. Todos los derechos reservados.</p>
                <ul className="social-links">
                    <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;