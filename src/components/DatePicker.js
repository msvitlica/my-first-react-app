import React from 'react';
import {TextField}from '@material-ui/core'

export default class DatePickers extends React.Component {
  render(){
  return (
    <form >
        <TextField
      label="Birthday"
      type="date"
      value={this.props.date}
      onChange={this.props.changed}
      InputLabelProps={{
        shrink: true,
      }}
      >
      </TextField>
    </form>
  );
  }
}