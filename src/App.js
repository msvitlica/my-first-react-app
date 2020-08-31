import React from 'react';
import uuid from 'react-uuid';
import { Container} from '@material-ui/core';
import SaveButton from './components/SaveButton.js'
import Gender from './components/Gender.js';
import Input from './components/Input.js';
import Table from './components/Table.js';
import Header from './components/Header.js'
import DatePickers from './components/DatePicker.js'

export default class App extends React.Component {
    constructor(props){
        super(props);
       // var date = new Date();
       // var formatedDate = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`
        this.state={
            firstName:'',
            lastName:'',
            currDate: '',
            birthDate: '',
            gender:'',
            list:[],
        }
    }
    saveBtn(){
const newEntry={
    id:uuid(),
    firstName:this.state.firstName,
    lastName:this.state.lastName,
    birthDate:this.state.birthDate,
    gender:this.state.gender,  
   }
   const list=[...this.state.list];
   list.push(newEntry);
   this.setState({
    firstName:'',
    lastName:'',
    currDate:'',
    birthDate:'',
    gender:'', 
    list
   })
   console.log(list);
   console.log(this.state.currDate)
}
updateInput(key,value){
    this.setState({
        [key]:value
    });
  }
  handleChange(key,value){
    this.setState({
      [key]:value
    })
  }
  render() {
    return (
      <React.Fragment>
           <Header></Header>
           <br></br>
           <Container maxWidth="sm">
        <Input
        value1={this.state.firstName}
        changed1={el=>this.updateInput('firstName',el.target.value)}
        value2={this.state.lastName}
        changed2={el=>this.updateInput('lastName',el.target.value)} />
                <br></br>
                <br></br>
                <DatePickers
                //date={ this.state.birthDate}
                currDate={this.state.currDate}
                changed={el=>this.handleChange('birthDate',el.target.value)}
                ></DatePickers>
                <br></br>
                <br></br>
              <Gender 
              gender={this.state.gender}
              changed={el=>this.handleChange('gender',el.target.value)}>
              </Gender>
                <br></br>
                <br></br>
                <SaveButton clicked={()=>this.saveBtn()}/>
                <Table
                list={this.state.list}>
                </Table>
                </Container>
           </React.Fragment>
        )
    }
}

