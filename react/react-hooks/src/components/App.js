import React, { useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Events from './Events';
import EventForm from './EventForm.js';
import OperationLogs from './OperationLogs.js';
import AppContext from '../contexts/AppContext.js';
import reducer from '../reducers';

const App = () => {
  const initState = {
    events: [],
    operationLogs: []
  };
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
};

export default App;
