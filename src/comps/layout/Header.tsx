import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import type { ReactElement } from "react";

/**
 * The `Navbar` functional component.
 * @example
 * ```tsx
 * <Navbar />
 * ```
 * @returns The `Navbar` component skeleton.
 */
const Header = (): ReactElement => {
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
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
