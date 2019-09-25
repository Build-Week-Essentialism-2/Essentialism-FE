import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const ListOfTen = (props) => {
    const [topThree, setTopThree] = useState([]);
    const [initialState, setInitialState] = useState(props.data)
    const buttonClicked = (event) => {
         if (topThree.length >= 3) {
            alert('You may only select three')
         } else {
            const newEntry = event.target.value;
            const selected = initialState.filter((info) => {
                return newEntry === info.value
            }) 
            event.preventDefault()
            console.log('button is clicked')
            // setTopThree([...topThree, {[event.target]: event.target.value}])
            const newList = topThree.concat(selected);
            setTopThree(newList)
            console.log(topThree)
            console.log(topThree.length)
         };   
    };
    topThree.forEach(item => {
        item.priority = true
        item.user_id = localStorage.getItem("user_id")
    });
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
        padding: 15px;
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
        height: 500px;
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
                {values.map( item =>
                    <TopTenButton onClick={buttonClicked} name={item.value} value={item.value}>{item.value}</TopTenButton>
                )}
             </TenButtonsContainer>
             <NavLink to = {`/top3`}>Next</NavLink>
        </TopTenContainer>
    )    
};

export default ListOfTen;