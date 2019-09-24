import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Top3 from "./Top3Page"
import './styles/Top3.css'
import './styles/ActivityPrompt.css'
import FormikActivityForm from "./components/ActivityPrompt"

function App() {
  return (
    <div>
    <Route path="/top3" component={Top3} />
    <Route path="/projects" component={FormikActivityForm} />
    </div>
  );
}

export default App;
