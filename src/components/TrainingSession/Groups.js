import React, { Component } from 'react';
import { Typography, Button, Card, CardActions, CardContent } from '@material-ui/core';
import './Groups.css';
export default class SortedGroups extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>
                            13-17h
                        </Typography>
                        <Typography className='coachName' color="textPrimary" >Coach: Sinisa Kovacevic</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Group1</Button>
                        <Button size="small">Group2</Button>
                    </CardActions>
                </Card>
                <Card>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>
                            20-21h
          </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Group4</Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}



