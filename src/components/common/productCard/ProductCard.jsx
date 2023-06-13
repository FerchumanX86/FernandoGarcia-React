import { Button, Card, CardActions, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ elemento }) => {
  return (
    <Card sx={{ width: 350, height: 350, backgroundColor: "white" }}>
      <Box sx={{ display: "flex", justifyContent: "center" , margin: "10px"}}>
        <CardMedia
          sx={{
            height: 130,
            width: 130,
          }}
          image={elemento.img}
          title="carta"
        />
      </Box>
      <CardContent sx={{ height: 150 }}>
        <Typography gutterBottom variant="h5" component="div" textAlign={"center"}>
          {elemento.title}
        </Typography>
        <Typography variant="h6" color="text.secondary" textAlign={"center"}>
          {elemento.description}
        </Typography>
        <Typography variant="subtitle1" textAlign={"center"}>
          ${elemento.price}.-
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Link to={`/itemDetail/${elemento.id}`}>
          <Button variant="contained" size="small" sx={{ textTransform: "none" }}>
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
