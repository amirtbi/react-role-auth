import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"

export function Home(){
    const auth = useAuth();
    return <>
        <h1>Home page</h1>
        <button onClick={auth.logOut}>Logout</button>
        <Link to="/admin">Admin page</Link>
    </>
}

