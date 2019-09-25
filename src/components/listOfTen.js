import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const ListOfTen = (props) => {
    const [topThree, setTopThree] = useState([]);
    const [initialState, setInitialState] = useState(props.data)

    //////////////////////////////onClick function for Buttons/////////////////////////////////
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

    /////////////////////////////Reset button onClick function///////////////////////////////
    const resetItems = (event) => {
        event.preventDefault()
        topThree.forEach(item => {
            item.priority = null
            values.push(item)
        })
        setTopThree([])
        console.log("top3", topThree)
    };
    /////////////////////////////NavLink onClick function//////////////////////////////////
    const restrictNav = (event) => {
        if (topThree.length < 3){
            event.preventDefault()
            alert('You must select three items to continue')
        } 
    }
    ////////////////////////////Setting each item in topThree to priority=null////////////////////
    topThree.forEach(item => {
        item.priority = true
        // item.user_id = localStorage.getItem("user_id")
    });
    
    /////////////////////////////Values brought in from list of 20 component//////////////////////////////
    const values = initialState.filter(data => {
        return data.priority === null
    })
    console.log("afterFilter", values)

    ///////////////////////////////////////////Styling////////////////////////////////////////////////
    const TopTenButton = styled.button`
        background: #445FE8;
        color: white; 
        border: 0px solid turquoise;
        padding: 15px;
        margin: 20px;
        font-family: 'Open Sans Condensed', sans-serif;
        font-size: 1.2rem;
        border-radius: 5%; 
    `
    const TopTenContainer = styled.div`
        text-align: center;
    `
    const TenButtonsContainer = styled.div`
        margin: 0 auto;
        display: flex;
        width: 542px;
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
    const PickedItems = styled.p`
        border: 1px dashed #1C7980;
        padding: 0px 5px;
        margin: 5px;
        width: 180px;
        font-size: 1.2rem;
    `
    const PickedContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'Open Sans Condensed', sans-serif;
        font-size: 1.5rem;
    `

    ///////////////////////////////////Component that is displayed////////////////////////////////////////////
    return (
        <TopTenContainer>
            <TenTitle>Your Top Ten Choices</TenTitle>
            <PageInstructinons>Please select your three highest priorities from this list</PageInstructinons>
            <TenButtonsContainer>
                {values.map( item =>
                    <TopTenButton onClick={buttonClicked} name={item.value} value={item.value}>{item.value}</TopTenButton>
                )}
             </TenButtonsContainer>
             <PickedContainer> You have selected:
                 {topThree.map(item => 
                    <PickedItems>{item.value}</PickedItems>
                )}
                <TopTenButton onClick={resetItems}>Reset Choices</TopTenButton>
             </PickedContainer>
             
                <NavLink onClick={restrictNav} to={`/top3`} >
                    <TopTenButton >Next Page</TopTenButton>
                </NavLink>
             
        </TopTenContainer>
    )    
};

export default ListOfTen;