import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Login from "./Components/Login";
import { Grid, TextField, Typography } from "@mui/material";
import { minWidth } from "@mui/system";
function App() {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      style={{ minHeight: "100vh" }}
      spacing={5}
    >
      <Grid item style={{ border: "0.2px" }}>
        <Login />
      </Grid>
    </Grid>
  );
}

export default App;
