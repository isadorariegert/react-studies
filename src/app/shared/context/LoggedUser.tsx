import React from "react";
import { createContext } from "react";

interface ILoggedUserContextData {
    userName: string;
}

export const LoggedUserContext = createContext<ILoggedUserContextData>({} as ILoggedUserContextData);

interface ILoggedUserProviderProps {
    children: React.ReactNode;
}

export const LoggedUserProvider: React.FC<ILoggedUserProviderProps> = ({children}) => {
    return (
        <LoggedUserContext.Provider value={{userName: 'Isadora'}}>
            {children}
        </LoggedUserContext.Provider>
    )
}