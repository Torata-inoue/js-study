import {
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from "../actions";

const operationLogs = (state = [], action) => {
  switch (action.type) {
    case ADD_OPERATION_LOG:
      const operation_logs = {
        description: action.description,
        operatedAt: action.operatedAt
      };
      return [operation_logs, ...state];
    case DELETE_ALL_OPERATION_LOGS:
      return [];
    default:
      return state;
  }
};

export default operationLogs;
