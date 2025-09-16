import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <header className="w-full bg-[#acad62] sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-center h-14 px-4 sm:px-6 text-white/90 font-bold">
  
        <div className="hidden lg:flex gap-x-8">
          <a href="#" >Home</a>
          <a href="#calculadora" >Calculadora</a>
          <a href="#recomendaciones" >Recomendaciones</a>
          <a href="#contacto" >Contacto</a>
        </div>

        {/* Botón menú hamburguesa (solo en mobile) */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menú móvil desplegable */}
      {open && (
        <div className="lg:hidden flex flex-col items-center bg-[#acad62] text-white/90 font-bold py-4 gap-4">
          <a href="#" onClick={toggleMenu}>Home</a>
          <a href="#calculadora" onClick={toggleMenu}>Calculadora</a>
          <a href="#recomendaciones" onClick={toggleMenu}>Recomendaciones</a>
          <a href="#contacto" onClick={toggleMenu}>Contacto</a>
        </div>
      )}
    </header>
  );
}
