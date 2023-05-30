import { Box, Button, Grid } from "@mui/material";

export const NavBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "yellow",
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <img
            src="https://res.cloudinary.com/dyt2e5vc9/image/upload/v1685443169/MERCADO%20PAVO/mercado_pavo_hmqwrz.png"
            height={100}
          />
        </Grid>

        <Grid item xs={11}>
          <Button variant="contained">NAVBAR🍔</Button>
        </Grid>
      </Grid>
    </Box>
  );
};
