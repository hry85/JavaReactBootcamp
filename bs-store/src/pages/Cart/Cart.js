import React from 'react'
import { Avatar, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import ThemeMenu from "../../components/theme/ThemeMenu";
import { setTheme } from "../../store/actions/settingActions";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import {  ButtonGroup} from "@mui/material";
import { removeFromCart } from '../../store/actions/cartActions';

const Cart = () => {
    const cartDispatch = useDispatch();
    const {cartItems} = useSelector((state) => state.cart)
    let total = 0

    const handleCartItemDelete=(book)=>{
        cartDispatch(removeFromCart(book))
        console.log(book)
        console.log(cartItems)
    }

  return (
    <TableContainer  sx={{ m: 1, p: 1 }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='left'>Id</TableCell>
              <TableCell align='left' >Image</TableCell>
              <TableCell align='center'>Title</TableCell>
              <TableCell align='center'>Price</TableCell>
              <TableCell align='center'>Publisher</TableCell>
              <TableCell align='center'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map(({book},index) => {
              const {  id,title, price, publisher } = book;
              total+=price
              return (
                <TableRow key={id}>
                  <TableCell component='th' scope='row'>{index+1}</TableCell>
                  <TableCell align='center' >
                    <Avatar src={`/books/${id % 121}.jpg`}></Avatar>
                  </TableCell>
                  <TableCell align='center'>{title}</TableCell>
                  <TableCell align='center'>{price} ₺</TableCell>
                  <TableCell align='center'>{publisher}</TableCell>
                  <TableCell>
                    <ButtonGroup orientation='vertical'>
                      <Button onClick={(e) =>handleCartItemDelete(book)}>
                        REMOVE FROM CART
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              );
            })}
            <TableRow>
                <TableCell colSpan={3} align='left'>Toplam </TableCell>
                <TableCell sx={{paddingLeft:'60px'}} colSpan={3} align='left'>{total} ₺</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default Cart