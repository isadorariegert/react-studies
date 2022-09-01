import { useRef } from "react";
import { Link } from "react-router-dom";
import { useLoggedUser } from "../../shared/hooks";

export const Dashboard = () => {
    const countRef = useRef(0);

    const { userName, logout } = useLoggedUser();

    return (
        <>
            <h1>Dashboard</h1>
            
            <p>{userName}</p>

            <p>Counter (initial): {countRef.current}</p>
            <button onClick={()=> countRef.current++}>Som</button>
            <button onClick={() => console.log(countRef.current)}>Show final count</button>
            <button onClick={logout}>Logout</button>

            <Link to={"/login"}>Login</Link>
        </>
    )
}