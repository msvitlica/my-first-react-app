import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import PersonsList from './components/PersonsList';
import AddPersonForm from './components/AddPersonForm';

class App extends React.Component {
  state = {
    persons: []
  }

  addPerson = (personObj) => {
    personObj.id = uuidv4();
    this.setState({ persons: [...this.state.persons, personObj] });
  }

  render() {
    return (
      <div>
        <AddPersonForm addPerson={this.addPerson} />
        <Header />
        <PersonsList persons={this.state.persons} />
      </div>
    );
  }
}

export default App;
