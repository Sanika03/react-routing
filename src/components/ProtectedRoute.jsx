import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return (
    isLoggedIn ? children : <Navigate to="/login" />
  );
}