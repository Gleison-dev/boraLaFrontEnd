import { useState, createContext, useEffect, Profiler } from "react";
import { api } from "../services/api";

export const AuthContext = createContext();

export function Authprovider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  async function login(email, password) {
    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      const { token } = response.data.login;
      localStorage.setItem("token", token);

      setToken(token);

      return { sucess: true };
    } catch (error) {
      const message = error.response?.data?.message || "Erro ao fazer login.";
      return { sucess: false, message };
    }
  }

  async function logout() {
    localStorage.removeItem("token");
    setToken(null);
  }

  async function me() {
    try {
      const response = await api.get("/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data.user)
    } catch (error) {
      setUser(null);
      const message = error.response?.data?.message || "Erro ao buscar usuário";
      return message;
    }
  }

  useEffect(() => {
    me();
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}
