// src/components/Modal/Modal.jsx
import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, closeModal, proyecto }) => {
  if (!isOpen) return null; // Si no está abierto, no renderiza nada

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={closeModal}>
          X
        </button>
        <h2>{proyecto.nombre}</h2>
        <p><strong>Descripción:</strong> {proyecto.descripcion}</p>
        <p><strong>Estado:</strong> {proyecto.estado}</p>
        <p><strong>Fecha de Inicio:</strong> {proyecto.fechaInicio}</p>
        
        {/* Características adicionales del proyecto */}
        <div className="project-details">
          <h3>Detalles del Proyecto</h3>
          <p><strong>Presupuesto:</strong> ${proyecto.presupuesto}</p>
          <p><strong>Equipo Involucrado:</strong> {proyecto.equipo}</p>
          <p><strong>Tecnologías Utilizadas:</strong> {proyecto.tecnologias}</p>
          <p><strong>Fecha de Entrega:</strong> {proyecto.fechaEntrega}</p>
          <p><strong>Cliente:</strong> {proyecto.cliente}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
