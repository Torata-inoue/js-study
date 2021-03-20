import React, { useEffect, useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Events from './Events';
import EventForm from './EventForm.js';
import OperationLogs from './OperationLogs.js';
import AppContext from '../contexts/AppContext.js';
import reducer from '../reducers';

const APP_WITH_REDUX = 'appWithRedux';

const App = () => {
  const appState = localStorage.getItem(APP_WITH_REDUX);
  const initState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  };
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    localStorage.setItem(APP_WITH_REDUX, JSON.stringify(state))
  }, [state]);

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
