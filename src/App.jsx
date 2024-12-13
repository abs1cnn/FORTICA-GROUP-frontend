import { useState } from 'react'
import './App.css'
import Navbar from './NavBar/NavBar'
import Footer from './Footer/Footer';
import SobreNosotros from './SobreNosotros/SobreNosotros';
import Contacto from './Contacto/Contacto';
import Servicios from './Servicios/servicios';
import Bienvenida from './Bienvenida/bienvenida';
import WspButton from './wsp-button/wsp-button';
import CuandoLlamarAReventor from './Cuando-llamar/CuandoLlamarAReventor';

function App() {
  return (
    <>
      <Navbar />
      <p>hola pichi</p>  
          
      <Bienvenida />
      <CuandoLlamarAReventor />
      <SobreNosotros />
      <Servicios />
      <Contacto />
      <WspButton />
      <Footer />
    </>
  );
}

export default App
