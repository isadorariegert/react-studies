import { useRef } from "react"
import { Link } from "react-router-dom"

export const Dashboard = () => {
    const countRef = useRef(0);

    return (
        <>
            <h1>Dashboard</h1>
            <p>Counter (initial): {countRef.current}</p>
            <button onClick={()=> countRef.current++}>Som</button>
            <button onClick={() => console.log(countRef.current)}>Show final count</button>
            <Link to={"/login"}>Login</Link>
        </>
    )
}