import React from 'react';
import {Button} from 'reactstrap';


function Top20Display(props) {
  console.log(props);
  return (
    <div>
      <Button className="jayne-buttons">{props.info.activity}</Button>
    </div>
  )
}

export default Top20Display;