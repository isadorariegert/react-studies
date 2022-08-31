import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { LoggedUserContext } from "../../shared/context";

export const Dashboard = () => {
    const countRef = useRef(0);

    const loggedUserContext = useContext(LoggedUserContext);

    return (
        <>
            <h1>Dashboard</h1>
            
            <p>{loggedUserContext.userName}</p>

            <p>Counter (initial): {countRef.current}</p>
            <button onClick={()=> countRef.current++}>Som</button>
            <button onClick={() => console.log(countRef.current)}>Show final count</button>
            <Link to={"/login"}>Login</Link>
        </>
    )
}