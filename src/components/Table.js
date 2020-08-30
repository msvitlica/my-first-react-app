import React from 'react'
import { TableContainer, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
export default class Table extends React.Component {
  render() {
    return (
      <TableContainer>
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
           <TableCell align="right">{el.lastName}</TableCell>
           <TableCell align="right">{el.birthDate}</TableCell>
           <TableCell align="right">{el.gender}</TableCell>
         </TableRow>
       )}
     </TableBody>
   </TableContainer>
    )
  }
}
