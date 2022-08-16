import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { Masonry } from '@mui/lab';
import { removeFromFavorites } from '../../store/actions/favoriteActions';

const Favorite = () => {
    const favoriteDispatch = useDispatch();
    const {favorites} = useSelector((state) => state.favorite)


    const handleFavoriteDelete=(book)=>{
        favoriteDispatch(removeFromFavorites(book))
        console.log(book)
        console.log(favorites)
    }
      return (
        <Grid sx={{mt:3}} container spacing={2} >
            <Masonry columns={{ xs: 2, sm: 2, md: 3, lg: 4, xl: 4 }} spacing={2}>
            {favorites.map(favorite=>(
                <Card key={favorite.book.id}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={`/books/${favorite.book.id % 120}.jpg`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {favorite.book.title }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {favorite.book.publisher}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    {favorite.book.price}
                  </Button>
                </CardActions>
              </Card>
            ))}
            </Masonry>
        </Grid>
      );
    }
    
export default Favorite