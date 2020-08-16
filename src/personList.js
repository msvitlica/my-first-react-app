import React from 'react';
class PersonList extends React.Component {
    render() {
        return (
            <div>
                List of Persons:
                <br></br>
                <div>
                    {this.props.personList.map(el =>
                        <li key={el.id}>{el.firstName} {el.lastName}</li>
                    )}
                </div>
                </div>
        )
    }
}
export default PersonList;