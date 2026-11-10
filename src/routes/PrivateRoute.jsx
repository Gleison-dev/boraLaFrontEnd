import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { isTokenExpired } from "../utils/tokenUtil";
import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoute() {
  const { token, logout } = useContext(AuthContext);
  const expired = !token || isTokenExpired(token);

  useEffect(() => {
    if (expired) {
      logout();
    }
  }, [expired]);

  if (expired) {
    <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
