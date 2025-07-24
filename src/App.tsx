import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navegacion from './components/Navbar';
import Productos from './pages/Productos';
import { CartProvider } from './components/CartContext'; // ajusta la ruta
import Home from './pages/Home';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navegacion />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:tipo" element={<Productos />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          {/* <Route path="/carrito" element={<CartProvider />} /> */}
          {/* Otras rutas */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
