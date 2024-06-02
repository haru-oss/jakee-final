import { FC } from "react"
import { memo } from "react";

import { Routes,Route } from "react-router-dom"



import { Login } from "../components/pages/Login";
import { homeroutes } from "./Homeroutes";





export const Router:FC = memo(()=> {
    return(
        <>
        <Routes>
          <Route path="/login" element={<Login />} />

        {
            homeroutes.map((route)=>{
                return(
                <Route
                key = {route.path}
                path={route.path}
                element={route.children}
                />

            ) })
        }


        </Routes>


        </>
    )
});