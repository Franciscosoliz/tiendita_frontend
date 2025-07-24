import React, { useState, useContext } from 'react';
import { login } from '../services/auth'; // Esta función devuelve access_token y usuario (string)
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './login.css';

const LoginForm: React.FC = () => {
    const { login: doLogin } = useContext(AuthContext);
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = await login(usuario, password);
            console.log('Login data:', data);
            // data = { access_token: '...', user: { id, usuario, rol } }
            // Usa directamente el usuario completo del backend
            doLogin(data.access_token, data.user);

            setError(null);
            navigate('/');
        } catch (err: any) {
            setError(err.response?.data?.message || 'Error en el login');
        }
    };


    return (
        <div className="nike-login-container">
            <form className="nike-login-form" onSubmit={handleSubmit}>
                <h2 className="nike-login-title">Inicia sesión</h2>

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

                <button className="nike-login-button" type="submit">
                    Iniciar Sesión
                </button>

                {error && <p className="nike-login-error">{error}</p>}
            </form>
        </div>
    );
};

export default LoginForm;
