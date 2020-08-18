import React from 'react';
import Person from './Person'

class PersonsList extends React.Component {
    render() {
        return this.props.persons.map(person => (
            <Person key={person.id} person={person} />
        ))
    }
}

export default PersonsList;