import React from 'react';
import { Grid, Container,} from '@material-ui/core';
import './App.css';
import SignIn from './components/SignIn/SignIn.js';
import AppBar from './components/AppBar/AppBar.js';
import TrainingSession from './components/TrainingSession/TrainingSession.js'

export default class App extends React.Component {
  render() {
    return (
        <div>
          <Grid item>
        <AppBar></AppBar>
          <TrainingSession></TrainingSession>
          </Grid>
        </div>
    
    )
  }
}


