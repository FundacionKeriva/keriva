import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(sessionStorage.getItem('isLogged') === 'true' || false);

    useEffect(() => {
        sessionStorage.setItem('isLogged', isLogged);
    }, [isLogged]);

    return (
        <AppContext.Provider value={{ isLogged, setIsLogged }}>
            {children}
        </AppContext.Provider>
    );
};
