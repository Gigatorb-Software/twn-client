import { useState } from "react";
import { Link } from "react-router-dom";
import { alpha } from "@mui/material/styles";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import type { MouseEvent, ReactElement } from "react";
import type { Theme } from "@mui/material/styles";

/**
 * The `Banner` functional component.
 * @example
 * ```tsx
 * <Banner />
 * ```
 * @returns The `Banner` component skeleton.
 */
const Banner = (): ReactElement => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Typography
              component="div"
              noWrap
              sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
            >
              IBM Cúram Social Program Management
            </Typography>
            <Typography
              component="div"
              noWrap
              sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
            >
              IBM Cúram
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={(theme: Theme) => ({
              position: "relative",
              backgroundColor: alpha(theme.palette.common.white, 0.15),
              "&:hover": {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
              },
              marginRight: theme.spacing(2),
              marginLeft: theme.spacing(3),
              width: "100%",
              [theme.breakpoints.up("sm")]: {
                marginLeft: theme.spacing(3),
                width: "auto",
              },
            })}
          >
            <Box
              sx={(theme: Theme) => ({
                padding: theme.spacing(0, 2),
                height: "100%",
                position: "absolute",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              })}
            >
              <SearchIcon />
            </Box>
            <InputBase
              sx={(theme) => ({
                color: "inherit",
                "& .MuiInputBase-input": {
                  padding: theme.spacing(1, 1, 1, 0),
                  // vertical padding + font size from searchIcon
                  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                  transition: theme.transitions.create("width"),
                  width: "100%",
                  [theme.breakpoints.up("md")]: {
                    width: "20ch",
                  },
                },
              })}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Box>
          <Box>
            <IconButton
              size="large"
              edge="end"
              aria-label="Account of the current user."
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
};

export default Banner;
