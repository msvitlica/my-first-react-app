import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';
import React, { Component } from 'react'

export default class Gender extends Component {
    render() {
        return (
            <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={this.props.gender}
                    onChange={this.props.changed}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
            </FormControl>
        )
    }
}

