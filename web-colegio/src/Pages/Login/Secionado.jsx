import React, { createContext, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const isUserAuthenticated = localStorage.getItem('estaAutentica') === true;

  const login = () => {
    localStorage.setItem('estaAutentica', true);
  };

  const logout = () => {
    localStorage.setItem('estaAutentica', false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: isUserAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

