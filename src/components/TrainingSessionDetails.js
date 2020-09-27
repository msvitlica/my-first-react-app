import React from 'react';
import { useParams } from 'react-router';
import Grid from '@material-ui/core/Grid';

function TrainingSessionDetails({ classes }) {
    const { id } = useParams();
    const term = classes.filter(term => term.group === id)[0];
    return (
        <div>
            {term.group}
        </div>
    )
}

export default TrainingSessionDetails;