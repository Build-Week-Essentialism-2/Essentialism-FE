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
import NavBar from './components/NavBar';


function App() {
  return (
    <div>
    <NavBar/>
    <Route exact path="/" component={LandingPage}/>  
    <Route path="/login" component={Login} />
    <Route path="/register" component={SignUp} />
    {/* <Route path="/allvalues" component={Top20List} /> */}
    <Route path="/listoften" component={ListOfTen} />
    <Route path="/top3" component={Top3} />
    <Route path="/projects" component={FormikActivityForm} />
    {/* <Route path="/compare" component={Compare} /> */}

    </div>
  );
}

export default App;
