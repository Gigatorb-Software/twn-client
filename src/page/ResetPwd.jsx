import React from "react";

import {
    Box,
    Button,
    FormControl,
    Input,
    InputAdornment,
  } from "@mui/material"; 
import KeyIcon from "@mui/icons-material/Key";
import PasswordIcon from "@mui/icons-material/Password";

const ResetPwd = () => {
  const account={
    color:"#000000",
  }
  const person = {
    color:"dark",
    backgroundColor:"#2fc2eb",
    borderRadius: 8,
    height: 40,
    width:210,
  }
  return (
    <div className="container">
      <Box
        component="img"
        sx={{
          ml:50,
          mt:10,
          my:10,
          height: 40,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="/4.png"
      />
        <FormControl sx={{ ml:50,mt:5}}>
           <Input
            
            startAdornment={
                <InputAdornment position="start">
                   <KeyIcon style={account}/>
                </InputAdornment>
              }
            placeholder="Current Password"
            variant="outlined"
            sx={{   "&:hover": { color: "#1DC7FF" }}}
           ></Input>
          
          </FormControl>
          <FormControl sx={{ ml:50,mt:5}}>
           <Input type="password"
            
            startAdornment={
                <InputAdornment position="start">
                   <PasswordIcon style={account}/>
                </InputAdornment>
              }
             
            placeholder="New Password"
            variant="outlined"
            sx={{   "&:hover": { color: "#1DC7FF" }}}
           ></Input>
          
          </FormControl>

          <FormControl sx={{ ml:50,mt:5}}>
           <Input
            
            startAdornment={
                <InputAdornment position="start">
                   <PasswordIcon style={account}/>
                </InputAdornment>
              }
            placeholder="Confirm password"
            variant="outlined"
            sx={{   "&:hover": { color: "#1DC7FF" }}}
           ></Input>
          
          </FormControl>
          <Button sx={{ml:50 , mt:7}} type="submit" variant="contained" style={person}>Submit</Button> 
    </div>
  );
};

export default ResetPwd;
