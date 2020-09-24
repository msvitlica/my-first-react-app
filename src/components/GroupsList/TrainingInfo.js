import React from 'react';
import uuid from 'react-uuid';
import SignIn from '../SignIn/SignIn.js';
import Header from './Header/Header.js';
import ScheduleBar from './ScheduleBar.js'
import TrainingSessionsTerms from './TrainingSessionsTerms.js';
import Group from './Group.js'
export default class TrainingInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            value:2,
            termInfo: [
                {
                    id: uuid(),
                    term: '13-17h',
                    coach: 'Sinisa Kovacevic',
                    group: 'Group 1 ',
                },
                {
                    id: uuid(),
                    coach: 'Sinisa Kovacevic',
                    term: '20-21h',
                    group: 'Group 4',
                }
            ],
           membersInGroup: [
                {
                    id: uuid(),
                    group:'Group 1',
                    term: '13-17h',
                    member1:'Milan Svitlica',
                    member2:'Srecko Lazic',
                    member3:'Nada Jankovic',
                }
            ]
        }
    }
    nextStep = () => {
        const {step}=this.state;
        this.setState({
            step: step + 1,
        })
        
    }
    prevStep = () => {
       const { step } = this.state;
        this.setState({
            step: step - 1 ,
        })
    }
    render() {
        const {step}=this.state; 
        const {value}= this.state;
        const tabValue= {value};
        //console.log(tabValue);
        switch (step) {
            default:
            case 1:
                return (
                    <SignIn
                        nextStep={this.nextStep}
                    />
                )
            case 2:
                return(
                    <div>
                    <Header/>
                    <ScheduleBar
                    tabValue={tabValue}
                    />
                    <TrainingSessionsTerms
                        nextStep={this.nextStep}
                        termInfo={this.state.termInfo}
                    />
                    </div>
                )
            case 3:
                return(
                <div>
                <Header/>
                    <Group
                    membersInGroup={this.state.membersInGroup}
                    termInfo={this.state.termInfo}
                    />
                    </div>
                )
        }
    }
}
