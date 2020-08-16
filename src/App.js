import React from 'react';
import uuid from 'react-uuid'
import PersonList from'./personList'
import './App.css'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      firstName:'',
      lastName:'',
      personList:[],
    
    }
  }
  updateInput(name,value){
    this.setState({
      [name]:value,
    });
  }
  addPreson(){
    const newPerson={
      id: uuid(),
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    }
   console.log(newPerson);
   const personList=[...this.state.personList];
   personList.push(newPerson);
   this.setState({
     firstName:'',
     lastName:'',
     personList,
   })
//console.log(personList);
  }
  render (){
    return(
    <div className="App">
     <PersonList personList={this.state.personList}></PersonList>
        <br></br>
        <label>First Name:  <input
        type='text'
        value= {this.state.firstName}
        onChange={el=>this.updateInput('firstName',el.target.value)}
        />
        </label>
        <br></br>
        <label>Last Name: <input
        type='text'
        value= {this.state.lastName}
        onChange={el=>this.updateInput('lastName',el.target.value)}
        />
        </label>
        <br></br>
        <br></br>
      <button
      onClick={()=>this.addPreson()}
      >
        Add</button> 
        </div>
    );
  }
  }
export default App