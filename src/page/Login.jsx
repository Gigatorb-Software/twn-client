import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
    FormControlLabel ,Checkbox, Typography,
  } from "@mui/material"; 
import { fontWeight } from '@mui/system';



const Login = () => {

  const googlecolor = {color:'#ff3333'}
  const facebookcolor={color:'#29487d',height: 30,width: 30,}
  const linkedlncolor={color:'#006192',height: 30,width: 30,}
  
  const person = {
    color:'dark',
    backgroundColor:'#2fc2eb',
    borderRadius: 8,
    height: 40,
    width:210,
  }
  const gridsize = {
    fontSize:13,
    fontWeight:700,
    color:'#1DC7FF'

  }
 
  const account={
    color:'#000000',
  }
  
  return (
    <>
      <div className='container'>
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
                   <PersonIcon style={account}/>
                </InputAdornment>
              }
            placeholder="User Login"
            variant="standard"
            sx={{   "&:hover": { color: '#1DC7FF' }}}
           ></Input>
          
          </FormControl>
          <FormControl sx={{ ml:50,mt:5}}>
           <Input type="password"
            
            startAdornment={
                <InputAdornment position="start">
                   <LockIcon style={account}/>
                </InputAdornment>
              }
            
            placeholder="password"
            variant="standard"
            sx={{"&:hover": { color: '#1DC7FF' }}}
            
            ></Input>
          </FormControl>
          <br></br>
         

        <Typography sx={{ml:50,mt:1}} style={gridsize}>
        <Link href="#" sx={{
              color:'#000000',
              "&:hover": { color: '#1DC7FF' }
            }}>
              forgot password?
            </Link>
        </Typography>

            <Button sx={{ml:50 , mt:7}} type="submit" variant="contained" style={person}>log in</Button> 
             {/* <Typography sx={{ml:60,mt:1}} fontSize='small'>
               Forget password
             </Typography> */}
             <Typography sx={{ml:63,mt:2, fontWeight:700}}>
                or
            </Typography>
            <Box sx={{ml:5}} fontSize='small'>
                <Box
                component="img"
                sx={{
                ml:49,
                mt:-3,
                my:1,
                height: 40,
                width: 40,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
                "&:hover":{transform:"scale(1.5)"}
              }}
                alt="The house from the offer."
                src="/google.webp"/>
                
               
                <FacebookIcon style={facebookcolor} sx={{ml:3, "&:hover":{transform:"scale(1.5)"}}} />
                <LinkedInIcon style={linkedlncolor} sx={{ml:3, "&:hover":{transform:"scale(1.5)"}}}/>
        
            </Box>
            <Typography sx={{ml:52,mt:1}} style={gridsize}>
            <Link href="#" sx={{
              color:'#000000',
              "&:hover": { color: '#1DC7FF' }
            }}>
              Create new account Sign Up
            </Link>
        </Typography>
          
          
          </div> 

    </>
  )
}

export default Login;
