import React from 'react';

class Person extends React.Component {
    render() {
        return (
            <li>{this.props.person.name + ' ' + this.props.person.lastName}</li>
        )
    }
}

export default Person;