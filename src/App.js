import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Top3 from "./Top3Page"
import ListOfTen from './components/listOfTen'
import './styles/Top3.css'
import Login from './components/Login'
import SignUp from './components/SignUp';
import LandingPage from './components/LandingPage';
import './styles/ActivityPrompt.css'
import FormikActivityForm from "./components/ActivityPrompt"


function App() {
  return (
    <div>

    <LandingPage/>  
    <SignUp/>
    <Login/>
    <Route path="/listoften" component={ListOfTen} />
    <Route path="/top3" component={Top3} />
    <Route path="/projects" component={FormikActivityForm} />

    </div>
  );
}

export default App;
