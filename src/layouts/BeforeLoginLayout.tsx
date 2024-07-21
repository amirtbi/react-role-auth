import { Outlet } from "react-router";

export function BeforeLoginLayout(){

    return <>
        <div>
            <header>
                <h1>Before login</h1>
            </header>
            <main>  
            <Outlet/>
            </main>
        </div>
    </>
}