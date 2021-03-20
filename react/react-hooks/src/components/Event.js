import React, {useContext} from 'react';

import AppContext from '../contexts/AppContext.js';
import { DELETE_EVENT } from "../actions";

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext);
  const id = event.id;
  const handleClickDeleteBtn = () => {
    const result = window.confirm(`イベントid=${id}を本当に削除してもいいですか？`);

    if (result) {
      dispatch({ type: DELETE_EVENT, id: id })
    }
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button type="button" className="btn btn-danger" onClick={handleClickDeleteBtn}>削除</button>
      </td>
    </tr>
  )
};

export default Event;
