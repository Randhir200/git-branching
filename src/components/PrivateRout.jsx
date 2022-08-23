import { useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export default function PrivateRout({ children }) {
  const { state } = useContext(AuthContext);
  if (!state) {
    return <Navigate to="/login" />;
  }

  return children;
}
