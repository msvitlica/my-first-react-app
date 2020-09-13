import React from 'react'
import { TextField } from '@material-ui/core';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button } from '@material-ui/core';
import DatePickers from './DatePicker.js'

const date = new Date();
const year = date.getFullYear();
const monthWithOffset = date.getMonth() + 1;
const month = monthWithOffset.toString().length < 2 ? `0${monthWithOffset}` : monthWithOffset;
const day = date.getUTCDate().toString().length < 2 ? `0${date.getUTCDate()}` : date.getUTCDate();

const today = `${year}-${month}-${day}`;

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            birthDate: today,
            gender: '',
        }
    }
    updateInput(key, value) {
        this.setState({
            [key]: value
        });
    }
    saveBtn = () => {
        this.props.saveBtn(this.state);
        this.setState({
            firstName: '',
            lastName: '',
            birthDate: today,
            gender: '',
        })
    }
    render() {
        return (
            <div>
                <TextField label="First Name"
                    variant="outlined" value={this.state.firstName}
                    onChange={el => this.updateInput('firstName', el.target.value)}
                />
                <br></br>
                <br></br>
                <TextField label="Last Name"
                    variant="outlined"
                    value={this.state.lastName}
                    onChange={el => this.updateInput('lastName', el.target.value)} />
                <div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={this.state.gender}
                            onChange={el => this.updateInput('gender', el.target.value)}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <DatePickers
                        date={this.state.birthDate}
                        changed={el => this.updateInput('birthDate', el.target.value)}
                    ></DatePickers>
                    <br></br>
                    <Button size="medium" variant='contained' color="primary"
                        onClick={this.saveBtn}
                    > Save
              </Button>
                </div>
            </div>
        )
    }
}




