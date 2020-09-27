import React from 'react';
import TraningSession from './TrainingSession';

// Materials for tab bar component

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class TrainingSessionsList extends React.Component {
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

                <TraningSession classes={this.props.classes} />
            </div>
        )
    }
}

export default TrainingSessionsList;