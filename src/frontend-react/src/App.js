import React from 'react';
import './App.css';
import Stepper from './comps/Stepper'

// the whole data collection process will be implement
// by a stepper component that gets user input
// and a data service component that handles the 
// user requests and communicates with the backend
// in the end requested diagram is created

function App() {
  return (
    <div className="App">
     <Stepper/>
    </div>
  );
}

export default App;
