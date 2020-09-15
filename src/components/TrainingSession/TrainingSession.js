import React from 'react';
import {Paper,Tabs,Tab,} from '@material-ui/core';
import SortedGroups from './SortedGroups.js'

export default function DisabledTabs() {
    const [value, setValue] = React.useState(3);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
        <Paper square>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Tab label="Yesterday" />
                <Tab label="Today" />
                <Tab label="Costom" />
            </Tabs>
        </Paper>
        <SortedGroups></SortedGroups>
        </div>
    );
}


