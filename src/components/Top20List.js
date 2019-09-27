import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Motion, spring } from 'react-motion';
import styled from 'styled-components';

// CODE FOR REACT-MOTION AND STYLED COMPONENTS//
const AnimatedCard = props => {
  return (
    <Motion
      defaultStyle={{ scale: .5 }}
      style={{ scale: spring(1, { stiffness: 40, damping: 10 }) }}
    >
      {interpolatedStyle => <Card scale={interpolatedStyle.scale} {...props} />}
    </Motion>
  );
};
const CardWrapper = styled.h1`
  /* background: lightblue; */
  max-width: 500px;
  margin: 2rem auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transform: ${props => `scale(${props.scale})`};
`;
class Card extends React.Component {
  render() {
    const { scale } = this.props;
    return (
      <CardWrapper scale={scale}>
        <h1>Essentialism</h1>
      </CardWrapper>
    );
  }
}
/////////END OF REACT MOTION CODE//////////

function Top20List(props) {

  const [initialState, setInitialState] = useState(props.data);
  const [top10, setTop10] = useState([]);

  const addTop10 = event => {
    if (top10.length >= 10){
      alert('You may only select ten')
    } else {
    const newEntry = event.target.value;
    
    const selected = initialState.filter((info) => {
      return newEntry === info.value
    })
  
    // console.log(selected);
    const newList = top10.concat(selected);
    setTop10(newList);
  }
  }

  const resetItems = (event) => {
    event.preventDefault()
    top10.forEach(item => {
      item.priority = false
    })
    setTop10([])
};

  top10.forEach(data => {
    data.user_id = localStorage.getItem("user_id")
    data.priority = null}
  )
  console.log(top10);

  return (
    <div className="return-div">
      <AnimatedCard/>
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
      <div className="jayne-reset" onClick={resetItems}>Reset Choices</div>
      <div className="jayne-next-div">
        <Link to="/listoften" className="jayne-next">Next</Link>
      </div>
      
    </div>
  )
}

export default Top20List;