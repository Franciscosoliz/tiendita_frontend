import './NavbarNike.css'; // Asegúrate de importar los estilos

const NavbarNike = () => {
  return (
    <header className="nike-navbar">
      <div className="nike-navbar-top">
        <div className="logo-icons">
          <img src="/imagenes\logo_moritex.png" alt="Jordan" />
        </div>
        <div className="top-links">
          <a href="#">Buscar tienda</a>
          <span>|</span>
          <a href="#">Ayuda</a>
          <span>|</span>
          <a href="#">Únete</a>
          <span>|</span>
          <a href="#">Iniciar sesión</a>
        </div>
      </div>

      <div className="nike-navbar-main">
        <img src="/imagenes/logo .png" alt="Nike Logo" className="nike-logo" />
        <nav className="nav-links">
          <a href="#">New</a>
          <a href="#">Zapatos</a>
          <a href="#">Balones</a>
          <a href="#">Rodilleras - coderas</a>
          <a href="#">Cintas</a>
          <a href="#">Vendas</a>
        </nav>
        <div className="nav-icons">
          <input type="text" placeholder="Buscar" className="search-bar" />
          <span className="icon">🤍</span>
          <span className="icon">🛒</span>
        </div>
      </div>
    </header>
  );
};

export default NavbarNike;
