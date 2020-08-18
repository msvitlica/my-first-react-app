import React from 'react';

class AddPersonForm extends React.Component {
    state = {
        name: '',
        lastName: ''
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
            lastName: ''
        });
    }
    render() {
        return (
            <div>
                <label>Ime: </label>
                <input onChange={this.onInputChange} type="text" name="name" id="firstName" value={this.state.name} />

                <label>Prezime: </label>
                <input onChange={this.onInputChange} type="text" name="lastName" id="lastName" value={this.state.lastName} />
                <button onClick={this.onAddPerson} id="addPersonBtn">Dodaj Osobu</button> 
                <hr />
            </div>
        )
    }
}

export default AddPersonForm;