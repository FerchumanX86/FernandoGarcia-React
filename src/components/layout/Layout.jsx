import { Outlet } from "react-router-dom"
import Navbar from "./NavBar/NavBar"
import Footer from "./Footer/Footer"

const Layout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout