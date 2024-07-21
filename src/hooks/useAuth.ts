import { useAuthStore } from "../store/useAuth.store";

export function useAuth(){
    const authStore = useAuthStore();

    const logIn = ()=>{
        authStore.login();
        authStore.setRoles();
    }
    const logOut = ()=>{
        authStore.logOut()
    }

    return {isAuth:authStore.isLoggedIn,logIn,logOut,roles:authStore.roles}
}