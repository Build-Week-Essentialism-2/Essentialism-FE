import React, {useState} from 'react';
import { withFormik } from 'formik';
import ActivityButton from './ActivityComponent'
const ListOfTen = () => {
    const [topTen, setTopTen] = useState([]);
    const tempButtonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className='top-ten-container'>
            <p>Please select your three highest priorities from this list</p>
            {tempButtonArray.map( item =>
                <Form>
                    <Field type="checkbox" name="checkThree">
                        <ActivityButton name={item}/>
                    </Field>
                </Form>
             ) }
        </div>
    )    
};
const formikListOfTen = withFormik({
    mapPropsToValuesa({ checkThree }){
        return{
           checkThree: checkThree || false
        }
    }
})(ListOfTen);
export default formikListOfTen;