import React from 'react';
import { Grid } from '@material-ui/core';
import './App.css';
import SignIn from './components/SignIn/SignIn.js';
import GroupsList from './components/GroupsList/GroupsList.js'

export default class App extends React.Component {
  render() {
    return (
      <Grid item>
        <SignIn></SignIn>
      </Grid>
    )
  }
}


