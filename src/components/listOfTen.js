import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from 'formik';
import ActivityButton from './ActivityComponent';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';


const ListOfTen = (props) => {
    const [topThree, setTopThree] = useState([])
    const tempButtonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const buttonClicked = (event) => {
        event.preventDefault();
        console.log('button is clicked');
        setTopThree([...topThree, {[event.target.name]: event.target.value}])
        console.log(topThree)
    };
    useEffect(() => {
        axiosWithAuth()
        .get('/api/tasks')
        .then(response => {
            console.log(response)
        })
    })
    const TopTenButton = styled.button`
        background: #445FE8;
        color: white; 
        border: 0px solid turquoise;
        width: 100px;   
        height: 40px;
        margin: 20px;
    `
    const TopTenContainer = styled.div`
        text-align: center;
    `
    const TenButtonsContainer = styled.div`
        display: flex;
        flex-direction: column;
        height: 415px;
        flex-wrap: wrap;
        align-content: center;
        justify-content: space-around;
    `
    return (
        <TopTenContainer>
            <h1>Top Ten List</h1>
            <p>Please select your three highest priorities from this list</p>
            <TenButtonsContainer>
                {tempButtonArray.map( item =>
                    <TopTenButton onClick={buttonClicked} name={item} value={item}>{item}</TopTenButton>
                )}
             </TenButtonsContainer>
        </TopTenContainer>
    )    
};

export default ListOfTen;