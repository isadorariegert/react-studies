// import { Link } from "react-router-dom";

import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom"


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

    const handleLogin = () => {
        console.log(email);
        console.log(password);
    }

    return (
        <div>
            <h1>Login</h1>
            {/* <Link to={"/home"}>Home</Link> */}
            {/* another way: */}
            <button onClick={handleClick}>Home</button> 
            
            <form>
                <label>
                    <span>Email</span>
                    <input value={email} onChange={e => (setEmail(e.target.value))} type="text"/>
                    <p>Characters Length: {emailLength}</p>
                </label>

                <label>
                    <span>Password</span>
                    <input value={password} onChange={e => (setPassword(e.target.value))} type="password"/>
                </label>
                <button type="button" onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}
