import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Grid, Box, Stack, TextField, Container, TableContainer, Card,Typography  } from "@mui/material";
import React from "react";
import { postOneCategory } from "../../store/actions/categoryActions";
import { useNavigate } from "react-router-dom";
import { setMessage, showSnackbar } from "../../store/actions/settingActions";
import SimpleFab from "../../components/fab/SimpleFab";
import Paper from "@mui/material/Paper";

export default function AddCategory() {
  const categoryDispatch = useDispatch();
  const { snackbar } = useSelector((state) => state.setting);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    categoryName: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    categoryDispatch(postOneCategory(form));
    categoryDispatch(showSnackbar({
      message:"Category has been added.",
      duration:5000,
      open:true,
      severity:"error"
    }));
    navigate("/admin/categories/list");
  };

  return (

  
   <Container sx={{ mt: 20  }} maxWidth='sm' maxHeight='sm' component={Paper}>
    <Box sx={{ mt: 3 }} >
      <Stack spacing={3}  >

      <Typography align='center' gutterBottom variant='h5'>
          Add Category
        </Typography>

        <TextField
         margin="normal"
          name='categoryName'
          label='Category Name'
          onChange={handleChange}
        ></TextField>

        <TextField
          name='description'
          label='Description'
          onChange={handleChange}
        ></TextField>

        <Button color="primary" onClick={handleClick} variant='contained'>
          Add
        </Button>
      </Stack>
      <SimpleFab url="/admin/categories/list" />
    </Box>
    </Container>
   
  );
}
