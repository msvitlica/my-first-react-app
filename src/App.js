import React from 'react';
import './components/yourClub.css';
import AppBar from './components/AppBar';
import TraningSessions from './components/TrainingSession';

class App extends React.Component {
  state = {
    classes: [
      {
        group: 'Grupa 2',
        hours: '13 - 15 h',
        coach: 'Siniša Kovačević'
      },
      {
        group: 'Grupa 1',
        hours: '11 - 13 h',
        coach: 'Siniša Kovačević'
      },
      {
        group: 'Grupa 3',
        hours: '20 - 22 h',
        coach: 'Siniša Kovačević'
      }
    ]
  }
  render() {
    return (
      <div>
        <AppBar />
        <TraningSessions classes={this.state.classes}/>
      </div>
    );
  }
}

export default App;
