import React from "react";
import { Toolbar, Grid, Link, Typography,Box } from "@mui/material";
import { Gradient } from "@mui/icons-material";

const Navbar1 = () => {
    const styleColor = {
        backgroundColor: "#ffffff",
    }

    const navButton = {
        Color:"#0B2771",
        
        
    }

    return (
        <>
            <Toolbar style={styleColor}>
                    <Typography >
                    <Box
                        component="img"
                        sx={{
                        ml:5,
                        mt:4,
                        my:4,
                        height: 40,
                        width: 300,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                        }}
                        alt="The house from the offer."
                        src="/gigaTorb.png"
                    />

                    </Typography>
                    <Typography marginLeft={50}> 
                    <Link href="#" sx={{
                       color:"#1DC7FF",fontWeight:700, fontFamily:"monospace",
                    "&:hover": { color: "#0B2771" },textDecoration:'none',fontSize:20
                    }}>Home
                    </Link> 
                    </Typography>
                    <Typography marginLeft={8} > 
                    <Link href="#" sx={{
                       color:"#1DC7FF",fontWeight:700, fontFamily:"monospace",
                    "&:hover": { color: "#0B2771" },textDecoration:'none',fontSize:20
                    }}>Services
                    </Link> 
                    </Typography>
                    <Typography  marginLeft={8} >
                    <Link href="#" sx={{
                       color:"#1DC7FF",fontWeight:800, fontFamily:"monospace",
                    "&:hover": { color: "#0B2771" },textDecoration:'none',fontSize:20
                    }}>Technology
                    </Link> 
                    </Typography>
                    <Typography marginLeft={8} >
                    <Link href="#" sx={{
                       color:"#1DC7FF",fontWeight:800, fontFamily:"monospace",
                    "&:hover": { color:  "#0B2771" },textDecoration:'none',fontSize:20
                    }}>Contact Us
                    </Link> 
                    </Typography>
               </Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} sx={{backgroundImage:"radial-gradient(circle 550px  at top left, #1DC7FF 40%, #1DC7FF 20%, white)"}}>
                        <Grid item xs={6} sx={{display:'flex'}}>
                        <Typography sx={{m:'auto', fontSize:35,color:'#000000', fontWeight:700}}>
                        IBM Cúram Social Program<br></br>
                        Management Implementation <br></br>
                         Services<br></br>
                        <Typography sx={{mt:2, color:'##2e2e2e'}} >
                        Gigatorb Software offers IBM Cúram SPM complete technical <br></br>
                        implementation services. Rely on us to provide the  end-to-end<br></br>
                        technical skills to maximize  the  return on your IBM  Cúram SPM<br></br>
                          investment.
                        </Typography>
                      
                    </Typography>
                  
                        </Grid>
                        <Grid item xs={6} >
                        <Box
                        component="img"
                        sx={{
                        ml:8,
                        mt:2,
                        my:1,
                        height: 400,
                        width: 600,
                      
                        }}
                        alt="The house from the offer."
                        src="/programming.png"
                    />
                        </Grid>
                        
                    </Grid>
                    </Box>

                     <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                       
                        <Grid item xs={6}>
                        <Box
                        component="img"
                        sx={{
                        ml:6,
                        mt:10,
                        my:10,
                        height: 400,
                        width: 500,
                      
                        }}
                        alt="The house from the offer."
                        src="/aboutus.png"
                    />
                        </Grid>
                        <Grid item xs={6} sx={{display:'flex', backgroundImage:"radial-gradient(circle 550px  at top right, #1DC7FF 40%, #1DC7FF 20%, white)"}}>
                        <Typography sx={{m:'auto', fontSize:35,color:'#000000', fontWeight:700,mt:2}}>
                        About Us
                        <Typography sx={{mt:2, color:'##2e2e2e'}}>
                        Gigatorb Software offers IBM Cúram SPM complete technical <br></br>
                        implementation services. Rely on us to provide the  end-to-end<br></br>
                        technical skills to maximize  the  return on your IBM  Cúram SPM<br></br>
                          investment.
                        </Typography>
                      
                    </Typography>
                  
                        </Grid>
                    </Grid>
                    </Box>
                            


        





        
        </>
    );
};

export default Navbar1;
