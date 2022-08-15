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

const Cart = () => {
    const {cartItems} = useSelector((state) => state.cart)
    let total = 0
  return (
    <TableContainer  sx={{ m: 1, p: 1 }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Id</TableCell>
              <TableCell align='center' >Image</TableCell>
              <TableCell align='center'>Title</TableCell>
              <TableCell align='center'>Price</TableCell>
              <TableCell align='center'>Publisher</TableCell>
              <TableCell align='center'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map(({book},index) => {
              const {  title, price, publisher } = book;
              total+=price
              return (
                <TableRow key={index}>
                  <TableCell component='th' scope='row'>{index+1}</TableCell>
                  <TableCell align='center' >
                    <Avatar src={`/books/${(index+1) % 121}.jpg`}></Avatar>
                  </TableCell>
                  <TableCell align='center'>{title}</TableCell>
                  <TableCell align='center'>{price}</TableCell>
                  <TableCell align='center'>{publisher}</TableCell>
                  <TableCell>
                    <ButtonGroup orientation='vertical'>
                      <Button>
                        Sepetten sil
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              );
            })}
            <TableRow>
                <TableCell align='center'>{total}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default Cart