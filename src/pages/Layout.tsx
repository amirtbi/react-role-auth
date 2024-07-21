import { useAuth } from "../hooks/useAuth";
import { AfterLoginLayout } from "../layouts/AfterLoginLayout";
import { BeforeLoginLayout } from "../layouts/BeforeLoginLayout";

export function Layout(){
    const {isAuth} = useAuth();
    if(isAuth){
        return <AfterLoginLayout/>
    }else{
        return <BeforeLoginLayout/>
    }
   
}