import Grid from "@mui/material/Grid";
import React,{ useEffect } from "react";
import { useSelector , useDispatch} from "react-redux";
import BookCard from "./BookCard";
import { getAllBooks } from "../../store/actions/bookActions";
import { addToCart } from "../../store/actions/cartActions";


export default function BookCardList() {
  const { books } = useSelector((state) => state.book);
  const bookDispatch = useDispatch();  
  useEffect(() => {
    bookDispatch(getAllBooks()); 
  }, []);

  
  return (
    <div>
      <Grid sx={{mt:3}} container spacing={2}>
        {books?.map((book) => (
          <Grid item xs={6} md={4} lg={3} key={book.id} > 
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
