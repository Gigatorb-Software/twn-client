import React from "react";
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,
} from "@material-ui/core";
import TopBar from "./Top-bar/TopBar";

import { styled } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import "./Login.css";
import Registration from "./Registration";
import { Box } from "@mui/material";
import All from "./All";
import DemoSide from "./SideBar/DemoSide";
import TopBarTwo from "./Top-bar/TopBarTwo";

const ListItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const LoginPage = () => {
  const [checked, setChecked] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const [panel, setPanel] = React.useState(true);
  const [drawer, setDrawer] = React.useState(false);
  const [register, setRegister] = React.useState(false);
  const [window, setWindow] = React.useState(false);
  const [user, setUser] = React.useState("");
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleLogin = () => {
    setLogin(true);
  };

  const handlePanel = () => {
    setDrawer(true);
    setPanel(false);
  };

  return (
    <>
      <>
        {!login && (
          <Grid
            container
            style={{ paddingTop: "100px", paddingLeft: "20%" }}
            //direction={"column"}
            justify={"center"}
            alignItems={"center"}
            spacing={3}
            item
            xs={8}
          >
            <Grid item xs={8}>
              <TextField fullWidth label="Username"></TextField>
            </Grid>

            <Grid item xs={8}>
              <TextField
                fullWidth
                label="Password"
                type={"password"}
              ></TextField>
            </Grid>

            <Grid item xs={8}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    label={"Keep me logged in"}
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                }
                label="Keep me logged in"
              />
            </Grid>
            <Grid item xs={8}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                style={{ backgroundColor: "black", color: "white" }}
                onClick={handleLogin}
              >
                {" "}
                Login{" "}
              </Button>
            </Grid>
          </Grid>
        )}
      </>
      {login && (
        <Grid container rowSpacing={0} columnSpacing={3}>
          <Grid item xs={12}>
            <ListItem style={{ padding: "0px" }}>
              <TopBar />
            </ListItem>
          </Grid>
          <Grid item xs={12}>
            <ListItem style={{ padding: "0px" }}>
              <TopBarTwo />
            </ListItem>
          </Grid>

          {!drawer ? (
            <Box
              sx={{
                width: 100,
                height: 500,
                padding: 0,
              }}
            >
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: "#303032", color: "white" }}
                onClick={() => {
                  setDrawer(true);
                }}
              >
                Drawwer <KeyboardDoubleArrowRightIcon />
              </Button>
            </Box>
          ) : (
            <Grid item xs={12}>
              <ListItem style={{ padding: "0px" }}>
                <DemoSide />
              </ListItem>
            </Grid>
          )}
        </Grid>
      )}
    </>
  );
};

export default LoginPage;
