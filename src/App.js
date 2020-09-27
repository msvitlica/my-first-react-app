import React from 'react';
import './components/yourClub.css';
import AppBar from './components/AppBar';
import TraningSessionsList from './components/TrainingSessionsList';
import TrainingSessionInfo from './components/TrainingSessionInfo';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

class App extends React.Component {
  state = {
    classes: [
      {
        group: 'Grupa 2',
        hours: '13 - 15 h',
        coach: 'Siniša Kovačević',
        members: ['Srećko Lazić', 'Nada Janković', 'Milan Svitlica']
      },
      {
        group: 'Grupa 1',
        hours: '11 - 13 h',
        coach: 'Siniša Kovačević',
        members: ['Sofija Lazić', 'Ljubica Lazić', 'Milan Svitlica']
      },
      {
        group: 'Grupa 3',
        hours: '20 - 22 h',
        coach: 'Siniša Kovačević',
        members: ['Gordan Lazić', 'Snježana Lazić', 'Milan Svitlica']
      }
    ]
  }
  render() {
    return (
      <div>
        <Router>
          <AppBar />
          <Switch>
            <Route exact path="/" children={<TraningSessionsList classes={this.state.classes} />} />
            <Route path="/:id" children={<TrainingSessionInfo classes={this.state.classes} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
