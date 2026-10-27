import { createContext } from "react";
import { api } from "../services/api";

export const AuthContext = createContext();

export function Authprovider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  async function login(email, password) {
    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      const { token } = response.data.login.token;
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

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
