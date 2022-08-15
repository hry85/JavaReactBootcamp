import { Button, Container, Modal, Stack, Table, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import AuthService from "../../services/AuthService";
import { showSnackbar } from "../../store/actions/settingActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {logIn} from "../../store/actions/authActions";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Paper from "@mui/material/Paper";

export default function Login() {
  const authService = new AuthService();
  const navigate = useNavigate();
  const authDispatch = useDispatch();
  

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { handleSubmit, handleChange, setValues, values } = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      authDispatch(logIn(values));
      authService.login(values).then((resp) => {
        if (resp !== 401) {
          // console.log(resp);
          localStorage.setItem("userId", resp.userId);
          localStorage.setItem("firstName", resp.firstName);
          localStorage.setItem("lastName", resp.lastName);
          localStorage.setItem("refreshToken", resp.refreshToken);
          localStorage.setItem("accessToken", resp.accessToken);
          authDispatch(
            showSnackbar({
              message: "Log succeced.",
              severity: "success",
            })
          );
          navigate("/books");
        } else {
          authDispatch(
            showSnackbar({
              message: "Log is failed.",
              severity: "error",
            })
          );
        }
      });
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Container sx={{ mt: 20  }} maxWidth='sm' component={Paper}>
        <Stack spacing={3}>
      
         <>
          <TextField
          margin="normal"
            name='userName'
            required
            label='User Name'
            variant='outlined'
            onChange={handleChange}
            value={values.userName}
            size = "medium"
          ></TextField>

<FormControl sx={{ m: 3, width: '64ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

          {/* <TextField  
            name='password'
            type='password'
            required
            label='Password'
            variant='outlined'
            onChange={handleChange}
            value={values.password}
          ></TextField>  */}
       </>
     

          <Button variant='contained' type='submit'>
            Submit
          </Button>
        </Stack>
      </Container>
      {/* {JSON.stringify(values)} */}
    </form>
  );
}
