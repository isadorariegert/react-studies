// import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
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

    useEffect(() => {
        console.log(email)
    }, [email]);

    useEffect(() => {
        console.log(password)
    }, [password]);

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
