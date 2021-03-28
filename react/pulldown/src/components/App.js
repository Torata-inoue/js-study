import React, {useReducer} from 'react';
import AppContext from '../contexts/AppContext';
import reducer from '../reducers';
import {
  PULL_USER
} from "../reducers/users.js";

let clicked_user;

const App = ({ data }) => {
  const users = data.users;
  const is_close = data.options.onClickUser.isCloseLists;
  const is_pull_user = data.options.onClickUser.isCloseLists;

  const [state, dispatch] = useReducer(reducer, users);

  const getUser = e => {
    if (!is_close) {
      e.preventDefault();
    }

    // 値取得出来てない
    const user = e.target;

    if (is_pull_user) {
      dispatch({
        type: PULL_USER,
        // id: user.id
      })
    }

    clicked_user = user;
  };

  return (
    <AppContext.Provider>
      <div>
        {/*form components*/}
        <input type="text"/>
        {/*list component*/}
        <ul>
          {
            users.map((user, index) => {
              return (
                <li key={index} onClick={getUser} data-user={user}>icon: {user.icon}, name: {user.name}</li>
              )
            })
          }
        </ul>
      </div>
    </AppContext.Provider>
  );
};

export default App;
export const user = user;
