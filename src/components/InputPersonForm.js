import React from 'react';
import './InputPersonForm.css';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroupe from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const date = new Date();
const year = date.getFullYear();
const monthWithOffset = date.getMonth() + 1;
const month = monthWithOffset.toString().length < 2 ? `0${monthWithOffset}` : monthWithOffset;
const day = date.getUTCDate().toString().length < 2 ? `0${date.getUTCDate()}` : date.getUTCDate();

const today = `${year}-${month}-${day}`;

class InputPersonForm extends React.Component {
    state = {
        name: '',
        lastName: '',
        gender: null,
        birthday: today
    }
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onAddPerson = () => {
        this.props.addPerson(this.state);
        this.setState({
            name: '',
            lastName: '',
            gender: null,
            birthday: today
        });
    }

    render() {
        return (
            <form>
                <FormControl component="div">
                    <FormLabel component="legend">Lični Podaci: </FormLabel>
                    <TextField onChange={this.onInputChange} name="name" id="name" label="Ime" value={this.state.name} />
                    <TextField onChange={this.onInputChange} name="lastName" id="lastName" label="Prezime" value={this.state.lastName} />
                </FormControl>

                <FormControl className="marginTop" component="fieldset">
                    <FormLabel component="legend">Pol: </FormLabel>
                    <RadioGroupe aria-label="gender" name="gender" value={this.state.gender}>
                        <FormControlLabel onChange={this.onInputChange} value="Muško" label="Muško" control={<Radio />} />
                        <FormControlLabel onChange={this.onInputChange} value="Žensko" label="Žensko" control={<Radio />} />
                    </RadioGroupe>
                </FormControl>
                <FormLabel className="marginTop">Datum Rođenja:</FormLabel>
                <TextField onChange={this.onInputChange} id="date"
                    name="birthday"
                    type="date"
                    defaultValue={this.state.birthday}
                />
                <Button className="marginTop" onClick={this.onAddPerson} variant="contained" color="primary">Dodaj</Button>
            </form>
        )
    }
}

export default InputPersonForm;