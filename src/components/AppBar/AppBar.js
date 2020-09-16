import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

export default class Header extends React.Component{
  render() {
        return (
          <div>
            <AppBar>
            <Toolbar>
            <IconButton  edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
              </IconButton>
              <Typography variant="h6" >
                Training Session
              </Typography>
              <IconButton  className='login'color="inherit" aria-label="login">
              <AccountCircleIcon/>
              </IconButton>
            </Toolbar>
          </AppBar>
          </div>
        )
  }
}
