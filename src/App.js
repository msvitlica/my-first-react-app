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
  updateFname(lastName,value){
    this.setState({
      [lastName]:value,
    });
  }
  updateLname(lastName,value){
    this.setState({
 [lastName]:value,
    });
  }
 
  addPreson(){
    const newPerson={
      id: uuid(),
      firstName: this.state.firstName.slice(),
      lastName: this.state.lastName.slice(),
    }
   console.log(newPerson);
   const personList=[...this.state.personList];
   personList.push(newPerson);
   this.setState({
     firstName:'',
     lastName:'',
     personList,
   })
console.log(personList);
  }
  render (){
    return(
    <div className="App">
     <PersonList personList={this.state.personList}></PersonList>
        <br></br>
        <label>First Name:  <input
        type='text'
       //placeholder= 'First Name'
        value= {this.state.firstName}
        onChange={el=>this.updateFname('firstName',el.target.value)}
        />
        </label>
        <br></br>
        <label>Last Name: <input
        type='text'
        //placeholder= 'Last Name'
        value= {this.state.lastName}
        onChange={el=>this.updateFname('lastName',el.target.value)}
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