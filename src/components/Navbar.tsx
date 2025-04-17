const Navbar = () => {
  return (
    <nav className="bg-dark text-light py-4 shadow-md fixed top-0 w-full z-10">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue">MiPortafolio</h1>
        <ul className="flex gap-6 text-sm">
          <li>
            <a href="#home" className="hover:text-blue">
              Inicio
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
