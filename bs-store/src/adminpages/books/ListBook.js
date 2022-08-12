import { Avatar, Button } from "@mui/material";
import React, { useEffect } from "react";
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

import { deleteOneBook, getAllBooks } from "../../store/actions/bookActions";
import AuthorList from "../../components/authorList/AuthorList";
import {  ButtonGroup, Fab } from "@mui/material";
import SimpleFab from "../../components/fab/SimpleFab";

export default function ListBook() {
  const { books } = useSelector((state) => state.book);
  const bookDispatch = useDispatch();

  useEffect(() => {
    bookDispatch(getAllBooks());
  }, []);

  const handleRemove = (id) => {
    console.log(id)
     bookDispatch(deleteOneBook(id));
  }

  return (
    <>
   
      <TableContainer  sx={{ m: 1, p: 1 }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Id</TableCell>
              <TableCell align='center' >Image</TableCell>
              <TableCell align='center'>Title</TableCell>
              <TableCell align='center'>Price</TableCell>
              <TableCell align='center'>Publisher</TableCell>
              <TableCell align='center'>Authors</TableCell>
              <TableCell align='center'>Categories</TableCell>
              <TableCell align='center'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => {
              const { id, title, price, publisher, category, bookAuthors } =
                book;
              return (
                <TableRow key={id}>
                  <TableCell component='th' scope='row'>{id}</TableCell>
                  <TableCell align='center' >
                    <Avatar src={`/books/${id % 121}.jpg`}></Avatar>
                  </TableCell>
                  <TableCell align='center'>{title}</TableCell>
                  <TableCell align='center'>{price}</TableCell>
                  <TableCell align='center'>{publisher}</TableCell>
                  <TableCell align="center">
                    <AuthorList authors={bookAuthors} />
                  </TableCell>
                  <TableCell>{category.categoryName}</TableCell>
                  <TableCell>
                    <ButtonGroup orientation='vertical'>
                      <Button>Edit</Button>
                      <Button onClick = {() => handleRemove(id)}>
                        Remove
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <SimpleFab url="/admin/books/add" />
    </>
  );
}
