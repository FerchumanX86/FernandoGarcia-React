import { Badge, Box, Button, Grid } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const NavBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "yellow",
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <h1>MercadoPavo </h1>
        </Grid>

        <Grid item xs={11}>
          <Button variant="contained">NAVBAR🍔</Button>
        </Grid>

        <Grid>
          <div>
            <Badge badgeContent={69} color="primary">
              <ShoppingCartIcon fontSize="large" color="secondary" />
            </Badge>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};
