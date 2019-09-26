import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Top20List(props) {

  const [initialState, setInitialState] = useState(props.data);
  const [top10, setTop10] = useState([]);

  const addTop10 = event => {

    const newEntry = event.target.value;
    
    const selected = initialState.filter((info) => {
      return newEntry === info.value
    })
    // console.log(selected);
    const newList = top10.concat(selected);
    setTop10(newList);
  }

  const resetItems = (event) => {
    event.preventDefault()
    setTop10([])
};

  top10.forEach(data => {
    data.user_id = localStorage.getItem("user_id")
    data.priority = null}
  )
  console.log(top10);

  return (
    <div className="return-div">
      <h1>Essentialism</h1>
      <h2>Which activities are important to you?</h2>
      <h3>Select your Top Ten</h3>
      <div className="jayne-display">
        {
          initialState.map((info) => (
            <div key={info.value}>
              <button className="jayne-buttons" key={info.value} value={info.value} onClick={addTop10}>{info.value}</button>
            </div>
          ))
        }
      </div>
      <h4>You selected: </h4>
      <div className="jayne-selections">
        {
          top10.length > 0
          ? top10.map((info) => (
            <div className="jayne-top10div" key={info.value}>{info.value}</div>
          ))
          : 'No activites selected'
        }
      </div>
      <div className="jayne-selections">
        {
          top10.length >= 10
          ? <p>You've reached your maximum</p>
          : <p>Pick up to 10 buttons</p>
        }
      </div >
      <div className="jayne-buttons" onClick={resetItems}>Reset Choices</div>
      <div className="jayne-next-div">
        <Link to="/listoften" className="jayne-buttons">Next</Link>
      </div>
      
    </div>
  )
}

export default Top20List;