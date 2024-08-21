// AuthContext.js
// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isLoggedIn: false,
        user: null,
    });

    const login = (userData) => {
        setAuthState({ isLoggedIn: true, user: userData });
    };

    const logout = () => {
        setAuthState({ isLoggedIn: false, user: null });
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};