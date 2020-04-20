import React from 'react';
import logo from '../assets/imgs/logo.png'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


const NavBar = () =>{
    return(
        
        <div>
            <AppBar position="static">
                <ToolBar><img src={logo} alt="logo"  height="40"/>

                    <Typography variant="title" color="inherit">
                     Getherfy
                    </Typography>

                </ToolBar>    
            </AppBar>
        </div>
    )
}
export default NavBar