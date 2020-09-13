import React from 'react';
import uuid from 'react-uuid';
import { Container } from '@material-ui/core';
import Input from './components/Input.js';
import InfoTable from './components/Table.js';
import Header from './components/Header.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    }
  }
  saveButton = (inputInfo) => {
    inputInfo.id = uuid();
    const list = [...this.state.list];
    list.push(inputInfo);
    this.setState({
      list
    })
    console.log(list);
  }

  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <br></br>
        <Container maxWidth="sm">
          <Input
            saveBtn={(this.saveButton)} />
          <br></br>
          <br></br>
          <InfoTable
            list={this.state.list}>
          </InfoTable>
        </Container>
      </React.Fragment>
    )
  }
}


