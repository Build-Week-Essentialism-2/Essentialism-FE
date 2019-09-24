import React, {useState} from 'react';
import { top20ActivitiesData } from './top20ActivitiesData';



function Top20List() {

  const [top10, setTop10] = useState([]);

  const addTop10 = event => {
    // event.preventDefault();
    const newEntry = event.target.value;
    // console.log(newEntry);
    const newList = top10.concat(newEntry);
    setTop10(newList);
    // top10.push(newEntry);
    console.log(top10);
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
      <div className="jayne-selections">
        {
          top10.length > 0
          ? top10.map((info) => (
            <div className="jayne-top10div" key={info}>{info}</div>
          ))
          : 'No activites selected'
        }
      </div>
    </div>
  )
}

export default Top20List;