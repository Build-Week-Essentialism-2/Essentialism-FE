import React from 'react';
import './App.css';
import Top3 from "./Top3Page"
import './styles/Top3.css'
import Login from './components/Login'
import SignUp from './components/SignUp';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div>
    <LandingPage/>  
    <SignUp/>
    <Login/>
    <Top3 />
    </div>
  );
}

export default App;
