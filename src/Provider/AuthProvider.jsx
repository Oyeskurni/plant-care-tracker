import React, { createContext } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const authData = {};

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
