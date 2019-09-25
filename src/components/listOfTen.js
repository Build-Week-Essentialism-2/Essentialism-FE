import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';


const ListOfTen = (props) => {
    const [topThree, setTopThree] = useState([]);
    const [initialState, setInitialState] = useState([props.data])
    const buttonClicked = (event) => {
         if (topThree.length >= 3) {
            alert('You may only select three')
         } else {
            event.preventDefault()
            console.log('button is clicked')
            setTopThree([...topThree, {[event.target]: event.target.value}])
            console.log(topThree)
            console.log(topThree.length)
         };   
    };
    // console.log(props.data)
    useEffect(() => {
        axiosWithAuth()
        .get('/api/tasks')
        .then(response => {
            console.log(response)
        })
    }, []);
    // setInitialState(initialState.filter(data => {
    //     data.priority === false
    // }));
    const values = initialState.filter(data => {
        return data.priority === null
    })
    console.log("afterFilter", values)
    const TopTenButton = styled.button`
        background: #445FE8;
        color: white; 
        border: 0px solid turquoise;
        width: 100px;   
        height: 40px;
        margin: 20px;
        font-family: 'Open Sans Condensed', sans-serif;
        font-size: 1.2rem;
        border-radius: 5%; 
        ${props => (props.type === "clicked" ? `background: white` : null)} 
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
    const TenTitle = styled.h1`
        font-family: 'Open Sans Condensed', sans-serif;
    `
    const PageInstructinons = styled.p`
        font-family: 'Open Sans Condensed', sans-serif;
        font-size: 1.6rem;
    `
    return (
        <TopTenContainer>
            <TenTitle>Top Ten List</TenTitle>
            <PageInstructinons>Please select your three highest priorities from this list</PageInstructinons>
            <TenButtonsContainer>
                {initialState.map( item =>
                    <TopTenButton onClick={buttonClicked} name={item.value} value={item.value}>{item.value}</TopTenButton>
                )}
             </TenButtonsContainer>
        </TopTenContainer>
    )    
};

export default ListOfTen;