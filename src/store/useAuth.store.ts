import { create } from "zustand";

interface AuthState {
    isLoggedIn:boolean;
    roles:string[];
    login:()=>void;
    logOut:()=>void;
    setRoles:()=>void
}

export const  useAuthStore = create<AuthState>()((set)=>({
    isLoggedIn:false,
    roles:[],
    login:()=>set({isLoggedIn:true}),
    logOut:()=>set({isLoggedIn:false}),
    setRoles:()=>set({roles:["admin"]})


}))