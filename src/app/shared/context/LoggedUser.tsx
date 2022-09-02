import React, { useCallback, useEffect, useState } from "react";
import { createContext } from "react";

interface ILoggedUserContextData {
    userName: string;
    logout: () => void;
}
interface ILoggedUserProviderProps {
    children: React.ReactNode;
}

export const LoggedUserContext = createContext({} as ILoggedUserContextData);

export const LoggedUserProvider = ({children}:ILoggedUserProviderProps) => {

    const [ name, setName ] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setName('Lucas')
        }, 600)
    })

    const handleLogout = useCallback(() => {
        console.log("logout succeed")
    }, []);

    return (
        <LoggedUserContext.Provider value={{userName: name, logout: handleLogout}}>
            {children}
        </LoggedUserContext.Provider>
    )
}