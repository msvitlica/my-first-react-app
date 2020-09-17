import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import Header from './Header/Header.js';
import Groups from './Groups.js';
export default class GroupsList extends React.Component {
    state = {
        value: 2
    }
    render() {
        return (
            <div>
                <Header />
                <Paper variant="outlined">
                    <Tabs
                        value={this.state.value}
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


