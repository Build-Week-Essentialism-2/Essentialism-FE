import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Top3 from "./Top3Page";
import ListOfTen from "./components/listOfTen";
import "./styles/Top3.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import LandingPage from "./components/LandingPage";
import "./styles/ActivityPrompt.css";
import FormikActivityForm from "./components/ActivityPrompt";
import NavBar from "./components/NavBar";
import Top20List from "./components/Top20List";
import "./styles/Top20.css";
import Compare from "./components/Compare";
import "./styles/compare.css"
import PrivateRoute from './components/PrivateRoute'

function App(props) {
  const data = [
    { value: "Athleticism", priority: false, user_id: null },
    { value: "Art", priority: false, user_id: null },
    { value: "Literature", priority: false, user_id: null },
    { value: "Creativity", priority: false, user_id: null },
    { value: "Making a difference", priority: false, user_id: null },
    { value: "Independence", priority: false, user_id: null },
    { value: "Kindness", priority: false, user_id: null },
    { value: "Generosity", priority: false, user_id: null },
    { value: 'Carpe diem', priority: false, user_id: null },
    { value: "Community", priority: false, user_id: null },
    { value: "Music", priority: false, user_id: null },
    { value: "Morals", priority: false, user_id: null },
    { value: "Environmentalism", priority: false, user_id: null },
    { value: "Family", priority: false, user_id: null }, 
    { value: "Relationships", priority: false, user_id: null },
    { value: "Humor", priority: false, user_id: null },
    { value: "Successful Career", priority: false, user_id: null },
    { value: "Discovering", priority: false, user_id: null },
    { value: "Friends", priority: false, user_id: null }, 
    { value: "Health", priority: false, user_id: null }
  ];

  return (
    <div>
      <Route path="/" render={props => <NavBar {...props} />} />
      <Route exact path="/" render={props => <LandingPage data={data} />} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={SignUp} />
      <Route path="/allvalues" render={props => <Top20List {...props} data={data}  />} />
      <Route path="/listoften" render={props => <ListOfTen {...props} data={data} />} />
      <Route path="/top3" render={props => <Top3 {...props} data={data} />} />
      <PrivateRoute exact path="/projects" component={FormikActivityForm} {...props}/>
      <PrivateRoute exact path="/compare/:id" component={Compare} {...props} data={data}/>
    </div>
  );
}

export default App;
// render={props => <FormikActivityForm {...props} data={data} />

// render={props => <Compare {...props} data={data} />}