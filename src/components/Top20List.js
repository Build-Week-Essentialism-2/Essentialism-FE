import React, {useState} from 'react';



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
  top10.forEach(data => {
    data.user_id = localStorage.getItem("user_id")
    data.priority = null
    console.log(data);}
  )
  console.log(top10);

  return (
    <div>
      <h1>Essentialism</h1>
      <h2>Which activities are important to you?</h2>
      <h3>Select your Top Ten</h3>
      <div className="jayne-display">
        {
          initialState.map((info) => (
            <div>
              <button className="jayne-buttons" key={info.value} value={info.value} priority={info.priority} user_id={info.user_id} onClick={addTop10}>{info.value}</button>
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
    </div>
  )
}

export default Top20List;