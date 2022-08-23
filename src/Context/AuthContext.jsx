import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  function handleLogin() {}
  function handleLogout() {}
  return (
    <AuthContext.Provider value={{ isAuth, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
