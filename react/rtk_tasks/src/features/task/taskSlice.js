import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:8000/api/tasks/';
const token = localStorage.localJWT;

export const fetchAsyncGet = createAsyncThunk("task/get", async () => {
  const res = await axios.get(apiUrl, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`
    }
  });
  return res.data;
});

export const fetchAsyncCreate = createAsyncThunk("task/post", async (task) => {
  const res = await axios.post(apiUrl, task, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`
    }
  });
  return res.data;
});

export const fetchAsyncUpdate = createAsyncThunk("task/put", async (task) => {
  const res = await axios.put(`${apiUrl}${task.id}/`, task, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`
    }
  });
  return res.data;
});

export const fetchAsyncDelete = createAsyncThunk("task/delete", async (id) => {
  await axios.delete(`${apiUrl}${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`
    }
  });
  return id;
});

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: [
      {
        id: 0,
        title: '',
        created_at: '',
        updated_at: '',
      }
    ],
    editedTask: {
      id: 0,
      title: '',
      created_at: '',
      updated_at: '',
    },
    selelctedTask: {
      id: 0,
      title: '',
      created_at: '',
      updated_at: '',
    }
  },
  reducers: {
    editTask(state, action) {
      state.editedTask = action.payload;
    },
    selectTask(state, action) {
      state.selelctedTask = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGet.fulfilled, (state, action) => {
      return {
        ...state,
        tasks: action.payload
      };
    });
    builder.addCase(fetchAsyncCreate.fulfilled, (state, action) => {
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
      };
    });
    builder.addCase(fetchAsyncUpdate.fulfilled, (state, action) => {
      return {
        ...state,
        tasks: state.tasks.map((t) => {
          return t.id === action.payload.id ? action.payload : t;
        }),
        selelctedTask: action.payload
      };
    });
    builder.addCase(fetchAsyncDelete.fulfilled, (state, action) => {
      return {
        ...state,
        tasks: state.tasks.filter(t => t.id !== action.payload.id),
        selelctedTask: {id: 0, title: "", created_at: "", updated_at: ""},
      };
    });
  }
})

export const {editTask, selectTask} = taskSlice.actions;

export const selelctSelectedTask = state => state.task.selelctedTask;
export const selectEditTask = state => state.task.editTask;
export const selectTasks = state => state.task.tasks;

export default taskSlice.reducer;
