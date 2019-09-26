import React from 'react';
import { Button } from 'reactstrap';

class ActivityButton extends React.Component {
  render() {
    return (
      <div>
        <Button className="value-button">{this.props.name}</Button>
                
      </div>
    );
  }
}

export default ActivityButton