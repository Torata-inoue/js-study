import React from 'react';
import { Counter } from './features/counter/Counter';
import TaskList from './features/task/TaskList';
import './App.css';
import TaskInput from './features/task/TaskInput';
import Fetch from './features/featch/Fetch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <TaskInput />
        <TaskList />
        <Fetch />
      </header>
    </div>
  );
}

export default App;
