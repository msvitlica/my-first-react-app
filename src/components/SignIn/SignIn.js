import React from 'react';
import { Typography, Button } from '@material-ui/core';
import './SignIn.css'

export default class SignIn extends React.Component {
    render() {
        return (
            <div>
                <Typography className='signInHeader' variant="h3" >
                    Your Klub</Typography>
                <div className='signInButtons'>
                    <Button variant="outlined" color="secondary">
                        Sign in with Google </Button>
                    <br></br>
                    <br></br>
                    <Button variant="outlined" color="primary">Sign in with Facebook</Button>
                </div>
            </div>
        )
    }
}

