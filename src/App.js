import { Routes, Route } from "react-router-dom";
import './App.scss';
import BarraDeNavegacion from "Componentes/BarraDeNavegacion/BarraDeNavegacion";
import PieDePagina from "Componentes/PieDePagina/PieDePagina";
import AcercaDeMi from "Paginas/AcercaDeMi/AcercaDeMi";
import Home from "Paginas/Home/Home";

function App() {
  return (
    <div className="contenedor-App">
      <header className="header-App">
        <BarraDeNavegacion />
      </header>
      <body>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AcercaDeMi />} />
       </Routes> 
      </body>
      <footer className="footer-App">
        <PieDePagina />
      </footer>
    </div>
  );
}

export default App;
