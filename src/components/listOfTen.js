import React, {useState} from 'react';
import { withFormik, Form, Field } from 'formik';
import ActivityButton from './ActivityComponent';

const ListOfTen = ({ values }) => {
    const [topTen, setTopTen] = useState([]);
    const tempButtonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className='top-ten-container'>
            <h1>Top Ten List</h1>
            <p>Please select your three highest priorities from this list</p>
            <div className="button-container">
                {tempButtonArray.map( item =>
                    
                    <ActivityButton name={item}/>
                )}
             </div>
        </div>
    )    
};

export default ListOfTen;