import React from 'react';
import { Button } from '@material-ui/core';

export default class SaveButton extends React.Component {
    render() {
        return (
            <div>
                <Button size="medium" variant='contained' color="primary"
                    onClick={this.props.clicked}
                > Save
              </Button>
            </div>
        )
    }
}



