import React from "react";
import { Toolbar, IconButton, Divider, Link, Typography } from "@mui/material";

const Navbar = () => {
    const styleColor = {
        backgroundColor: "#1DC7FF",
    }

    const navButton = {
        Color:"#FFFFFF",
        
        
    }

    return (
        <>
            <Toolbar style={styleColor}>
                <IconButton >
                    <Typography sx={{color:"#ffffff",fontWeight:800, fontFamily:"monospace"}} variant="h6" marginLeft={2} style={navButton}>
                    GigaTorb

                    </Typography>
                    <Typography sx={{color:"#ffffff",fontWeight:800,fontFamily:"monospace"}} variant="h6" marginLeft={50}  style={navButton}> 
                    <Link href="#" sx={{
                       color:"#ffffff",fontWeight:800, fontFamily:"monospace",
                    "&:hover": { color: "#000000" }
                    }}>Home
                    </Link> 
                    </Typography>
                    <Typography sx={{color:"#ffffff",fontWeight:800,fontFamily:"monospace"}} variant="h6" marginLeft={8}  style={navButton}> 
                    <Link href="#" sx={{
                       color:"#ffffff",fontWeight:800, fontFamily:"monospace",
                    "&:hover": { color: "#000000" }
                    }}>Services
                    </Link> 
                    </Typography>
                    <Typography sx={{color:"#ffffff",fontWeight:800,fontFamily:"monospace"}} variant="h6" marginLeft={8} >
                    <Link href="#" sx={{
                       color:"#ffffff",fontWeight:800, fontFamily:"monospace",
                    "&:hover": { color: "#000000" }
                    }}>Technology
                    </Link> 
                    </Typography>
                    <Typography sx={{color:"#ffffff",fontWeight:800,fontFamily:"monospace"}} variant="h6" marginLeft={8} >
                    <Link href="#" sx={{
                       color:"#ffffff",fontWeight:800, fontFamily:"monospace",
                    "&:hover": { color: "#000000" }
                    }}>Contact Us
                    </Link> 
                    </Typography>

                    

                    
                   

                </IconButton>
            </Toolbar>
            <Divider sx={{ml:0, mr:0}}/>
        </>
    );
};

export default Navbar;
