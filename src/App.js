import React from 'react';
import { Container } from '@material-ui/core';
import './App.css';
import SignIn from './components/SignIn/SignIn.js'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Container maxWidth='sm'>
          <SignIn></SignIn>
        </Container>
      </div>
    )
  }
}


