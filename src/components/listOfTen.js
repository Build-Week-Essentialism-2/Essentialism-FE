import React, {useState} from 'react';
import { withFormik } from 'formik';
import { Button } from 'reactstrap';

const ListOfTen = () => {
    const [topTen, setTopTen] = useState([]);
    const tempButtonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className='top-ten-container'>
            <h1>Top Ten Choices</h1>
            <p>Please select your top three from this list.</p>
            {tempButtonArray.map( item =>
                <Button color="primary">{item}</Button>
             ) }
        </div>
    )    
}
export default ListOfTen;