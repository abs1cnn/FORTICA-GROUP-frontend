// src/components/HojaMuestraProyectos/HojaMuestraProyectos.jsx
import React, { useState } from 'react';
import Slider from 'react-slick'; // Importar React Slick
import './HojaMuestraProyectos.css';
import Modal from '../Modal/Modal'; // Importar el Modal

const HojaMuestraProyectos = () => {
  const proyectos = [
    {
      nombre: 'Sistema de Gestión Interna',
      descripcion: 'Desarrollo de una plataforma para la gestión de empleados y recursos.',
      estado: 'En progreso',
      fechaInicio: '2024-01-15',
      presupuesto: 50000,
      equipo: 'Juan, Ana, Carlos',
      tecnologias: 'React, Node.js, MongoDB',
      fechaEntrega: '2024-06-01',
      cliente: 'Empresa XYZ',
    },
    {
      nombre: 'Rediseño del Sitio Web',
      descripcion: 'Proyecto para modernizar el sitio web corporativo.',
      estado: 'Completado',
      fechaInicio: '2023-06-01',
      presupuesto: 15000,
      equipo: 'Laura, Pedro, Sofia',
      tecnologias: 'HTML, CSS, JavaScript',
      fechaEntrega: '2023-12-01',
      cliente: 'Cliente ABC',
    },
    {
      nombre: 'Aplicación Móvil',
      descripcion: 'Creación de una app móvil para clientes.',
      estado: 'Planeado',
      fechaInicio: '2024-05-20',
      presupuesto: 30000,
      equipo: 'Carlos, Maria, Pablo',
      tecnologias: 'React Native, Firebase',
      fechaEntrega: '2024-10-30',
      cliente: 'Empresa 123',
    },
    {
      nombre: 'Sistema de Inventario',
      descripcion: 'Desarrollo de un sistema para controlar el inventario de productos.',
      estado: 'En progreso',
      fechaInicio: '2024-02-10',
      presupuesto: 25000,
      equipo: 'Ana, Sofia, Luis',
      tecnologias: 'Java, MySQL',
      fechaEntrega: '2024-08-01',
      cliente: 'Almacenes ABC',
    },
    {
      nombre: 'E-commerce',
      descripcion: 'Desarrollo de una plataforma de comercio electrónico.',
      estado: 'Completado',
      fechaInicio: '2023-08-15',
      presupuesto: 80000,
      equipo: 'Ricardo, Juan, Alicia',
      tecnologias: 'Shopify, JavaScript',
      fechaEntrega: '2023-11-01',
      cliente: 'Tienda Online',
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProyecto, setSelectedProyecto] = useState(null);

  const openModal = (proyecto) => {
    setSelectedProyecto(proyecto);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProyecto(null);
  };

  // Configuración del carrusel para 2 proyectos a la vez
  const settings = {
    dots: true, // Mostrar puntos de navegación
    infinite: true, // Carrusel infinito
    speed: 500, // Velocidad de transición
    slidesToShow: 3, // Mostrar dos proyectos por vez
    slidesToScroll: 1, // Desplazar un proyecto a la vez
    centerMode: true, // Hacer el proyecto central más destacado
    centerPadding: '0', // No dejar espacio extra
    nextArrow: <div className="custom-arrow custom-next-arrow">→</div>,
    prevArrow: <div className="custom-arrow custom-prev-arrow">←</div>,
    responsive: [
      {
        breakpoint: 1500, // Para pantallas medianas (computadoras)
        settings: {
          slidesToShow: 2, // Mostrar dos proyectos por vez
        },
      },
      {
        breakpoint: 768, // Para pantallas más pequeñas (tabletas o móviles)
        settings: {
          slidesToShow: 1, // Mostrar dos proyectos por vez
        },
      },
      {
        breakpoint: 480, // Para pantallas extra pequeñas (móviles)
        settings: {
          slidesToShow: 1, // Mostrar un proyecto por vez
        },
      },
    ],
  };

  return (
    <div className="proyectos-container">
      <h1 className="proyectos-title">Proyectos de la Empresa →</h1>
      <Slider {...settings}>
        {proyectos.map((proyecto, index) => (
          <div className="proyecto-card" key={index} onClick={() => openModal(proyecto)}>
            <h2 className="proyecto-nombre">{proyecto.nombre}</h2>
            <p className="proyecto-descripcion">{proyecto.descripcion}</p>
            <p className="proyecto-estado">
              <strong>Estado:</strong> {proyecto.estado}
            </p>
            <p className="proyecto-fecha">
              <strong>Fecha de Inicio:</strong> {proyecto.fechaInicio}
            </p>
          </div>
        ))}
      </Slider>

      {/* Modal con más información */}
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        proyecto={selectedProyecto}
      />
    </div>
  );
};

export default HojaMuestraProyectos;
