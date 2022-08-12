import { createTheme, ThemeProvider } from "@mui/material";
import {  brown, green,  indigo , grey, deepOrange} from "@mui/material/colors";



const theme1 = createTheme({
  palette: {
    primary: brown,
    secondary: grey,
  },
});

const theme2 = createTheme({
 
  palette: {
    primary:indigo,
    secondary:{
      main:'#C69050',
    }
  },
});

const theme3 = createTheme({
  palette: {
    primary: green,
    secondary:{
    main:'#ff7043',
  }
  },
});


export { theme1, theme2, theme3} 