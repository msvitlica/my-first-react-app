import React from 'react';
import  './Table.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

class PersonsTable extends React.Component {
    render() {
        return (
            <div>
                <TableContainer component={Paper}>
                   <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Ime</TableCell>
                                <TableCell align="left">Prezime</TableCell>
                                <TableCell align="left">Datum Rođenja</TableCell>
                                <TableCell align="left">Pol</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.persons.map(person => (
                                <TableRow key={person.id}>
                                    <TableCell>{person.name}</TableCell>
                                    <TableCell>{person.lastName}</TableCell>
                                    <TableCell>{person.birthday}</TableCell>
                                    <TableCell>{person.gender}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                   </Table>
                </TableContainer>
            </div>
        )
    }
}

export default PersonsTable;