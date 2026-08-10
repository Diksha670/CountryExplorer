import { Outlet } from "react-router-dom"
import { Footer } from "../Footer/footer"
import { Header } from "../Header/header"

export const Applayout=()=>
{
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}