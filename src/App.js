import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import TaskContainer from './components/TaskContainer'
import {TextField, Button, Box} from '@material-ui/core/';

function App() {
  const [taskApp, setTaskApp]=useState([]);

  return (
    <div className="App">
      <header className="App-header">
      <Box mt={10}>
        <Form taskApp = {taskApp} setTaskApp = {setTaskApp}/>
      </Box>

      <Box>
        <TaskContainer taskApp={taskApp}/>
      </Box>
      
      
        

        
      </header>
    </div>
  );
}

export default App;
