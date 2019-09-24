import React from 'react';


function Top20Display(props) {
  console.log(props);
  return (
    <div>
      <button className="jayne-buttons">{props.info.activity}</button>
    </div>
  )
}

export default Top20Display;