import React from "react";
// import {
//   Checkbox,
//   Grid,
//   TextField,
//   FormControlLabel,
//   Paper,
//   Button,
// } from "@material-ui/core";
//import TopBar from "./Top-bar/TopBar";
import { Box } from "@mui/material";
import { myContext } from "./Context";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  styled,
  TextField,
} from "@mui/material";
import TopBarOne from "./TopBar/TopBarOne";
import TopBarTwo from "./TopBar/TopBarTwo";
import LeftSideBar from "./SideBar/LeftSideBar";
import Calendar from "./Calendar/Calendar";
import EmailIcon from "@mui/icons-material/Email";
import axios from "axios";

const ListItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Login = () => {
  const [checked, setChecked] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const [panel, setPanel] = React.useState(true);
  const [drawer, setDrawer] = React.useState(false);
  const [register, setRegister] = React.useState(false);
  const [window, setWindow] = React.useState(false);
  const [user, setUser] = React.useState("");
  const [first, setFirst] = React.useState();
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleLogin = async () => {
    setLogin(true);
    // console.log("i run");
    // const res = await axios.post("http://localhost:8003/login", {
    //   email: "j@gmail.com",
    //   password: "",
    // });
    // console.log(res.status);
    // setLogin(res.status);
  };
  console.log("login", first);
  const handlePanel = () => {
    setDrawer(true);
    setPanel(false);
  };

  const changeFirst = (newFirst) => {
    setFirst(newFirst);
  };

  return (
    <>
      <myContext.Provider value={{ first: first, changeFirst: changeFirst }}>
        <>
          {!login && (
            <>
              <Box
                style={{
                  paddingLeft: "35%",
                  paddingTop: "15%",
                  maxWidth: "30%",
                }}
              >
                <TextField fullWidth label="Username"></TextField>

                <TextField fullWidth label="Password" type={"password"}>
                  <EmailIcon />
                </TextField>

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

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  style={{ backgroundColor: "black", color: "white" }}
                  onClick={handleLogin}
                >
                  {" "}
                  Login{" "}
                </Button>
              </Box>
            </>
          )}
        </>
        <>
          {login && (
            <Box>
              <ListItem style={{ padding: "0px" }}>
                <TopBarOne />
              </ListItem>

              <ListItem style={{ padding: "0px" }}>
                <TopBarTwo />
              </ListItem>

              <ListItem style={{ padding: "0px" }}>
                {first === 3 && <Calendar />}
              </ListItem>

              <ListItem style={{ padding: "0px" }}>
                {first === 0 && <h1>Home</h1>}
              </ListItem>
              {first === 1 && !drawer ? (
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
                    Drawwer
                  </Button>
                </Box>
              ) : (
                <ListItem style={{ padding: "0px" }}>
                  {first === 1 && <LeftSideBar />}
                </ListItem>
              )}
            </Box>
          )}
        </>
      </myContext.Provider>
    </>
  );
};

export default Login;
