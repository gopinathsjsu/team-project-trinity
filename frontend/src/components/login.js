 import React from "react";
 import { Avatar, Button, Grid,Link,Paper, TextField, Typography, Link} from "@material-ui/core";
 import LockIcon from '@mui/icons-material/Lock';

 const login =()=>{

     const paperStyle ={padding:20,height:'70vh',width:280,margin:"20px auto"}
     const avatarStyle ={baackgroundColor:"grey"}
     const btstyle ={margin: '8px 0'}

     return(
         <Grid>
             <paper elevation={10} style ={paperStyle}>
                 <Grid align = "center">
                 <Avatar style={avatarStyle}><LockIcon/></Avatar>
                 <h2>Sign In</h2>
                 </Grid>
                 <TextField label='Email' placeholder='Enter Email Address' fullWidth required />
                 <TextField label='Password' placeholder='Enter Password' type='password' fullWidth required />
                 <Button type='submit' color='primary' variant="contained" style ={btnstyle} fullWidth>Sign in </Button>
                 <Typography>
                      <Link href="#" >
                        Create account?
                      </Link>
                     </Typography>
             </paper>
        </Grid>
        
    )
}

 export default login;