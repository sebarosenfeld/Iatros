import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block py-4 md:py-0 text-lg md:text-base ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-gray-600 hover:text-blue-600 transition"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* 1. Logo (Siempre a la izquierda) */}
        <div className="flex-shrink-0 z-50">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">Iatros</span>
          </Link>
        </div>

        {/* 2. Menú de Links (Centrado en Desktop) */}
        <div className={`
          fixed md:static top-0 left-0 w-full h-screen md:h-auto bg-white 
          flex flex-col md:flex-row items-center justify-center md:flex-1 md:justify-center gap-8
          transition-transform duration-300 ease-in-out z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}>
          <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>Inicio</NavLink>
          <NavLink to="/descartables" className={linkClass} onClick={() => setIsOpen(false)}>Descartables</NavLink>
          <NavLink to="/panales" className={linkClass} onClick={() => setIsOpen(false)}>Pañales</NavLink>
          <NavLink to="/curaciones" className={linkClass} onClick={() => setIsOpen(false)}>Curaciones</NavLink>
          <NavLink to="/oxigenoterapia" className={linkClass} onClick={() => setIsOpen(false)}>Oxigenoterapia</NavLink>
          <NavLink to="/contacto" className={linkClass} onClick={() => setIsOpen(false)}>Contacto</NavLink>
          
          {/* Botón WhatsApp solo visible en menú móvil */}
          <a
            href="https://wa.me/541144280904"
            className="md:hidden mt-4 bg-green-500 text-white px-8 py-3 rounded-full font-medium"
          >
            Consultar WhatsApp
          </a>
        </div>

        {/* 3. Botón Derecha / Hamburguesa */}
        <div className="flex items-center gap-4 z-50">
          {/* Botón Consultar (Solo Desktop) */}
          <a
            href="https://wa.me/541144280904"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-medium transition shadow-sm"
          >
            Consultar
          </a>

          {/* Botón Hamburguesa (Solo Mobile) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 focus:outline-none"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </nav>
    </header>
  );
}

export default NavBar;