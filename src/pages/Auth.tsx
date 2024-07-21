import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../hooks/useAuth";

export function Auth(props:{allowedRoles:string[]}){
    const auth = useAuth();
    const location = useLocation();
    const {allowedRoles} = props;
    if(allowedRoles.find((role)=>auth.roles.includes(role))){
        return <Outlet/>
    }else{
        return <Navigate to="/unauthorized" state={{ from: location }} replace/>
    }

}