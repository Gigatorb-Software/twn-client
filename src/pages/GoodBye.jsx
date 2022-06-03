import Login from "../components/Login";
import {Grid, Card, Typography} from '@mui/material';
const GoodBye = () => {
  return (
    <>
   
   <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' ,paddingTop:"18%" }}
 >

  <Grid item xs={3}>
    <Card style={{  backgroundColor:"black",color:"white" }}>
      <Typography p={2}>You have been logged out!</Typography>
    </Card>
  </Grid>      
 </Grid>
    
    </>
  )
};

export default GoodBye;
