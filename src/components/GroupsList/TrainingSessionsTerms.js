import React from 'react'
import {Card, CardActionArea, CardContent, Typography } from '@material-ui/core';
export default class TrainingSessionsTerms extends React.Component {
    continue = () => {
        this.props.nextStep();
    }
    render() {
        return (
                <React.Fragment>
                    <Card>
                        <CardActionArea onClick={this.continue}>
                            {this.props.termInfo.map(el=>(
                                <CardContent key={el.id} >
                                    <Typography style={{ float: "left" }} color="textPrimary" gutterBottom> {el.term}
                                    </Typography>
                                    <br></br>
                                    <Typography style={{ float: "left" }} variant='caption'> {el.group}
                                    </Typography>
                                    <Typography style={{ float: "right" }} color="textPrimary">
                                        {el.coach}
                                    </Typography>
                                </CardContent>
                            ))}
                        </CardActionArea>
                    </Card>
                </React.Fragment>
        )
    }
}


