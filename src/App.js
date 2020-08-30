import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputPersonForm from './components/InputPersonForm';
import Table from './components/Table';

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
        <InputPersonForm addPerson={this.addPerson}/>
        <Table persons={this.state.persons}/>
      </div>
    );
  }
}

export default App;
