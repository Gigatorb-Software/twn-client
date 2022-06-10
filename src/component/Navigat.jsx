import React from 'react'
import {Box, Typography,Button} from '@mui/material'
import { fontWeight } from '@mui/system'

const Navigat = () => {
    const person = {
        color:'dark',
        backgroundColor:'#ffffff',
        borderRadius: 8,
        height: 40,
        width:210,
      }
      const colorText={
          color:'#1DC7FF',
          fontWeight:700,
          fontSize:20,
      }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-#ffffff">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="/4.png" width={200} height={50}/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link " href="#" style={colorText}>Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link ms-5" style={colorText} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                              
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ms-5" style={colorText} href="#" tabindex="-1" aria-disabled="true">Technology</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ms-5" style={colorText} href="#" tabindex="-1" aria-disabled="true">Contact Us</a>
                            </li>
                        </ul>
                       
                    </div>
                </div>
            </nav>
            <div className='container'>
                <Box
                 component="div"
                 sx={{
                     ml:-14,
                     height: 600,
                     width: 1350,
                     backgroundImage: "url('/11.jpg')",
                     backgroundRepeat:"no-repeat",
                     backgroundSize:"100%",
                     
                 }}
               ><br></br><br></br><br></br><br></br><br></br>
               <div className='d-flex h-30'>
                   <div className='m-auto fontSize-30'>
                       <p className='text-center fs-1'>
                       IBM Cúram Social Program <br></br>
                    Management Implementation<br></br>
                    services.
                       </p><br></br><br></br>
                           
                  
                   <p className='text-center fs-4'>
                   Gigatorb Software offers IBM Cúram SPM complete technical implementation services. <br></br>
                 Rely on us to provide the end-to-end technical skills to maximize the return on your <br></br>
                 IBM Cúram SPM investment.
                   </p>

                   </div>
                   

               </div>
                 
              
           
                 <Button sx={{ml:75 , mt:7,color:"#000000", fontWeight:700}} type="submit" variant="contained" style={person}>find out more</Button> 

                 </Box>

                
            </div>





        </div>
    )
}

export default Navigat