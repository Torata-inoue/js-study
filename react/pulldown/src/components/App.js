import React, {useReducer} from 'react';
import AppContext from '../contexts/AppContext';
import reducer from '../reducers';
import {
  PULL_USER
} from "../reducers/users.js";

const App = ({ data }) => {
  const initState = {
    users: data.users
  };
  const is_close = data.options.onClickUser.isCloseLists;
  const is_pull_user = data.options.onClickUser.isCloseLists;


  const [state, dispatch] = useReducer(reducer, initState);

  const getUser = e => {
    if (!is_close) {
      e.preventDefault();
    }

    const user_id = Number(e.target.dataset.id);

    if (is_pull_user) {
      dispatch({
        type: PULL_USER,
        id: user_id
      })
    }
  };

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div>
        {/*form components*/}
        <input type="text"/>
        {/*list component*/}
        <ul>
          {
            state.users.map((user, index) => {
              return (
                <li key={index} onClick={getUser} data-id={user.id}>
                  icon: {user.icon}
                  name: {user.name}
                </li>
              )
            })
          }
        </ul>
      </div>
    </AppContext.Provider>
  );
};

export default App;
