import React from 'react';
import Top20Display from './Top20Display';
import { top20ActivitiesData } from './Top20ActivitiesData';

// const initialTop10 = {
//   id: '',
//   activity: '',
// }

function Top20List() {

  // const [top10, setTop10] = useState(initialTop10);


  return (
    <div>
      <h1>Essentialism</h1>
      <h2>Which activities are important to you?</h2>
      <h3>Select your Top Ten</h3>
      <div className="jayne-display">
        {
          top20ActivitiesData.map((info) => (
            <div>
              <Top20Display key={info.id} info={info}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Top20List;