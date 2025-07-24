import { createContext, useState, useEffect } from "react";

export interface User {
  id: number;
  usuario: string;
  rol: 'user' | 'admin' | string;
}

interface AuthContextType {
  token: string | null;
  usuario: User | null; // Guarda el objeto completo con rol
  login: (token: string, user: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  token: null,
  usuario: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'));
  const [usuario, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (token) localStorage.setItem('token', token);
    else localStorage.removeItem('token');

    if (usuario) localStorage.setItem('user', JSON.stringify(usuario));
    else localStorage.removeItem('user');
  }, [token, usuario]);

  const login = (token: string, user: User) => {
    setToken(token);
    setUser(user);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
