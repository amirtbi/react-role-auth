import { Link } from "react-router-dom";

export function UnAuthorized(){
    return <>
        <h1>Un authorized page</h1>
        <Link to="/login">Go back</Link>
    </>
}