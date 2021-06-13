import React from 'react';
import styles from './TaskDetail.module.css';
import {useSelector} from 'react-redux';
import {selelctSelectedTask} from './taskSlice';

const TaskDetails = () => {
  const selectedTask = useSelector(selelctSelectedTask);
  return (
    <div className={styles.details}>
      {
        selectedTask.title && (
          <>
            <h2>{selectedTask.title}</h2>
            <p>Created at</p>
            <h3>{selectedTask.created_at}</h3>
            <p>Updated at</p>
            <h3>{selectedTask.updated_at}</h3>
          </>
        )
      }
    </div>
  )
}

export default TaskDetails;
