import React from "react";


interface IButtonLoginProps {
    type: "button" | "submit" | "reset";
    onClick: () => void;
    text?: string;
    children?: React.ReactNode;
}

export const ButtonLogin = ({type, onClick, text, children}: IButtonLoginProps) => {
    return (
        <button type={type} onClick={onClick}>
            {text} {children}
        </button>
    )
}