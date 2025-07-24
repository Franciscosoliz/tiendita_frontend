import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { register } from '../services/auth';
import { useNavigate } from 'react-router-dom';
import './login.css';

const RegisterForm: React.FC = () => {
  const { login: doLogin } = useContext(AuthContext);
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      const data = await register(usuario, password);

      // ✅ Pasar el objeto user completo
      doLogin(data.access_token, data.user);

      setSuccess('Usuario creado correctamente. ¡Bienvenido!');
      setTimeout(() => navigate('/'), 1500);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error en el registro');
    }
  };

  return (
    <div className="nike-login-container">
      <form className="nike-login-form" onSubmit={handleSubmit}>
        <h2 className="nike-login-title">Crear cuenta</h2>

        <input
          type="text"
          className="nike-login-input"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          placeholder="Usuario"
          required
        />

        <input
          type="password"
          className="nike-login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
        />

        <input
          type="password"
          className="nike-login-input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirmar contraseña"
          required
        />

        <button className="nike-login-button" type="submit">
          Registrarse
        </button>

        {error && <p className="nike-login-error">{error}</p>}
        {success && <p className="nike-login-success">{success}</p>}
      </form>
    </div>
  );
};

export default RegisterForm;
