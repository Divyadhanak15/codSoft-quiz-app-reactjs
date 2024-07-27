import React from 'react';
import logo from './logo.svg';
import Quiz from './Quiz';
import Home from './Home';
import Navbar from './Navbar';

const App = () => (
  <div style={{'backgroundColor':'white'}}>

<h1 style={{textAlign:'center', 'backgroundColor':'pink'}}>Welcome to QuizzyMind</h1>

    <br/>
    
    <Home/>

    <Navbar/>
    <br/>
    <br/>
    <br/>
    <Quiz />
  </div>
);

export default App;
