import React, { createContext, useContext, useReducer } from 'react';

// Crear contexto
const AuthContext = createContext();

// Acción para iniciar sesión
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// Reducer para manejar el estado de autenticación
const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { isAuthenticated: true, user: action.payload };
    case LOGOUT:
      return { isAuthenticated: false, user: null };
    default:
      return state;
  }
};

// Componente proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    user: null
  });

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para acceder al contexto de autenticación
export const useAuth = () => useContext(AuthContext);
