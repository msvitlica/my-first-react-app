import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import './SignIn.css'

export default class SignIn extends React.Component {
    continue = e=>{
        this.props.nextStep();
    }
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                <Typography className='signInHeader' variant="h3" >
                    Your Klub</Typography>
                <div className='signInButtons'>
                    <Button onClick={this.continue} variant="outlined" color="secondary">
                        Sign in with Google </Button>
                    <br></br>
                    <br></br>
                    <Button onClick={this.continue}  variant="outlined" color="primary">Sign in with Facebook</Button>
                </div>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

