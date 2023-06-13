import { Badge, Button } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import styles from "./Navbar.module.css";
import HomeIcon from '@mui/icons-material/Home';

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className={styles.containerNavbar}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dyt2e5vc9/image/upload/v1685443169/MERCADO%20PAVO/mercado_pavo_hmqwrz.png"
            height={80}
          />
        </Link>
        <ul className={styles.categories}>
          <Button component={Link} to="/" color="inherit" startIcon={<HomeIcon color="primary" />} className={styles.button}>Inicio</Button>
          <Button component={Link} to="/category/teclados" color="inherit" className={styles.button}>Teclados</Button>
          <Button component={Link} to="/category/monitor" color="inherit" className={styles.button}>Monitor</Button>
          <Button component={Link} to="/category/cpu" color="inherit" className={styles.button}>CPU</Button>
        </ul>

        <Link to="/carrito">
          <Badge badgeContent={69} color="primary">
            <BsFillCartCheckFill size="30px" />
          </Badge>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
