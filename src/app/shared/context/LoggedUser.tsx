import React from "react";
import { createContext } from "react";

interface ILoggedUserContextData {
    userName: string;
}

export const LoggedUserContext = createContext({} as ILoggedUserContextData);

interface ILoggedUserContextProps {
    children: React.ReactNode;
}

export const LoggedUserProvider = ({children}: ILoggedUserContextProps) => {
    return (
        <LoggedUserContext.Provider value={{userName: 'Isadora'}}>
            {children}
        </LoggedUserContext.Provider>
    )
}