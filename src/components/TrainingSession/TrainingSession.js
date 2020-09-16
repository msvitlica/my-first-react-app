import React from 'react';
import { Paper, Tabs, Tab, } from '@material-ui/core';
import Groups from './Groups.js';
export default class TrainingSession extends React.Component {
    render() {
        return (
            <div>
                <Paper variant="outlined">
                    <Tabs
                        indicatorColor="primary"
                        textColor="primary" >
                        <Tab label="Yesterday" />
                        <Tab label="Today" />
                        <Tab label="Costom" />
                    </Tabs>
                </Paper>
                <Groups></Groups>
            </div>
        );
    }
}


