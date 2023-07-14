import { AppBar, Toolbar, Badge, Button, IconButton } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { menuNavigate } from "../../../routes/menuNavigate";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Navbar = () => {
  const { getTotalItems } = useContext(CartContext);
  let totalItems = getTotalItems();

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dyt2e5vc9/image/upload/v1685443169/MERCADO%20PAVO/mercado_pavo_hmqwrz.png"
            height={80}
            alt="Mercado Pavo Logo"
          />
        </Link>
        <div style={{ flexGrow: 1 }} />
        <ul style={{ display: "flex", alignItems: "center" }}>
          {menuNavigate.map(({ id, path, title }) => (
            <Button
              key={id}
              component={Link}
              to={path}
              variant="contained"
              color="primary"
              style={{ margin: "0 8px" }}
            >
              {title}
            </Button>
          ))}
          <Link to="/carrito" style={{ marginLeft: "16px" }}>
            <Badge badgeContent={totalItems} showZero color="primary">
              <BsFillCartCheckFill size="30px" />
            </Badge>
          </Link>
        </ul>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          style={{ marginLeft: "16px" }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;



// import { Badge, Button } from "@mui/material";
// import { BsFillCartCheckFill } from "react-icons/bs";
// import styles from "./Navbar.module.css";

// import { Link } from "react-router-dom";
// import { menuNavigate } from "../../../routes/menuNavigate";
// import { useContext } from "react";
// import { CartContext } from "../../../context/CartContext";

// const Navbar = () => {
//   const { getTotalItems } = useContext(CartContext);
//   let totalItems = getTotalItems();

//   return (
//     <>
//       <div className={styles.containerNavbar}>
//         <Link to="/">
//           <img
//             src="https://res.cloudinary.com/dyt2e5vc9/image/upload/v1685443169/MERCADO%20PAVO/mercado_pavo_hmqwrz.png"
//             height={80}
//           />
//         </Link>
//         <ul className={styles.categories}>
//           {menuNavigate.map(({ id, path, title }) => (
//             <Button
//               key={id}
//               component={Link}
//               to={path}
//               variant="contained"
//               color="primary"
              
//             >
//               {title}
//             </Button>
//           ))}
//         </ul>

//         <Link to="/carrito">
//           <Badge badgeContent={totalItems} showZero color="primary">
//             <BsFillCartCheckFill size="30px" />
//           </Badge>
//         </Link>
//       </div>
//     </>
//   );
// };

// export default Navbar;



