import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { indigo, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BookCard({ book }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

 

  const cartDispatch = useDispatch();

  const addToCartItem = (book) => {
    cartDispatch(addToCart(book));
  }
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: indigo[500] }} aria-label="recipe">
            {book.title.substring(0, 1)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={book.title}
        subheader={book.publisher}
        sx={{ minHeight: 80 }}
      />
      <CardMedia
        component="img"
        height="194"
        image={`/books/${book.id % 120}.jpg`}
        alt="Paella dish"
      />
      <CardContent sx={{ minHeight: 150 }}>
        {book.bookAuthors.map((authors) => {
          return (
            <Typography variant="body2" color="text.secondary" key={authors.id}>
              {authors.firstName} {authors.lastName}
            </Typography>
          );
        }
        )}
        <Typography >
          {book.price} ₺
        </Typography>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="add to shopping basket" onClick={() => addToCartItem(book)}>
          <AddShoppingCartIcon  />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{book.category.categoryName}</Typography>
          <Typography paragraph>
            {book.category.description}
          </Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}
