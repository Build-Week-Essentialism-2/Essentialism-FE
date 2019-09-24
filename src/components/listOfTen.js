import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from 'formik';
import ActivityButton from './ActivityComponent';

const ListOfTen = (props) => {
    const [topThree, setTopThree] = useState([])
    const tempButtonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const buttonClicked = (event) => {
        event.preventDefault();
        console.log('button is clicked');
        topThree.push(event.target.value)
        console.log(topThree)
    }
    return (
        <div className='top-ten-container'>
            <h1>Top Ten List</h1>
            <p>Please select your three highest priorities from this list</p>
            <div className="button-container">
                {tempButtonArray.map( item =>
                    <button onClick={buttonClicked} value={item}>{item}</button>
                    
                )}
             </div>
             
        </div>
        
    )    
};

export default ListOfTen;