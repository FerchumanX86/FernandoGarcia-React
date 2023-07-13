import { Outlet } from "react-router-dom"
import NavBar from "./navbar/Navbar"
import Footer from "./footer/Footer"

const Layout = () => {
  return (
    <div>
        <NavBar />
        <div style={{minHeight: "100vh"}}>

        <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Layout