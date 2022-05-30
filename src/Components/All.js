import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import { height } from "@mui/system";
import Registration from "./Registration";

export default function All() {
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
      style={{ width: "1090px", height: "260px" }}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    ></Box>
  );
}
