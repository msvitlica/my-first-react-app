import React from 'react';
class PersonList extends React.Component {
    render() {
        return (
            <div>
                {this.props.personList.map(el =>
                    <li key={el.id}>{el.firstName} {el.lastName}</li>
                )}

            </div>
        )
    }
}
export default PersonList;