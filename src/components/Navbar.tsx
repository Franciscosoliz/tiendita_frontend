import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { Tipo } from '../types';
import './NavbarNike.css';
import { api } from '../services/api';
import { AuthContext } from '../context/AuthContext';  // importa el contexto

const NavbarNike = () => {
  const [tipos, setTipos] = useState<Tipo[]>([]);
  const { usuario, logout } = useContext(AuthContext);  // extrae usuario y logout
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/tipos')
      .then(res => setTipos(res.data))
      .catch(err => console.error('Error al cargar tipos:', err));
  }, []);

  const capitalize = (str: string) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="nike-navbar">
      <div className="nike-navbar-top">
        <div className="logo-icons">
          <img src="/imagenes/logo_moritex.png" alt="Logo Moritex" />
        </div>
        <div className="top-links">
          <Link to="#">Buscar tienda</Link>
          <span>|</span>
          <Link to="#">Ayuda</Link>
          <span>|</span>
          {usuario ? (
            <>
              <span>Hola, {usuario.usuario}</span>
              <span> | </span>
              <Link to="/" onClick={handleLogout} className="logout-button">
                Salir
              </Link>
            </>
          ) : (
            <>
              <Link to="/register">Únete</Link>
              <span>|</span>
              <Link to="/login">Iniciar sesión</Link>
            </>
          )}
        </div>
      </div>

      <div className="nike-navbar-main">
        <Link to="/">
          <img src="/imagenes/logomain.png" alt="Nike Logo" className="nike-logo" />
        </Link>
        <nav className="nav-links">
          <Link to="/productos">New</Link>
          {tipos.map((tipo) => (
            <Link key={tipo._id} to={`/productos/${tipo.nombre.toLowerCase()}`}>
              {capitalize(tipo.nombre)}
            </Link>
          ))}
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
