import Grid from "@mui/material/Grid";
import React,{ useEffect } from "react";
import { useSelector , useDispatch} from "react-redux";
import Favorite from "../Favorite";
import { getAllBooks } from "../../store/actions/bookActions";
import { ListItem } from "@mui/material";


export default function FavoriteCard() {
  const { favorites } = useSelector((state) => state.favorite);
//   const favoriteDispatch = useDispatch();  
//   useEffect(() => {
//     favoriteDispatch(getAllBooks()); 
//   }, []);

  console.log(favorites)
  return (
    <div>
      <Grid sx={{mt:3}} container spacing={2}>
        {favorites.map((item) => (
          <Grid item xs={6} md={4} lg={3} key={item.id} > 
            <Favorite item={item} />
            {console.log(item)}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
