import React from 'react'
import { Table,TableContainer,Paper, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
export default class InfoTable extends React.Component {
  render() {
    return (
      <TableContainer component={Paper}>
         <Table aria-label="simple table">
        <TableHead>
       <TableRow>
         <TableCell>First Name</TableCell>
         <TableCell>Last Name</TableCell>
         <TableCell >Birth Date</TableCell>
         <TableCell >Gender</TableCell>
       </TableRow>
     </TableHead>
     <TableBody>
       {this.props.list.map((el) =>
         <TableRow key={el.id}>
           <TableCell >
             {el.firstName}
           </TableCell>
           <TableCell >{el.lastName}</TableCell>
           <TableCell >{el.birthDate}</TableCell>
           <TableCell >{el.gender}</TableCell>
         </TableRow>
       )}
     </TableBody>
     </Table>
   </TableContainer>
    )
  }
}
