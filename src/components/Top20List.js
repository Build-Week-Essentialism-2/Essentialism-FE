import React, {useState} from 'react';
import { top20ActivitiesData } from './Top20ActivitiesData';



function Top20List() {

  const [top10, setTop10] = useState([]);

  const addTop10 = event => {
    // event.preventDefault();
    const newEntry = event.target.value;
    top10.push(newEntry);
  }



  return (
    <div>
      <h1>Essentialism</h1>
      <h2>Which activities are important to you?</h2>
      <h3>Select your Top Ten</h3>
      <div className="jayne-display">
        {
          top20ActivitiesData.map((info) => (
            <div>
              <button className="jayne-buttons" key={info} value={info} onClick={addTop10}>{info}</button>
            </div>
          ))
        }
      </div>
      <h4>You selected: </h4>
      <div>
        {
          top10.length
          ? top10.map((info) => (
            <div key={info}>{info}</div>
          ))
          : 'No Activities selected!'
        }
      </div>
    </div>
  )
}

export default Top20List;