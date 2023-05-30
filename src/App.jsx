import { Grid } from "@mui/material";
import { Carrito } from "./components/Carrito/Carrito";
import { NavBar } from "./components/NavBar/NavBar";
import VentaCard from "./components/VentaCard/VentaCard";

function App() {
  return (
    <div>
      <Grid container>
        
        <Grid item xs = {10}>
          <NavBar />
        </Grid>

        <Grid item xs={1}>
          <Carrito />
        </Grid>

        <Grid>
          <VentaCard />
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
