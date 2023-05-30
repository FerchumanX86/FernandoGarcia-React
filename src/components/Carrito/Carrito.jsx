import { Grid, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Carrito = () => {
  return (
    <Grid padding={2}>
      <Badge badgeContent={69} color="primary">
        <ShoppingCartIcon fontSize="large" color="secondary" />
      </Badge>
    </Grid>
  );
};
