import React from 'react';
import TrainingSessionDetails from './TrainingSessionDetails';


class TrainingSessionInfo extends React.Component {
    render() {
        return (
            <div>
                <TrainingSessionDetails classes={this.props.classes} />
            </div>
        )
    }
}

export default TrainingSessionInfo;