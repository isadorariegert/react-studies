// import { Link } from "react-router-dom";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"


export const Login = () => {
    const history = useNavigate();
    const handleClick = () => {
        history('/home')
    }

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const inputPasswordRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (window.confirm('Are you a man?')) {
            console.log('Man')
        } else {
            console.log('Woman')
        }
    }, []);

    // useEffect(() => {
    //     console.log(email)
    // }, [email]);

    // useEffect(() => {
    //     console.log(password)
    // }, [password]);

    const emailLength = useMemo(() => {
        console.log('RUN')
        return email.length * 1000;
    }, [email.length])

    // const handleLogin = () => {
    //     console.log(email);
    //     console.log(password);
    // } another way using callback:

    const handleLogin = useCallback(() => {
        console.log(email);
        console.log(password);
        console.log(inputPasswordRef)
    }, [email, password]);

    return (
        <div>
            <h1>Login</h1>
            {/* <Link to={"/home"}>Home</Link> */}
            {/* another way: */}
            <button onClick={handleClick}>Home</button> 
            
            <form>
                <label>
                    <span>Email</span>
                    <input 
                    value={email} 
                    onKeyDown={e => e.key === 'Enter' ? inputPasswordRef.current?.focus() : undefined} 
                    onChange={e => (setEmail(e.target.value))} 
                    type="text"/>
                    <p>Characters Length: {emailLength}</p>
                </label>

                <label>
                    <span>Password</span>
                    <input 
                    ref={inputPasswordRef} 
                    value={password} 
                    onChange={e => (setPassword(e.target.value))} 
                    type="password"/>
                </label>
                <button type="button" onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}
