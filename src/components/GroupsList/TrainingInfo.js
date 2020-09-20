import React from 'react';
import SignIn from '../SignIn/SignIn.js';
import TrainingSessionsTerms from './TrainingSessionsTerms.js';
import Group from './Group.js'
export default class TrainingInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            value:2,
            term1: '13-17h',
            term2: '20-21h',
            coach: 'Sinisa Kovacevic',
            group1: 'Group1 ',
            group2: 'Group 4',
            member1: 'Milan Svitlica',
            member2: 'Srecko Lazic',
            member3: 'Nada Jankovic'
        }
    }
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1,
        })
    }
    prevStep = () => {
       // const { step } = this.state;
        this.setState({
            step: 1 ,
        })
    }
    render() {
        const { step } = this.state;
        const { id,value, term1, term2, coach, group1, group2, member1, member2, member3 } = this.state;
        const values = { id,value, term1, term2, coach, group1, group2, member1, member2, member3 };
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
                    <TrainingSessionsTerms
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Group
                    prevStep={this.prevStep}
                    values={values}
                    />
                )    
        }
    }
}


