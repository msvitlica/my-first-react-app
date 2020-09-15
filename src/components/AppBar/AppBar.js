import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography,Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function Header(){
  const classes= useStyles(); 
        return (
          <div className={classes.root}>
            <AppBar position="static">
            <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              </IconButton>
              <Typography variant="h6" className={classes.title} >
                User Info
              </Typography>
              <Button color="inherit">Login</Button>
              <AccountCircleIcon></AccountCircleIcon>
            </Toolbar>
          </AppBar>
          </div>
        )
}