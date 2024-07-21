import { Outlet } from "react-router";

export function AfterLoginLayout(){

    return <>
        <div>
            <header>
                <h1>Main layout</h1>
            </header>
            <main>
                <Outlet/>
            </main>

            <footer></footer>
        </div>
    </>
}