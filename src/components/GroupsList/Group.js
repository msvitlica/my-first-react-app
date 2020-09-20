import React from 'react'
import { Typography, CardContent, Switch,Card,TextField} from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Header from './Header/Header.js';
export default class Group extends React.Component {
    render() {
        const { values } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Header/>
                    <Card style={{ width: 700 }}>
                    <CardContent >
                        <Typography color="textPrimary" variant='h6'>
                            {values.term1} </Typography>
                            <Typography color="textPrimary" variant='h6'>
                            {values.group1} </Typography>
                    </CardContent>
                    </Card>
                    <TextField style={{ float: "right",width: 400}} id="outlined-basic"
                    label="Clanovi" variant="outlined" />
                    <CardContent style={{ float: "left" }} >
                        <Typography color="primary" gutterBottom> {values.group1}</Typography>
                        <Typography> {values.member1}{<Switch/>}</Typography>
                        <Typography> {values.member2}{<Switch />}</Typography>
                        <Typography> {values.member3}{<Switch />}</Typography>
                    </CardContent>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}



