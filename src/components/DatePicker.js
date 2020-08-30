import React from 'react';
import TextField from '@material-ui/core/TextField';

export default class DatePickers extends React.Component {

  render(){
  return (
    <form >
      <TextField
        label="Birthday"
        type="date"
        selected={this.props.startingDate}
        value={this.props.date}
        onChange={this.props.changed}
       InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
  }
}