import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";

export default function Registration() {
  const [value, setValue] = React.useState("");

  const [inpval, setINP] = React.useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  console.log("value", value);
  return (
    <Box
      component="form"
      style={{ width: "1090px", height: "293px" }}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid
        container
        rowSpacing={4}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{ paddingLeft: "20%" }}
      >
        <Grid item xs={4}>
          <TextField
            id="standard-disabled"
            label="Name"
            defaultValue="John"
            variant="standard"
            onChange={setdata}
          />
          <TextField
            id="standard-password-input"
            label="Email"
            type="example@gmail.com"
            defaultValue={inpval.name}
            variant="standard"
            onChange={setdata}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="standard-number"
            label="Age"
            type="text"
            defaultValue="4"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            onChange={setdata}
          />
          <TextField
            //id="standard-search"
            label="Mobile no."
            type="Number"
            defaultValue="7777777777"
            variant="standard"
          />
        </Grid>
        <Grid item xs={8}>
          <Button type="submit" variant="contained" onClick={() => {}}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
