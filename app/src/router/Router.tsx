import { memo,FC } from "react";
import { Routes,Route } from "react-router-dom";



import { Login } from "../components/pages/Login";
import { homeroutes } from "./Homeroutes";
// import { Home } from "../components/pages/Home ";




export const Router:FC = memo(()=> {
    return(
        <>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home/*" element={<HomeRoutes/>}/>
        </Routes>

        </>
    );
});






const HomeRoutes:FC = ()=> {
    return(
        <Routes>
            {homeroutes.map((route)=>(
                <Route key = {route.path}
                       path = {route.path}
                     element = {route.children}  />
            ))}
        </Routes>

    );
};