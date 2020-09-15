import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Card, CardActions, CardContent } from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 18,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SortedGroups() {
    const classes = useStyles();
    return (
        <div>
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                    13-17h
              </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Group1</Button>
                <Button size="small">Group2</Button>
            </CardActions>
        </Card>
        <Card className={classes.root}>
        <CardContent>
            <Typography className={classes.title} color="textPrimary" gutterBottom>
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



