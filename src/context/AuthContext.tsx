import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface Credentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  signIn(credentials: Credentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });
    console.log('signIn -> response', response);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Eduardo', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
