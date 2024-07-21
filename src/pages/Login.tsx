import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth"

export function Login(){
    const {logIn} = useAuth();
    const naviagte = useNavigate();
    const loginRequest = ()=>{
        logIn();
        naviagte("/home");
    }
    return <>
        <h1>Login page</h1>
        <button onClick={loginRequest}>Login</button>
    </>
}