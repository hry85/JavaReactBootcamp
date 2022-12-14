import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import ThemeMenu from "../theme/ThemeMenu";
import { useSelector } from "react-redux";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const pages = ["Books", "Categories", "Authors"];
const paths = [
  "/admin/books/list",
  "/admin/categories/list",
  "/admin/authors/list",

];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const AdminAppbar = () => {
  const { authItems } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const { favorites } = useSelector((state) => state.favorite);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

 

  const handleCloseNavMenu = (index) => {
    setAnchorElNav(null);
    navigate(paths[index]);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

 
const logOut=(e)=>{
e.preventDefault()
  localStorage.removeItem("userId");
  localStorage.removeItem("firstName");
  localStorage.removeItem("lastName");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("accessToken");
  navigate("/")
}

  const loginAndLogoutButton = localStorage.getItem('accessToken')? (
    <Button
      key='login'
      onClick={(e) => logOut(e)}
      sx={{ my: 2, color: "white", display: "block" }}
    >
      Logout
    </Button>
  ) : (
    <Button
      key='login'
      onClick={() => navigate("/auth/login")}
      sx={{ my: 2, color: "white", display: "block" }}
    >
      Login
    </Button>
  );

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',

    },
  }));

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <MenuBookIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Book Store
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(index)}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          < MenuBookIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Book Store
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(index)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box></Box>

          {authItems?.isLogin && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='' src='/static/images/avatar/2.jpg' />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign='center'>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}

          <IconButton onClick={() =>navigate("/favorite")}>
            <Badge badgeContent={favorites.length} color='primary'>
            <FavoriteBorderOutlinedIcon sx={{ color: "white" }} />
            </Badge>
          </IconButton>

          <IconButton onClick={() =>navigate("/cart")}>
              <Badge badgeContent={cartItems.length} color="primary">
                <ShoppingCartOutlinedIcon
                  sx={{ color: "white" }}
                />
              </Badge>
          </IconButton>
          <ThemeMenu />
          <div>{loginAndLogoutButton}</div>
        </Toolbar>
      </Container>
    </AppBar >
  );
};
export default AdminAppbar;
