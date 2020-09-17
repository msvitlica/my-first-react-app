import React from 'react';

// Materials for tab bar component

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// Materials for training sessions card component

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class TraningSessions extends React.Component {
    render() {
        return (
            <div>
                <Paper>
                    <Tabs indicatorColor="primary" textColor="primary">
                        <Tab label="YESTERDAY" />
                        <Tab label="TODAY" />
                        <Tab label="CUSTOM" />
                    </Tabs>
                </Paper>

                {this.props.classes.map(hour => (
                    <Card variant="outlined">
                        <CardActions>
                            <Button className="card">
                                <CardContent>
                                    <Typography variant="h3">{hour.hours}</Typography>
                                    <Typography>{hour.group}</Typography>
                                    <Typography variant="h5">Coach: {hour.coach}</Typography>
                                </CardContent>
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        );
    }
}

export default TraningSessions;