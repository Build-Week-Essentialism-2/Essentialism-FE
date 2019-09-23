import React from 'react';
import { Button } from 'reactstrap';

export default class ActivityButton extends React.Component {
  render(props) {
    return (
      <div>
        <Button className="button">{props.name}</Button>{' '}
                
      </div>
    );
  }
}