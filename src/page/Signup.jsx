import * as React from 'react';
 import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Link,
  FormControlLabel ,Checkbox,
} from "@mui/material";
import { color } from '@mui/system';


           

  
  const Signup = () => {
      const cardStyle = { 
        width: '30vw',
        height: '40vw',
        padding: "10px",
        minWidth: 275,
        boxSizing: 'border-box',
        borderRadius:"5%",
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 5,
        boxShadow: "3px 3px 7px 7px #1DC7FF"
      
    }
    const textfield = {
    width:'60px',

    }
        

   

    const theme = useTheme();
    const personColor = {color:'#2fc2eb'}
    const person = {
      color:'dark',
      backgroundColor:'#2fc2eb',
      borderRadius: 8,
      height: 40,
      width:210,
    }
    const text2field = {
        Width:'5px',
        disableUnderline: true,
    }
  
  const account={
    color:'#000000',
  }
    return (
        <>
  
    <Card style={cardStyle} sx={{ display: 'flex', mt:'100px',ml:50}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography style={personColor} variant="h5" sx={{mt:5,ml:8,fontWeight: '600'}} fontFamily='poppins'>
          <Box
        component="img"
        sx={{
          ml:'auto',
          mt:5,
          my:1,
          height: 40,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="/4.png"
      />

<FormControl sx={{mt:8}}>
           <Input
            startAdornment={
                <InputAdornment position="start">
                   <PersonIcon style={account}/>
                </InputAdornment>
              }
            placeholder="User Name"
            
            
           ></Input>
          
          </FormControl>

          <FormControl sx={{mt:2}}>
           <Input
            startAdornment={
                <InputAdornment position="start">
                   <EmailIcon style={account}/>
                </InputAdornment>
              }
            placeholder="Email Or Phone No"
            
            
           ></Input>
          
          </FormControl>

          <FormControl sx={{mt:2}}>
           <Input type="password"
            startAdornment={
                <InputAdornment position="start">
                   <LockOpenIcon style={account}/>
                </InputAdornment>
              }
            placeholder="password"
            
            
           ></Input>
          
          </FormControl>

          <FormControl sx={{mt:2}}>
           <Input
            startAdornment={
                <InputAdornment position="start">
                   <LockIcon style={account}/>
                </InputAdornment>
              }
            placeholder="confirm password"
            
            
           ></Input>
          
          </FormControl>

</Typography>



             

          
            <br></br><br></br>
            <Button sx={{ml:10 , mt:3}} type="submit" variant="contained" style={person}>Sign Up</Button> 
           

             
         </CardContent>
        </Box>
      {/* <CardMedia
        component="img
        sx={{ width: 151,ml:15,mt:20 }}
        image="C:\Users\HP/Downloads/gigatorb_logo.jpg"
        alt="Live from space album cover"
      /> */}

       

      



    </Card>



    </>
    )
}

export default Signup