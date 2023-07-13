import { Outlet } from "react-router-dom"
import NavBar from "./NavBar/NavBar"
import Footer from "./Footer/Footer"

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