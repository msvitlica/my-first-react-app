import React from 'react'
import { Typography, CardContent, FormGroup,FormControl,FormControlLabel,FormLabel,Card,TextField, Switch } from '@material-ui/core';
export default class Group extends React.Component {
    render() {
        return (
                <React.Fragment>
                    {this.props.membersInGroup.map(el => (
                        <Card key={el.id} >
                            <CardContent >
                                <Typography style={{ float: 'left' }} color="textPrimary" variant='h6'>
                                    {el.term} ( {el.group})</Typography>
                            </CardContent>
                            <TextField style={{ float: 'right' }} id="outlined-basic"
                                label="Search" variant="filled"/>
                        </Card>
                    ))}
                    {this.props.membersInGroup.map(el => (
                         <FormControl key={el.id} style={{ float:'left' }}  >
                         <FormLabel color='primary'>{el.group}</FormLabel>
                         <FormGroup>
                           <FormControlLabel
                            label={el.member1}
                            labelPlacement="start"
                            control={<Switch/>}
                           />
                            <FormControlLabel
                            label={el.member2}
                            labelPlacement="start"
                             control={<Switch />}
                           />
                            <FormControlLabel
                              label={el.member3}
                              labelPlacement="start"
                             control={<Switch/>}
                           />
                            </FormGroup>
                            </FormControl>
                            ))}

                </React.Fragment>
        )
    }
}
