import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
export default function VentaCard() {
  return (
    <Card
        sx={{ mt: 5,
            maxWidth: 345,
            padding: "50px",
            transition:"0.2s",
            "&:hover":{
                transform: "scale(1.05)",
            
            } 
    
        }}>

            
        <CardActionArea>

        <CardMedia
        sx={{ height: 240 }}
        image="https://res.cloudinary.com/dyt2e5vc9/image/upload/v1685443274/MERCADO%20PAVO/OIP_r6m2d2.jpg"
        
      />

            <CardContent >
                
                <Typography
                    variant="h5">Card Nombre
                </Typography>
                    <Typography
                    component="p"
                    variant="body2"
                    >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fuga
                    at dolor dolorum tenetur explicabo ex minima aliquam? Culpa eum
                    distinctio dignissimos! Deleniti aliquid necessitatibus molestias
                    maxime corporis eius ut.
                    </Typography>
                    
            </CardContent>

        </CardActionArea>


    <CardActions>

        <Button variant="contained">Comprar</Button>
        <Button color="error">Remover</Button>

    </CardActions>



    

    

    </Card>
  );
}

