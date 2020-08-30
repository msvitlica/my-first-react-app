import React from 'react'
import { TextField } from '@material-ui/core';

export default class Input extends React.Component {
    render() {
        return (
            <div>
                <TextField label="First Name"
                    variant="outlined" value={this.props.value1}
                    onChange={this.props.changed1}
                />
                <br></br>
                <br></br>
                <TextField label="Last Name"
                    variant="outlined"
                    value={this.props.value2}
                    onChange={this.props.changed2} />
            </div>
        )
    }
}




