import { useState } from 'react'
import './App.css'
import Navbar from './NavBar/NavBar'
import Footer from './Footer/Footer';
import SobreNosotros from './SobreNosotros/SobreNosotros';
import Contacto from './Contacto/Contacto';
import Servicios from './Servicios/Servicios';
import Bienvenida from './Bienvenida/Bienvenida';
import WspButton from './Wsp-button/Wsp-button';
import CuandoLlamarAReventor from './Cuando-llamar/CuandoLlamarAReventor';
import HojaMuestraProyectos from './MuestraProyectos/HojaMuestraProyectos';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  return (
    <>
      <Navbar />
      <p>hola pichi</p>  
          
      <Bienvenida />
      <CuandoLlamarAReventor />
      <SobreNosotros />
      <Servicios />
      <div>
      <HojaMuestraProyectos />
      </div>
      <Contacto />
      <WspButton />
      <Footer />

    </>
  );
}

export default App
