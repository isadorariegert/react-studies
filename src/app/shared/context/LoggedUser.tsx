import React, { useCallback } from "react";
import { createContext } from "react";

interface ILoggedUserContextData {
    userName: string;
    logout: () => void;
}

export const LoggedUserContext = createContext({} as ILoggedUserContextData);

interface ILoggedUserProviderProps {
    children: React.ReactNode;
}

export const LoggedUserProvider = ({children}:ILoggedUserProviderProps) => {

    const handleLogout = useCallback(() => {
        console.log("logout succeed")
    }, []);

    return (
        <LoggedUserContext.Provider value={{userName: 'Isadora', logout: handleLogout}}>
            {children}
        </LoggedUserContext.Provider>
    )
}