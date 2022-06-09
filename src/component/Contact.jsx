import React from 'react'
import { IconButton, Toolbar, Typography ,Link,Box,Grid} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

const Contact = () => {
    const resize ={
        height: 40,
        width:210,
    }
  return (
    <div>
        <div className='container'>
        <Typography sx={{ml:55,mt:15,fontSize:50, color:'#000000',fontWeight:700}}>
        Contact Us<br></br>

        </Typography>
        <Typography  sx={{ml:30,mt:5,fontSize:20, color:'#1DC7FF',fontWeight:300}}>
            Ready to start your next project with us? Give us a call or send us an email and 
        <Typography sx={{ml:20,fontSize:20, color:'#1DC7FF',fontWeight:300}}>
        we will get back to you as soon as possible!
            </Typography>   
        </Typography>
        <Typography sx={{mt:4}}>
            <PhoneEnabledIcon style={resize} sx={{ml:42}}/>< EmailIcon sx={{ml:10}} style={resize}/>
        </Typography>
        <Box sx={{ flexGrow: 1,ml:45}}>
                <Grid container spacing={2}>
                    <Grid item xs={4} sx={{fontSize:25}}>
                    +91-9893339788
                    </Grid>
                    <Grid item xs={4}>
                    <Link href="#" sx={{
                       color:'#000000',fontWeight:800, fontFamily:'monospace',fontSize:25,
                    "&:hover": { color: '#1DC7FF' }
                    }}>info@gigatorb.com
                    </Link>  
                
                    </Grid>
                   
                </Grid>
                </Box>
         
      
          <Typography  sx={{mx:'auto',mt:20,fontSize:15, color:'#000000',fontWeight:300,backgroundColor:'#1DC7FF'}}>
             <Typography sx={{ml:50,fontWeight:800}}>
             ©Copyright GigaTorb Software 2021
             </Typography>
            
          </Typography>

        </div>




    </div>
  )
}

export default Contact