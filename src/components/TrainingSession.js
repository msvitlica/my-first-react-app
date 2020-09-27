import React from 'react';

// Materials for training sessions card component

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

class TraningSessions extends React.Component {
    render() {
        return (
            <div>
                {this.props.classes.map((hour, index) => (
                    <Link key={index} className="trainingSessionsCard" to={`/${hour.group}`}>
                        <Card variant="outlined">
                            <CardActions>
                                <Button className="card">
                                    <CardContent>
                                        <Typography variant="h3">{hour.hours}</Typography>
                                        <Typography>{hour.group}</Typography>
                                        <Typography variant="h5">Trener: {hour.coach}</Typography>
                                    </CardContent>
                                </Button>
                            </CardActions>
                        </Card>
                    </Link>
                ))}
            </div>
        );
    }
}

export default TraningSessions;