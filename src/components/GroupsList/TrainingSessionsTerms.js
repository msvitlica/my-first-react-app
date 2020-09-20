import React from 'react'
import { Paper, Tabs, Tab, Card, CardActionArea, CardContent, Typography } from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Header from './Header/Header.js';
export default class TrainingSessionsTerms extends React.Component {
    continue = e => {
        this.props.nextStep();
    }
    render() {
        const { values } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Header
                    back={this.props.prevStep}
                    />
                    <Paper variant="outlined">
                        <Tabs
                            value={values.value}
                            indicatorColor="primary"
                            textColor="primary" >
                            <Tab label="Yesterday" />
                            <Tab label="Today" />
                            <Tab label="Costom" />
                        </Tabs>
                    </Paper>
                    <Card>
                        <CardActionArea onClick={this.continue}>
                            <CardContent >
                                <Typography style={{ float: "left" }} color="textPrimary" gutterBottom> {values.term1}
                                </Typography>
                                <br></br>
                                <Typography style={{ float: "left" }} variant='caption'> {values.group1}
                                </Typography>
                                <Typography style={{ float: "right" }} color="textPrimary">
                                    {values.coach}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActionArea>
                            <CardContent >
                                <Typography style={{ float: "left" }} color="textPrimary" gutterBottom> {values.term2}
                                </Typography>
                                <Typography style={{ float: "right" }} >
                                    {values.coach}
                                </Typography>
                            </CardContent>
                            <Typography style={{ float: "left" }} variant='caption'> {values.group2}</Typography>
                        </CardActionArea>
                    </Card>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


