// import { Link } from "react-router-dom";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom"
import { ButtonLogin } from "./components/ButtonLogin";
import { InputLogin } from "./components/InputLogin";


export const Login = () => {
    const history = useNavigate();
    const handleClick = () => {
        history('/home')
    }

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

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
    }, [email, password]);

    return (
        <div>
            <h1>Login</h1>
            {/* <Link to={"/home"}>Home</Link> */}
            {/* another way: */}
            <button onClick={handleClick}>Home</button> 
            
            <form>

                <InputLogin 
                    label="Email"
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                />

                <InputLogin 
                    label="Password"
                    type="password"
                    value={password}
                    onChange={newValue => setPassword(newValue)}
                />
                <ButtonLogin 
                    type="button"
                    onClick={handleLogin}
                > Sign in </ButtonLogin>
                <ButtonLogin 
                    type="button"
                    text="Sign up"
                    onClick={handleLogin}
                />
            </form>
        </div>
    )
}
