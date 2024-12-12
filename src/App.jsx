import { useState } from 'react'
import './App.css'
import Navbar from './NavBar/NavBar'
import Footer from './Footer/footer';
import SobreNosotros from './SobreNosotros/SobreNosotros';
import Contacto from './Contacto/Contacto';
import Servicios from './Servicios/servicios';
import Bienvenida from './Bienvenida/bienvenida';

function App() {
  return (
    <>
      <Navbar />
      <p>hola pichi</p>  
          
      <Bienvenida />
      <SobreNosotros />
      <Servicios />
      <Contacto />
      <Footer />
    </>
  );
}

export default App
