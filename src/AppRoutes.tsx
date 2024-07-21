import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Admin } from "./pages/Admin";
import { useAuth } from "./hooks/useAuth";
import { AfterLoginLayout } from "./layouts/AfterLoginLayout";
import { BeforeLoginLayout } from "./layouts/BeforeLoginLayout";
import { useEffect } from "react";
import { Auth } from "./pages/Auth";
import { UnAuthorized } from "./pages/UnAthorized";
export const AppRoutes = () => {
  const {isAuth} = useAuth();

  return (
    <>
      <BrowserRouter>
        <Routes>
          {isAuth ? (
            <>
              <Route path="/*" element={<AfterLoginLayout />}>
                <Route index element={<Navigate to="/home" />} />
                <Route path="home" element={<Home />} />
                <Route path="unauthorized" element={<UnAuthorized />} />
                <Route element={<Auth allowedRoles={["admin"]} />}>
                  <Route path="admin" element={<Admin />} />
                </Route>
                <Route path="*" element={<Navigate to="home"/>}/>
              </Route>
            </>
          ) : (
            <>
              <Route path="/" element={<BeforeLoginLayout />}>
                <Route index element={<Login />} />
                <Route path="*" element={<Login />}></Route>
              </Route>
            </>
          )}

          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
