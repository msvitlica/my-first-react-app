import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography,IconButton,Button,Avatar} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight:theme.spacing(2)
  },
  title:{
    flexGrow:1,
  }
}));

export default function Header () {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6">
            Training session
          </Typography>
          <Button>
          <Avatar src="/broken-image.jpg" />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}