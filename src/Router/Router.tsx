import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LayOut } from "../api/Component/Layout/Layout"
import { Dashboard } from "../pages/Dashboard"
import { Login } from "../pages/Login"
import { PATH } from "./routerPath"

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index path={PATH.LOGIN} element={<Login />}/>
                <Route element={<LayOut />}>
                    <Route path={PATH.BASE} element={<Dashboard />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}